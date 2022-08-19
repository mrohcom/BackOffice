const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

connectDB();

//Middelware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "20mb" }));
app.use(cors());

app.use("/api/v/employee", require("./Routes/employee"));
app.use("/api/v/news", require("./Routes/news"));

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is runing");
});
