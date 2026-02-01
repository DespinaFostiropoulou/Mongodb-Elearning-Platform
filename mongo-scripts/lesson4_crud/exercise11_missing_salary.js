// Employees with no salary field

use employees_db;

db.Employees.find({ salary: { $exists: false } }).pretty();
