const Product = require("./productmodel");

exports.getProducts = (req, res) => {
  Product.getAll((err, results) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    res.json(results);
  });
};

exports.getProduct = (req, res) => {
  Product.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    res.json(results[0]);
  });
};

exports.createProduct = (req, res) => {
  Product.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    res.json({ id: result.insertId, ...req.body });
  });
};

exports.updateProduct = (req, res) => {
  Product.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    res.json({ message: "Product updated" });
  });
};

exports.deleteProduct = (req, res) => {
  Product.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    res.json({ message: "Product deleted" });
  });
};
