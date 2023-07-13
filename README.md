### Requirements
The application should include the following features:

#### Frontend
A search bar that allows users to search for data within the loaded CSV file.
A button or link to load a CSV file.
Display the loaded CSV data as cards on the website.
A responsive design that works well on both desktop and mobile devices.
Clear and user-friendly error handling.

#### Backend
An endpoint that allows the frontend to load the CSV file.
An endpoint that allows the frontend to search through the loaded CSV data.
The search endpoint should accept query parameters for search terms and filters, and should return the matching results.
Appropriate error handling for invalid search queries or other errors.

#### Fullstack
Implement both frontend and backend features as described above.
Ensure that the frontend can communicate with the backend API to load the CSV data and search through it.

### Instructions
#### Frontend
It should be implemented as a single-page application (SPA) using React.
It should include a button that allows users to load a CSV file from their local machine.
The loaded CSV data should be displayed as cards on the website, with each card displaying all the data from a single row of the CSV file.
It should include a search bar that allows users to search for data within the loaded CSV file.
The search bar should update the displayed cards to show only the matching results.
If doing only Frontend, load the data in memory.

#### Backend
The backend should be implemented as a RESTful API using Node. (Try not to use an opinionated framework such as Adonis or Nest).
The backend must include the following endpoints:
[POST /api/files] An endpoint that accepts a CSV file upload from the frontend and stores the data in a database or a data structure.
[GET /api/users] Should include an endpoint that allows the frontend to search through the loaded CSV data.
The search endpoint should accept a ?q= query parameter for search terms and should search through EVERY column of the CSV
The backend should include appropriate error handling for invalid requests or other errors.

#### CSV Data Example
```
name,city,country,favorite_sport
John Doe,New York,USA,Basketball
Jane Smith,London,UK,Football
Mike Johnson,Paris,France,Tennis
Karen Lee,Tokyo,Japan,Swimming
Tom Brown,Sydney,Australia,Running
Emma Wilson,Berlin,Germany,Basketball
```
#### Evaluation
We will evaluate your solution based on the following criteria:

Completion of all required features and functionality.
Quality and organization of code.
Quality of automated tests.
User-friendliness and responsiveness of the frontend.
Performance and efficiency of the backend.