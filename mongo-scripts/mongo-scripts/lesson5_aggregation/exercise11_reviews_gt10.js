// Products with more than 10 reviews

use products_db;

db.Products.find({
    reviews: { $gt: 10 }
}).pretty();
