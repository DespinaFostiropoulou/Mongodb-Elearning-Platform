// Add 10 to price of every product

use products_db;

db.Products.updateMany(
    {},
    { $inc: { price: 10 } }
);
