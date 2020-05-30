# Ultimate Fullstack Boilerplate

This is a boilerplate to quickly get started building a full stack web application. It is configured with [Node](https://nodejs.org/en/), [Express](https://expressjs.com/), [React](https://reactjs.org/), [React Router](https://reacttraining.com/react-router/), [Webpack](https://webpack.js.org/), [Jest](https://jestjs.io/), [Nodemon](https://nodemon.io/), [ESLint](https://eslint.org/), and [Docker](https://www.docker.com/). 

---

## Running the App

### Prerequisites

- [Git](https://git-scm.com/)

- [Node.js & npm](https://nodejs.org/en/)

### Install Dependencies

Run `npm install` to install the dependencies and dev-dependencies.

### Run in Development

Run `npm run dev` to start the Node server and webpack dev server. Nodemon and the webpack dev server will listen for and apply any changes. 

In development, you can create a `.env` file in the root of the repository to load environment variables into `process.env`. Enter each environment variable on a new line in the format `[NAME]=[VALUE]`. The use of `.env` files is not suitable for production.

Access the app on port 3000.

### Run in Production

To run in production mode, first build the webpack bundle by running `npm run build`. Then, run `npm start` to run the app in production mode. The webpack bundle and all other assets will be output to the `/dist` folder. 

Access the app on port 8080.

---

## Containerizing the App with Docker

A Dockerfile is included to containerize the application and run it anywhere. The containerized application will automatically run in production mode.

---

## Testing

Run `npm test` to run the tests. Testing is powered by [Jest](https://jestjs.io/) and the test files are located in the `/tests` folder.

---

## Linter

ESLint is used for linting. The linter settings are extended from the AirBnB style.