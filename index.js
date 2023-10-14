require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const createRoute = require("./routes/create");
const getRoute = require("./routes/get");
const deleteRoute = require("./routes/delete");
const updateRoute = require("./routes/update");
const cors = require("cors");

const port = "5000" || process.env.PORT;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log(err));

app.use("/api/create", createRoute);
app.use("/api/tasks", getRoute);
app.use("/api/delete", deleteRoute);
app.use("/api/update", updateRoute);

app.listen(port, () => {
  console.log("Backend is running...");
});
