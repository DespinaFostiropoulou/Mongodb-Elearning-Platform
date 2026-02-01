// Increase reviews by 5

use products_db;

db.Products.updateMany(
    {},
    { $inc: { reviews: 5 } }
);
