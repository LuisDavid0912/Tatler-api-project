# Tatler: Restaurant Directory API Project

<details>
<summary><strong>Click to see the Project Description</strong></summary>

## 1. Project Description

This project is for the "Non-Relational Databases for Storing JSON Data" pathway. The goal is to transform Tatler, a traditional restaurant directory, into a modern, dynamic, and personalized application.

This repository contains the backend solution, which includes:
- A NoSQL database built with **MongoDB** to store and manage restaurant, review, and user data flexibly.
- A RESTful API developed with **Express.js** to interact with the database, allowing for functionalities like adding reviews, filtering restaurants, and searching by proximity.

**Version: 1.1.0**

</details>

<details>
<summary><strong>Click to see the Repository Structure</strong></summary>

## 2. Repository Structure

The repository is organized as follows to maintain a clean and scalable structure:

/
├── database/
│   ├── backup/
│   │   └── tatlerDB.gz
│   └── data/
│       └── restaurants.csv
├── docs/
│   └── screenshots/     # Folder for all sprint evidence screenshots
├── node_modules/        # (Ignored by .gitignore)
├── .gitignore
├── app.js               # Main Express.js server file
├── db.js                # MongoDB connection module
├── package-lock.json
├── package.json
└── README.md

</details>

<details>
<summary><strong>Click to see Installation and Usage Instructions</strong></summary>

## 3. Installation and Usage

To set up and run this project locally, follow these steps.

### Prerequisites

- Node.js (v18 or higher recommended)
- MongoDB Community Server installed and running locally.

### Setup and Execution

1.  **Clone the repository:**
    ```bash
    git clone git@github.com:LuisDavid0912/Tatler-api-project.git
    cd Tatler-api-project
    ```

2.  **Install project dependencies:**
    This command reads the `package.json` file and installs Express, MongoDB driver, and other necessary packages.
    ```bash
    npm install
    ```

3.  **Restore the database:**
    (Only needed for the first time) This command restores the `tatlerDB` database from the backup file.
    ```bash
    mongorestore --gzip --archive=./database/backup/tatlerDB.gz
    ```

4.  **Run the application:**
    This command starts the API server using `nodemon`, which will automatically restart on file changes.
    ```bash
    npm start
    ```
The API will be running at `http://localhost:3000`.

</details>

<details>
<summary><strong>Click to see Sprint 1 Evidence (12 Screenshots)</strong></summary>

## 4. Sprint 1 Evidence

This section contains the screenshots that document the completion of the Sprint 1 deliverables.

### 1. Database and Collections Setup
<img width="1024" height="923" alt="Screenshot 2025-10-07 at 10 13 38 a m" src="https://github.com/user-attachments/assets/815844cf-2f26-455d-b78d-aac5de12ff8a" />
Caption: View of the newly created tatlerDB database.



<img width="1016" height="889" alt="Screenshot 2025-10-07 at 10 14 59 a m" src="https://github.com/user-attachments/assets/eecea610-9cd1-404b-9e1a-5ffb421b2e42" />
Caption: The `restaurants` collection inside tatlerDB.



<img width="1020" height="563" alt="Screenshot 2025-10-07 at 10 19 25 a m" src="https://github.com/user-attachments/assets/5f63c936-08a1-40cd-9187-85d074c38242" />
Caption: The first restaurant document successfully inserted.



### 2. Index Creation
<img width="1027" height="603" alt="Screenshot 2025-10-07 at 10 19 49 a m" src="https://github.com/user-attachments/assets/b9cd660a-1b61-4cc4-99f5-dd5f25060420" />
Caption: The `location` field indexed with `2dsphere` for geospatial queries.



<img width="838" height="473" alt="Screenshot 2025-10-07 at 10 20 25 a m" src="https://github.com/user-attachments/assets/06d3fcbd-c1b6-42a8-a174-8ce94eda9cdc" />
Caption: The `cuisine_type` field indexed to speed up filtering.



<img width="661" height="412" alt="Screenshot 2025-10-07 at 10 20 52 a m" src="https://github.com/user-attachments/assets/d07469ec-59ea-419e-91db-c047c6e36abe" />
Caption: The `name` field with a unique index to prevent duplicates.



### 3. Backup and Scripts
<img width="1009" height="850" alt="Screenshot 2025-10-07 at 10 21 36 a m" src="https://github.com/user-attachments/assets/ee58cd17-3dd0-4ab4-a025-edb2e4fed5ad" />
Caption: Successful execution of the `mongodump` command in the terminal.



<img width="1025" height="565" alt="Screenshot 2025-10-07 at 10 23 25 a m" src="https://github.com/user-attachments/assets/11680ebf-fcc6-46be-afd6-ef81e84ede3a" />
Caption: The `tatlerDB.gz` backup file shown in the project structure.



<img width="736" height="920" alt="Screenshot 2025-10-07 at 10 24 54 a m" src="https://github.com/user-attachments/assets/03b79624-d497-4a41-b4b9-e57bce030315" />
Caption: The `./import.sh` script running successfully.



### 4. Project and Version Control
<img width="688" height="266" alt="Screenshot 2025-10-07 at 10 25 33 a m" src="https://github.com/user-attachments/assets/1ab1fda7-b1e0-4619-8cb3-36ce9a7891bb" />
Caption: The complete folder structure as seen in VS Code.



<img width="602" height="372" alt="Screenshot 2025-10-07 at 10 32 20 a m" src="https://github.com/user-attachments/assets/f86ec854-bde4-46dc-96b2-9e34c0fee75c" />
Caption: Committing the initial project setup using Git.



<img width="637" height="492" alt="Screenshot 2025-10-07 at 10 33 29 a m" src="https://github.com/user-attachments/assets/64d4ca5a-eb62-4e0f-96da-3f25913cf1d3" />
Caption: Creating the `v1.0.0` tag to mark the completion of Sprint 1.



</details>

<details>
<summary><strong>Click to see Sprint 2 Evidence (9 Screenshots)</strong></summary>

## 5. Sprint 2 Evidence

This section contains the deliverables for Sprint 2, including the setup of the Node.js environment, Postman tests for the RESTful API, and the self-review documentation.

### 1. Node.js Project Setup
<img width="692" height="522" alt="Screenshot 2025-10-07 at 11 39 57 a m" src="https://github.com/user-attachments/assets/d9d7c11e-ca9f-4d53-87fa-d96bec0db749" />
Caption: `npm init -y` command creating the `package.json` file.



<img width="717" height="330" alt="Screenshot 2025-10-07 at 11 41 23 a m" src="https://github.com/user-attachments/assets/dee3c645-5a81-4abb-bdc2-9ad597995751" />
Caption: Successful installation of `express`, `mongodb`, and `nodemon` dependencies.




<img width="507" height="212" alt="Screenshot 2025-10-07 at 11 42 08 a m" src="https://github.com/user-attachments/assets/1cab6712-7cb6-4448-bfa9-767d47bdaf35" />
Caption: `npm start` command running the server successfully and connecting to the database.



### 2. API Functionality (Postman Tests)

<img width="673" height="227" alt="Screenshot 2025-10-07 at 11 48 31 a m" src="https://github.com/user-attachments/assets/0911773f-1b1a-4fc5-b4ce-e3e8fb04844f" />
Caption: A `201 Created` response is received after sending a new review to the endpoint.



<img width="1023" height="560" alt="Screenshot 2025-10-07 at 11 59 29 a m" src="https://github.com/user-attachments/assets/66885ea4-672a-4821-8f0a-d4e4aeef2891" />
Caption: A `200 OK` response with an array of reviews is received from the same endpoint.




<img width="765" height="907" alt="Screenshot 2025-10-07 at 12 07 40 p m" src="https://github.com/user-attachments/assets/d5ff917e-e3f2-4b2f-8eab-7d73054a71b1" />
Caption: The `reviews` collection in MongoDB Compass, showing the new documents created via the API.



### 3. Code and Version Control
<img width="759" height="909" alt="Screenshot 2025-10-07 at 12 09 20 p m" src="https://github.com/user-attachments/assets/b97a465f-bd7d-41ee-8e68-523d59a1c9f0" />
Caption: Screenshot of the `app.js` file with the server and endpoint logic.



<img width="759" height="896" alt="Screenshot 2025-10-07 at 12 10 05 p m" src="https://github.com/user-attachments/assets/f9a68c0a-255c-43f9-b897-cbc9e89fa5bb" />
Caption: Screenshot of the `db.js` file with the modular database connection logic.



<img width="723" height="880" alt="Screenshot 2025-10-07 at 12 12 08 p m" src="https://github.com/user-attachments/assets/f035fa81-2b14-4cf3-84ab-26b527d23685" />
Caption: Creating the `v1.1.0` tag to mark the completion of Sprint 2.



### 4. Self-Review Documentation
As this is a solo project, a documented self-review was conducted to detect potential issues.

* **Date:** 08 de Octubre, 2025
* **Reviewer:** Self-review (Luis David)
* **Code Reviewed:** `app.js`, `db.js`

**Checklist & Findings:**
> - **Connection Logic:** The `db.js` module correctly handles the connection and provides a `getDb` function. **Status: OK.**
> - **Server Initialization:** The server in `app.js` correctly waits for a successful database connection before starting to listen for requests. **Status: OK.**
> - **Endpoint Functionality:** Both `GET` and `POST` endpoints for reviews are working as expected. ID validation using `ObjectId.isValid()` was included as a good practice. **Status: OK.**
> - **Error Handling:** Endpoints have `.catch()` blocks to handle potential database errors and return a `500` status. **Status: OK.**
> - **Code Comments & Organization:** The code is commented and organized into logical blocks. **Status: OK.**

**Potential Improvement for Future Sprints:**
> The API currently does not validate the *content* of the request body (e.g., is the `rating` actually a number between 1 and 5?). This could be implemented in a future sprint using a validation library like `Joi` or `express-validator` for more robustness.



</details>

<details>
<summary><strong>Click to see Sprint 3 Evidence (2 Screenshots)</strong></summary>

## 6. Sprint 3 Evidence

This section contains the Postman tests for the new search and geospatial features.

### 1. Filter by Cuisine Test
<img width="1426" height="895" alt="Screenshot 2025-10-12 at 7 08 09 p m" src="https://github.com/user-attachments/assets/2c1700f2-cd54-4dfa-854d-2149840f73bc" />


*Caption: A `200 OK` response showing the result of filtering restaurants by `cuisine=Italian`.*

### 2. Geospatial Search Test


<img width="1447" height="886" alt="Screenshot 2025-10-12 at 7 08 44 p m" src="https://github.com/user-attachments/assets/2b1806e5-1828-409f-b57f-012a81c489ea" />

*Caption: A `200 OK` response showing restaurants sorted by proximity to a given coordinate pair.*

</details>

<details>
<summary><strong>Click to see the Professional Services Proposal</strong></summary>

## 8. Professional Services Proposal

> This document serves as a formal proposal outlining the scope, deliverables, timeline, and investment for the development of the Tatler API project.

| 📑 Professional Services Proposal | |
| :--- | :--- |
| **Engineer's Name:** | Luis David |
| **Specialization:** | Data Engineer | Backend Developer |
| **Contact:** | `luisdavidmtz3@gmail.com` \| Monterrey, Mexico |
| **Date:** | October 13, 2025 |

### 1. Introduction
> We appreciate the opportunity to present our proposal. Our objective is to provide professional solutions in the area of **backend software development and NoSQL database management**, ensuring quality, timely delivery, and a favorable cost-benefit ratio for your company.

### 2. Project Scope
This service includes:
- **Activity 1:** Design and modeling of the NoSQL database in MongoDB, including the definition of collections, flexible schemas, and high-performance indexes (text and geospatial).
- **Activity 2:** Development of a robust and scalable RESTful API using Node.js and the Express.js framework for managing restaurant and review data.
- **Activity 3:** Implementation of endpoints for key functionalities:
    -   User review management (Create and Read).
    -   Restaurant search with attribute filtering (by cuisine type).
    -   Restaurant search by geographic proximity to the user's location.

**Not included (unless agreed upon separately):**
-   User interface (frontend) development.
-   Hosting, deployment, or configuration of production servers.
-   Ongoing post-delivery maintenance and support (available under a separate plan).

### 3. Deliverables
Upon project completion, the following will be delivered:
- **Complete and commented source code** in a version control repository (GitHub).
- **Detailed technical project documentation**, including structure, endpoints, and an installation guide (`README.md`).
- **Configured database with an initial backup** and scripts for sample data import.

### 4. Estimated Timeline
| Phase | Estimated Duration |
| :--- | :--- |
| **Phase 1 – Planning & DB Setup (Sprint 1)** | 1 week |
| **Phase 2 – API & Feature Development (Sprints 2 & 3)** | 2 weeks |
| **Phase 3 – Testing, Documentation & Final Delivery** | 1 week |
| **Total estimated time:** | **4 weeks** |

### 5. Financial Investment
**Proposed pricing structure:**
- **Option A: Fixed Project Price -> $1,500.00 USD** (Total)
- **Option B: Hourly Rate -> $20.00 USD** (Per hour for modifications or consulting)
- **Option C: Post-Delivery Support Package -> $250.00 USD** (Block of 20 hours of technical support)

> Prices include professional labor. They do not include VAT or costs for materials or licenses, unless specified.

### 6. Payment Terms
- **30%** advance upon acceptance of the proposal.
- **40%** upon delivery of the functional API with all features (end of Sprint 3).
- **30%** upon final delivery of the repository and complete documentation.
- **Quote validity:** 30 days from the date of issue.

### 7. Client Benefits
Work delivered by a professional focused on **backend development and NoSQL databases**.
- **Scalable and flexible database (MongoDB)** that easily adapts to future business growth.
- **High-performance API** ready to be consumed by any web or mobile application.
- **Advanced features (geospatial search)** that enable a superior and competitive user experience.
- **Collaboration and transparency** throughout all project phases via version control.

### Sincerely,
| | |
| :--- | :--- |
| **Full Name:** | Luis David |
| **Professional Title:** | Data Engineer |
| **Contact Information:** | `luisdavidmtz3@gmail.com` |

</details>
