const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const logger = require("./middleware/logger");

const app = express();

// Routes
const studentRoutes = require("./routes/students");

app.use(express.json());
app.use("/api", logger);
app.use("/api/students", studentRoutes);

module.exports = app;
