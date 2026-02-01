// Exercise 3: Add bonus = 10% of salary

use employees_db;

db.Employees.aggregate([
    {
        $addFields: {
            bonus: { $multiply: ["$salary", 0.10] }
        }
    }
]);
