// Products with price > 100 AND available

use products_db;

db.Products.find({
    price: { $gt: 100 },
    isAvailable: true
}).pretty();
