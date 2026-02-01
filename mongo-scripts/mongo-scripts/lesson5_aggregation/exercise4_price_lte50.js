// Products with price <= 50

use products_db;

db.Products.find({
    price: { $lte: 50 }
}).pretty();
