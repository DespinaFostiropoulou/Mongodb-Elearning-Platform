// Exercise 6: Save employees with salary > 60000 into HighSalaryEmployees

use employees_db;

db.Employees.aggregate([
    { $match: { salary: { $gt: 60000 } } },
    { $out: "HighSalaryEmployees" }
]);

print("HighSalaryEmployees collection created!");
