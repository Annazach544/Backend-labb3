const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const experienceRoutes = require("./routes/experienceRoutes");

const app = express();

const PORT = process.env.PORT || 3000;
const DATABASE = process.env.DATABASE;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/experiences", experienceRoutes);

// Test
app.get("/", (req, res) => {
    res.json({ message: "REST API for work experiences" });
});

// Anslut till MongoDB 
mongoose.connect(DATABASE)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Connection error:", error);
    });
