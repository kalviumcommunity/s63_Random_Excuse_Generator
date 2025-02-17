const express = require("express");
const connectdataBse = require("./dataBase");
// database()
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8000;

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" });
});
connectdataBse();

// Basic /ping route with error handling
app.get("/ping", (req, res, next) => {
    try {
        // Simulating a successful response
        res.status(200).send("Pong!");
    } catch (error) {
        // Pass the error to the error-handling middleware
        next(error);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
