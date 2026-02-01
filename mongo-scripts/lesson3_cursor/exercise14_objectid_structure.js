// Exercise 14: ObjectId Structure

use employees_db;

const doc = db.employees.findOne();
const id = doc._id;

print("ObjectId:");
print(id);

// First 4 bytes = timestamp
print("Timestamp:");
print(id.getTimestamp());
