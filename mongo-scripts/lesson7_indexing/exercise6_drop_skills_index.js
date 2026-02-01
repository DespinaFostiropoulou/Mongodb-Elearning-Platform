// Exercise 6: Drop index on skills

use employees_db;

// First, list indexes to find the index name
print("Current indexes:");
printjson(db.Employees.getIndexes());

// Drop the index on skills
db.Employees.dropIndex({ skills: 1 });

print("Index on skills dropped.");
