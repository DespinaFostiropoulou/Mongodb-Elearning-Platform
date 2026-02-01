// Exercise 9: Comparison Operators

use employees_db;

// Position is Manager OR Developer
db.employee_info.find({
    position: { $in: ["manager", "developer"] }
}).pretty();

// Salary <= 60000
db.employee_info.find({
    salary: { $lte: 60000 }
}).pretty();
