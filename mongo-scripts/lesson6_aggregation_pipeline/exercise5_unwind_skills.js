// Exercise 5: Unwind skills array

use employees_db;

db.Employees.aggregate([
    { $unwind: "$skills" }
]);
