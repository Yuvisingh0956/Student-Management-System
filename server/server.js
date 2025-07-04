require("dotenv").config();
const express = require("express");
const connectDB = require("../server/cofig/db");
const cors = require("cors");

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/students", require("./routes/students"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running"));
