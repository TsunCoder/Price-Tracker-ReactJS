const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const categoryRoute = require("./routes/category");

dotenv.config();
// Connect Database
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to Mongoose");
});

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("common"));

// Routes
app.use("/api/category", categoryRoute);

app.listen(8000, () => {
  console.log("Server is running ... ");
});
