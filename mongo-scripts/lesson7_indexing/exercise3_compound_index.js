// Exercise 3: Create compound index on departments + lname

use employees_db;

db.Employees.createIndex({ departments: 1, lname: 1 });

print("Compound index created on departments and lname.");
