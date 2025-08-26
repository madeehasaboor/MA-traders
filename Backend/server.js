const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mysql = require("mysql2");
const productRoutes = require("./routes/productrRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

dotenv.config();
const app = express();

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'corrugated_db',
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
    console.log("Server will continue without database connection...");
  } else {
    console.log("Connected to MySQL database.");
  }
});

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// Server
const PORT = process.env.SERVER_PORT || process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 API endpoints:`);
  console.log(`   - Products: http://localhost:${PORT}/api/products`);
  console.log(`   - Users: http://localhost:${PORT}/api/users`);
  console.log(`   - Orders: http://localhost:${PORT}/api/orders`);
});
