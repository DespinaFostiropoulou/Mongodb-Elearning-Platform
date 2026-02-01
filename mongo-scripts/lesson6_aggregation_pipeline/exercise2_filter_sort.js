// Exercise 2: Filter salary > 50000 and sort by fname ascending

use employees_db;

db.Employees.aggregate([
    { $match: { salary: { $gt: 50000 } } },
    { $sort: { fname: 1 } }
]);
