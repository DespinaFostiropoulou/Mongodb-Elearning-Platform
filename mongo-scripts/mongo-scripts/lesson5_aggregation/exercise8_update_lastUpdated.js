// Update lastUpdated field with current date

use products_db;

db.Products.updateMany(
    {},
    { $set: { lastUpdated: new Date() } }
);
