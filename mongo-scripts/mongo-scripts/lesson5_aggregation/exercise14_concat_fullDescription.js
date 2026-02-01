// Create fullDescription = category + " - " + name

use products_db;

db.Products.updateMany(
    {},
    {
        $set: {
            fullDescription: {
                $concat: ["$category", " - ", "$name"]
            }
        }
    }
);
