const express = require("express"); // Import Express library
const app = express(); // Create an instance of the Express application
const productRoutes = require("./routes/productRoutes"); // Import product routes module
const path = require("path"); // Import built-in path module

// Middleware to parse incoming JSON payloads in the request body
app.use(express.json());
// Middleware to parse incoming request bodies encoded as URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Mount the product routes module at the root path ("/") of the application
app.use("/", productRoutes);
// Serve static files (like images, stylesheets, and JavaScript files) from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Start the Express application listening for incoming HTTP requests on port 8082
app.listen(8082, () => {
  console.log("Server is running on port 8082");
});
