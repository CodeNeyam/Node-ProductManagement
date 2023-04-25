const { Product } = require("../models/product"); // Import Product model

// Error handling function
const handleError = (res, error) => {
  res.status(500).send("Error: " + error.message);
};

// Controller method for inserting a product
exports.insert = (req, res) => {
  try {
    Product.insert(req.body, (error, result) => {
      if (error) handleError(res, error);
      else res.send("Product saved successfully!");
    });
  } catch (error) {
    handleError(res, error);
  }
};

// Controller method for updating a product
exports.update = (req, res) => {
  try {
    Product.update(req.body, (error, result) => {
      if (error) handleError(res, error);
      else if (result.affectedRows > 0)
        res.send("Product updated successfully!");
      else res.send("No product found with the given ID");
    });
  } catch (error) {
    handleError(res, error);
  }
};

// Controller method for selecting a product by ID
exports.select = (req, res) => {
  try {
    Product.select(req.body.product_id, (error, result) => {
      if (error) handleError(res, error);
      else if (result.length > 0) res.send(result);
      else res.send("No product found with the given ID");
    });
  } catch (error) {
    handleError(res, error);
  }
};

// Controller method for deleting a product by ID
exports.delete = (req, res) => {
  try {
    Product.delete(req.body.product_id, (error, result) => {
      if (error) handleError(res, error);
      else if (result.affectedRows > 0)
        res.send("Product deleted successfully!");
      else res.send("No product found with the given ID");
    });
  } catch (error) {
    handleError(res, error);
  }
};
