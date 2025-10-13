const express = require('express');
const { connectToDb, getDb } = require('./db');
const { ObjectId } = require('mongodb');

const app = express();
app.use(express.json()); // This middleware allows the API to receive and understand JSON.

// Connection to the Database
let db;

connectToDb((err) => {
// If there is no error in the connection, then the server starts listening for requests.
  if (!err) {
    app.listen(3000, () => {
      console.log('App listening on port 3000');
    });
    db = getDb(); // We obtain the connection to the database
  }
});

// API Endpoints

// Welcome Endpoint
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Tatler API!' });
});

// --- Endpoints for Reviews ---

// GET: Get all reviews for a specific restaurant
app.get("/restaurants/:id/reviews", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Invalid Restaurant ID format." });
  }

  db.collection("reviews")
    .find({ restaurant_id: new ObjectId(req.params.id) })
    .toArray()
    .then((reviews) => {
      res.status(200).json(reviews);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the reviews." });
    });
});

// POST: Add a new review to a restaurant
app.post("/restaurants/:id/reviews", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Invalid Restaurant ID format." });
  }

  const reviewToInsert = {
    ...req.body,
    restaurant_id: new ObjectId(req.params.id),
    created_at: new Date(),
  };

  db.collection("reviews")
    .insertOne(reviewToInsert)
    .then((result) => {
      res
        .status(201)
        .json({
          message: "Review added successfully",
          insertedId: result.insertedId,
        });
    })
    .catch(() => {
      res.status(500).json({ error: "Could not add the new review." });
    });
}); 

// ---- New Endpoints for Sprint 3 ----

// GET: Search and filter restaurants
// Example of use: /restaurants?cuisine=Mexican
app.get("/restaurants", (req, res) => {
  const cuisine = req.query.cuisine;
  let filter = {};

  if (cuisine) {
    filter = { cuisine_type: cuisine };
  }

  let restaurants = [];
  db.collection("restaurants")
    .find(filter)
    .sort({ name: 1 })
    .forEach((restaurant) => restaurants.push(restaurant))
    .then(() => {
      res.status(200).json(restaurants);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the documents" });
    });
});

// GET: Search for nearby restaurants (Geospatial Query)
// Example of use: /restaurants/near?lat=25.651034&lon=-100.286362
app.get("/restaurants/near", (req, res) => {
  const lat = parseFloat(req.query.lat);
  const lon = parseFloat(req.query.lon);

  if (isNaN(lat) || isNaN(lon)) {
    return res
      .status(400)
      .json({ error: "Latitude and longitude must be valid numbers." });
  }

  db.collection("restaurants")
    .find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [lon, lat],
          },
        },
      },
    })
    .limit(10)
    .toArray()
    .then((restaurants) => {
      res.status(200).json(restaurants);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Could not fetch nearby restaurants." });
    });
});
