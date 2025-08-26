const db = require("../config/database");

exports.createOrder = (req, res) => {
  const { userId, productId, quantity } = req.body;
  db.query(
    "INSERT INTO orders (userId, productId, quantity) VALUES (?, ?, ?)",
    [userId, productId, quantity],
    (err, result) => {
      if (err) return res.status(500).json({ message: "DB Error" });
      res.json({ id: result.insertId, userId, productId, quantity });
    }
  );
};

exports.getOrders = (req, res) => {
  db.query("SELECT * FROM orders", (err, results) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    res.json(results);
  });
};

exports.getUserOrders = (req, res) => {
  db.query("SELECT * FROM orders WHERE userId = ?", [req.params.userId], (err, results) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    res.json(results);
  });
};
