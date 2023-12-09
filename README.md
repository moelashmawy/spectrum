# Rocket Monitoring App

This web application provides real-time monitoring and visualization of important sensor data from the "Spectrum" launch vehicle during its maiden flight. The app is built using Vite and includes features for both manual data retrieval and continuous live streaming.

## Getting Started

To run the app locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/moelashmawy/spectrum

   ```

2. **Install Dependencies:**

   ```bash
   cd spectrum
   npm install

   ```

3. **Run the App:**

   ```bash
   npm start
   The application will be accessible at http://localhost:3000.
   ```

## Scripts

- **Start:**

  ```bash
  npm start
  Launches the development server for the app.

  ```

- **Test:**

  ```bash
  npm test
  Runs Jest tests.

  ```

- **Test (Watch):**

  ```bash
  npm run test:watch
  Runs Jest tests in watch mode.

  ```

- **Prepare:**
  ```bash
  npm run prepare
  Installs Husky Git hooks.
  ```

## Features

- **Manual Data Retrieval:**
  Click the "Update Data" button to manually fetch sensor data from the launch vehicle.

- **Live Streaming:**
  The app continuously streams live sensor data from the launch vehicle through a WebSocket connection.

- **Critical Status Alerts:**
  Receive alerts when critical status changes occur, such as when user action is required.

- **Act on Spectrum:**
  Users can take action on the launch vehicle by clicking the provided button when required.

## Technologies Used

- **Vite:** The fast, opinionated web framework for React development.
- **React:** A JavaScript library for building user interfaces.
- **Redux:** managing and centralizing application state.
- **Jest:** JavaScript testing framework.
- **ESLint and Prettier:** Code linting and formatting tools.
- **Husky:** Git hooks for running tasks before commits.
