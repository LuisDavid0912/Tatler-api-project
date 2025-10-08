const { MongoClient } = require('mongodb');

let dbConnection;
// Connection string to the local database.
// Ensure that the name at the end (‘tatlerDB’) is the name of your database.
const connectionString = 'mongodb://localhost:27017/tatlerDB';

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(connectionString)
      .then((client) => {
        dbConnection = client.db();
        console.log('Successfully connected to MongoDB!');
        return cb(); // Call the callback without errors if the connection was successful
      })
      .catch(err => {
        console.error(err);
        return cb(err); // Call the callback with the error if it failed
      });
  },
  getDb: () => dbConnection,
};