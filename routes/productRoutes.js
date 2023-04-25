const express = require("express");
// Create a new router object
const router = express.Router();
// Import the productController
const productController = require("../controllers/productController");

// Define route handlers for each action related to products
// Route for inserting a new product
router.post("/insert", productController.insert);
// Route for updating an existing product
router.post("/update", productController.update);
// Route for selecting a product by its ID
router.post("/select", productController.select);
// Route for deleting a product by its ID
router.post("/delete", productController.delete);

// Export the router object for use in other modules
module.exports = router;
