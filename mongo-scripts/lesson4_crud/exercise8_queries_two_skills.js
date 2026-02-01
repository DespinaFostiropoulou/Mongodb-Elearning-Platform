// Employees with both JavaScript and Python

use employees_db;

db.Employees.find({
    skills: { $all: ["JavaScript", "Python"] }
}).pretty();
