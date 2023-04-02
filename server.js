const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const errorHandler = require("./Middleware/errorMiddleware");
const connectDB = require("./config/connect");
const app = express();
app.use(errorHandler);
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/rest", require("./routes/testRoutes"));

app.listen(process.env.PORT, () =>
  console.log(`Server has started on Port:${process.env.PORT.blue}`)
);
