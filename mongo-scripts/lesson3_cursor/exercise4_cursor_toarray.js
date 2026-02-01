// Exercise 4: Using .toArray()

use employees_db;

const arr = db.employees.find().toArray();

// Show first document
printjson(arr[0]);
