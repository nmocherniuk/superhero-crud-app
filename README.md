# Superhero CRUD Web Application

This is a web application designed to manage a superhero database, where users can perform CRUD (Create, Read, Update, Delete) operations on superhero data. The application is built using **React** for the frontend and **Node.js (Express.js)** for the backend.

## Description

The Superhero Database application allows users to:
- **Create, Edit, and Delete Superheroes**: Add new superheroes, edit their information, and remove them from the database.
- **Image Management**: Assign and remove images for each superhero.
- **Pagination**: List superheroes with pagination (5 superheroes per page).
- **Superhero Details**: View detailed information about each superhero, including multiple images.

### Superhero Model

A Superhero consists of:
- `nickname`: The superhero's name (e.g., Superman)
- `real_name`: The superhero's real name (e.g., Clark Kent)
- `origin_description`: A brief description of the superhero's origin story.
- `superpowers`: A list of the superhero's powers.
- `catch_phrase`: The superhero's iconic catchphrase.
- `images`: A set of images related to the superhero.

## Features

- **Create**: Add new superheroes to the database.
- **Edit**: Modify the information of existing superheroes.
- **Delete**: Remove superheroes from the database.
- **Pagination**: View a list of superheroes, with 5 per page.
- **Superhero Details**: View detailed information and images for each superhero.
- **Image Management**: Add and remove images for superheroes.

## Tech Stack

### Backend:
- **Node.js**: JavaScript runtime used for building the backend server.
- **Express.js**: Web framework for building the REST API.
- **MySQL(Sequelize)**: NoSQL database used to store superhero data (including images).

### Frontend:
- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for the frontend to interact with the backend API.
- **React Router**: For navigation between different views (e.g., homepage, superhero details, edit page).
- **Framer Motion**: For animations in the frontend.
- **CSS Modules**: Scoped CSS to style the React components.

### Steps to run the backend:
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/nmocherniuk/superhero-crud-app.git
    cd superhero-crud-app
    ```

2. Navigate to the backend directory and install the dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Set up your MySQL database.

4. Start the backend server:
    ```bash
    npm start
    ```

    The backend will run on `http://localhost:3001`.

## Frontend Setup

### Prerequisites:
- Node.js (version 16.x or above)

### Steps to run the frontend:
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

    The frontend will run on `http://localhost:3000`.

## Running the Application

1. Start the **backend** server as described in the "Backend Setup" section.
2. Start the **frontend** server as described in the "Frontend Setup" section.
3. Open a browser and navigate to `http://localhost:3000` to use the application.

### License

You can copy and paste this Markdown code into your README file on GitHub, and it will render nicely!
