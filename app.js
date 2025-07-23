const express = require("express");
const app = express();
const notesRoutes = require("./routes/notes.route");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

app.use(cors(
  {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  }
));
app.use(express.json());
app.use("/api/v1", notesRoutes);

module.exports = app;
