// Employees working in Athina

use employees_db;

db.Employees.find({ "address.city": "Athina" }).pretty();
