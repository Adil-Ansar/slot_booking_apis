# Slot Booking APIs

## Overview
This project provides APIs for managing slot bookings. It allows users to create slots and fetch a list of available slots.

## Project Structure
- `server.js`: Main server file for running the application
- `slotBookHandler.js`: Contains logic for handling slot creation and retrieval
- `dbConnect.js`: Handles the database connection
- `slotRoutes.js`: Defines the routes for slot-related endpoints
- `helper/`: Directory containing helper files
- `package.json`: Configuration file containing project details and dependencies
- `README.md`: Documentation file (you're currently reading this)

## Project Setup

### Installation
1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd slot_booking_apis`
3. Install dependencies: `npm install`

### Running the Application
- For production: `npm start`
- For development with automatic server restart on file changes: `npm run dev`

### Available Endpoints
- **Create Slot**: `POST /slot/create` - Create a new slot
- **List Slots**: `GET /slot/list` - Get a list of available slots

## Dependencies
- [Express](https://www.npmjs.com/package/express): Web framework for Node.js
- [Body-parser](https://www.npmjs.com/package/body-parser): Node.js body parsing middleware
- [Dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a .env file
- [MySQL](https://www.npmjs.com/package/mysql): MySQL client for Node.js
- [Nodemon](https://www.npmjs.com/package/nodemon): Utility that monitors for changes and automatically restarts the server

## Author
- **Adil**

## License
- ISC
