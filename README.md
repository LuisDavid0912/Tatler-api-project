# Tatler: Restaurant Directory API Project

## 1. Project Description

This project is for the "Non-Relational Databases for Storing JSON Data" pathway. The goal is to transform Tatler, a traditional restaurant directory, into a modern, dynamic, and personalized application.

This repository contains the backend solution, which includes:
- A NoSQL database built with **MongoDB** to store and manage restaurant, review, and user data flexibly.
- A RESTful API developed with **Express.js** to interact with the database, allowing for functionalities like adding reviews, filtering restaurants, and searching by proximity.

**Version: 1.0.0**

## 2. Repository Structure

The repository is organized as follows to maintain a clean and scalable structure:

/
├── database/
│   ├── backup/
│   │   └── tatlerDB.gz      # Database backup file (mongodump)
│   ├── data/
│   │   └── restaurants.csv  # Sample data for import
│   └── import.sh            # Script to import CSV data
├── .gitignore
└── README.md


## 3. Installation and Usage (Sprint 1)

To set up the database environment for this project, follow these steps.

### Prerequisites

- MongoDB Community Server installed locally.
- `mongodump` and `mongoimport` command-line tools available in your system's PATH.

### Database Setup

1.  **Clone the repository:**
    ```bash
    git clone git@github.com:LuisDavid0912/Tatler-api-project.git
    
    cd tatler-api-project
    ```

2.  **Restore the database backup:**
    This command restores the `tatlerDB` database, including its collections and indexes, from the backup file.
    ```bash
    mongorestore --gzip --archive=./database/backup/tatlerDB.gz
    ```

3.  **(Alternative) Import data from CSV:**
    If you want to populate the `restaurants` collection from the source CSV file, you can run the provided script. Make sure the script has execution permissions (`chmod +x ./database/import.sh`).
    ```bash
    ./database/import.sh
    ```
