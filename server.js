const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connect to DB
connectDB();

app.get("/", (req, res) => {
	res.send("Hello World!");
});

// Init middleware
app.use(express.json({ extended: false }));

// Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server running on ${PORT}.`);
});
