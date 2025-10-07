#!/bin/bash
echo "Starting import into database 'tatlerDB'..."
mongoimport --db "tatlerDB" --collection "restaurants" --type csv --headerline --file "./data/restaurants.csv"
echo "Import finished."