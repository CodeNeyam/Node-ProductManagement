const mysql = require("mysql");

// Your database connection configuration
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});

// Connect to the MySQL database
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected to the database!");
});

const Product = {
  // Method to insert a new product into the database
  insert: function (product, callback) {
    const sql = "INSERT INTO products SET ?";
    connection.query(sql, product, callback);
  },

  // Method to update an existing product in the database
  update: function (product, callback) {
    const sql =
      "UPDATE products SET product_name = ?, product_quantity = ?, product_price = ?, product_size = ? WHERE product_id = ?";
    connection.query(
      sql,
      [
        product.product_name,
        product.product_quantity,
        product.product_price,
        product.product_size,
        product.product_id,
      ],
      callback
    );
  },

  // Method to select a product by its ID from the database
  select: function (product_id, callback) {
    const sql = "SELECT * FROM products WHERE product_id = ?";
    connection.query(sql, product_id, callback);
  },

  // Method to delete a product by its ID from the database
  delete: function (product_id, callback) {
    const sql = "DELETE FROM products WHERE product_id = ?";
    connection.query(sql, product_id, callback);
  },
};

// Export the Product object for use in other modules
module.exports = {
  Product,
};
