// Convert name to lowercase

use products_db;

db.Products.updateMany(
    {},
    [
        {
            $set: {
                name: { $toLower: "$name" }
            }
        }
    ]
);
