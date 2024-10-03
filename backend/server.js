const express = require("express");
const app = express();
const notes = require("./data/notes");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./db");
const {notFound, errorHandler} = require('./middlewares/errorMiddleware')
dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}..`));
app.use(express.json());
app.use(notFound , errorHandler)
app.get("/", (req, res) => {
  res.send("API is running");
});
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.use("/api/users", userRoutes);
