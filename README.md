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

## 4. Sprint 1 Evidence

This section contains the screenshots that document the completion of the Sprint 1 deliverables.

<details>
<summary>Click to expand and see all 12 screenshots</summary>

### 1. Database and Collections Setup
Here you can see the creation of the `tatlerDB` database and the `restaurants` collection in MongoDB Compass.

![Database Creation] <img width="1024" height="923" alt="Screenshot 2025-10-07 at 10 13 38 a m" src="https://github.com/user-attachments/assets/815844cf-2f26-455d-b78d-aac5de12ff8a" />
*Caption: View of the newly created tatlerDB database.

![Collections View]<img width="1016" height="889" alt="Screenshot 2025-10-07 at 10 14 59 a m" src="https://github.com/user-attachments/assets/eecea610-9cd1-404b-9e1a-5ffb421b2e42" />

*Caption: The `restaurants` collection inside tatlerDB.*

![First Document Inserted] <img width="1020" height="563" alt="Screenshot 2025-10-07 at 10 19 25 a m" src="https://github.com/user-attachments/assets/5f63c936-08a1-40cd-9187-85d074c38242" />

*Caption: The first restaurant document successfully inserted.*

### 2. Index Creation
The following images show the configuration of the three required indexes for the `restaurants` collection.

![2dsphere Index] <img width="1027" height="603" alt="Screenshot 2025-10-07 at 10 19 49 a m" src="https://github.com/user-attachments/assets/b9cd660a-1b61-4cc4-99f5-dd5f25060420" />

*Caption: The `location` field indexed with `2dsphere` for geospatial queries.*

![Cuisine Type Index] <img width="838" height="473" alt="Screenshot 2025-10-07 at 10 20 25 a m" src="https://github.com/user-attachments/assets/06d3fcbd-c1b6-42a8-a174-8ce94eda9cdc" />

*Caption: The `cuisine_type` field indexed to speed up filtering.*

![Unique Name Index] <img width="661" height="412" alt="Screenshot 2025-10-07 at 10 20 52 a m" src="https://github.com/user-attachments/assets/d07469ec-59ea-419e-91db-c047c6e36abe" />

*Caption: The `name` field with a unique index to prevent duplicates.*

### 3. Backup and Scripts
Evidence of the database backup process and script execution.

![mongodump Command] <img width="1009" height="850" alt="Screenshot 2025-10-07 at 10 21 36 a m" src="https://github.com/user-attachments/assets/ee58cd17-3dd0-4ab4-a025-edb2e4fed5ad" />

*Caption: Successful execution of the `mongodump` command in the terminal.*

![Backup File Created] <img width="1025" height="565" alt="Screenshot 2025-10-07 at 10 23 25 a m" src="https://github.com/user-attachments/assets/11680ebf-fcc6-46be-afd6-ef81e84ede3a" />

*Caption: The `tatlerDB.gz` backup file shown in the project structure.*

![Import Script Execution] <img width="736" height="920" alt="Screenshot 2025-10-07 at 10 24 54 a m" src="https://github.com/user-attachments/assets/03b79624-d497-4a41-b4b9-e57bce030315" />

*Caption: The `./import.sh` script running successfully.*

### 4. Project and Version Control
Screenshots related to the project setup in the local environment and Git.

![Project Folder Structure] <img width="688" height="266" alt="Screenshot 2025-10-07 at 10 25 33 a m" src="https://github.com/user-attachments/assets/1ab1fda7-b1e0-4619-8cb3-36ce9a7891bb" />

*Caption: The complete folder structure as seen in VS Code.*

![Git Add and Commit] <img width="602" height="372" alt="Screenshot 2025-10-07 at 10 32 20 a m" src="https://github.com/user-attachments/assets/f86ec854-bde4-46dc-96b2-9e34c0fee75c" />

*Caption: Committing the initial project setup using Git.*

![Git Tag for Version 1.0.0] <img width="637" height="492" alt="Screenshot 2025-10-07 at 10 33 29 a m" src="https://github.com/user-attachments/assets/64d4ca5a-eb62-4e0f-96da-3f25913cf1d3" />

*Caption: Creating the `v1.0.0` tag to mark the completion of Sprint 1.*

</details>
