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
app.get('/restaurants/:id/reviews', (req, res) => {
  const restaurantId = req.params.id;

  // We validate that the ID provided is a valid MongoDB ObjectId.
  if (!ObjectId.isValid(restaurantId)) {
    return res.status(400).json({ error: 'Invalid Restaurant ID format.' });
  }

  // We search the ‘reviews’ collection for all documents that match the restaurant_id
  db.collection('reviews')
    .find({ restaurant_id: new ObjectId(restaurantId) })
    .toArray()
    .then(reviews => {
      res.status(200).json(reviews);
    })
    .catch(() => {
      res.status(500).json({ error: 'Could not fetch the reviews.' });
    });
});

// POST: Add a new review to a restaurant
app.post('/restaurants/:id/reviews', (req, res) => {
  const restaurantId = req.params.id;
  const newReview = req.body; // The body of the request (the JSON sent by the client)

  if (!ObjectId.isValid(restaurantId)) {
    return res.status(400).json({ error: 'Invalid Restaurant ID format.' });
  }

  // We prepare the document to be inserted, adding the restaurant ID and the creation date.
  const reviewToInsert = {
    ...newReview,
    restaurant_id: new ObjectId(restaurantId),
    created_at: new Date()
  };

  db.collection('reviews')
    .insertOne(reviewToInsert)
    .then(result => {
      res.status(201).json({ message: 'Review added successfully', insertedId: result.insertedId });
    })
    .catch(() => {
      res.status(500).json({ error: 'Could not add the new review.' });
    });
});