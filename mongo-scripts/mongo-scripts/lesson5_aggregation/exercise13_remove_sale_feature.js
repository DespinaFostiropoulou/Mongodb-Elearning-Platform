// Remove "sale" from features array

use products_db;

db.Products.updateMany(
    {},
    { $pull: { features: "sale" } }
);
