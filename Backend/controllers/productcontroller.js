const db = require("../config/database");

exports.getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    res.json(results);
  });
};

exports.getProduct = (req, res) => {
  db.query("SELECT * FROM products WHERE id = ?", [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    res.json(results[0]);
  });
};

exports.createProduct = (req, res) => {
  const { name, price, description } = req.body;
  db.query(
    "INSERT INTO products (name, price, description) VALUES (?, ?, ?)",
    [name, price, description],
    (err, result) => {
      if (err) return res.status(500).json({ message: "DB Error" });
      res.json({ id: result.insertId, name, price, description });
    }
  );
};

exports.updateProduct = (req, res) => {
  const { name, price, description } = req.body;
  db.query(
    "UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?",
    [name, price, description, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ message: "DB Error" });
      res.json({ message: "Product updated" });
    }
  );
};

exports.deleteProduct = (req, res) => {
  db.query("DELETE FROM products WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    res.json({ message: "Product deleted" });
  });
};
