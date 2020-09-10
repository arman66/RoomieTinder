const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

//connect to the database

connectDB();

//Init Middleware, alllows to get date in req.body

app.use(express.json({ extended: false }));

//Define Routes

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/listings", require("./routes/api/listing"));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("API Running"));

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
