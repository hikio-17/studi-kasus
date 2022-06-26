const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const itemRoutes = require("./routes/itemRoutes");
const userRoutes = require("./routes/userRoutes");
const billsRoutes = require("./routes/billsRoutes");

require("colors");
const connectDB = require("./config/config");

//dotenv config
dotenv.config();

//connect to MongoDB
connectDB();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.send("<h1>POS BACKEND</h1>");
});
app.use("/api/items", itemRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bills", billsRoutes);

//port
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`.bgWhite);
});
