// Exercise 12: ObjectId creation and retrieval

use employees_db;

// Insert document without _id
db.employees.insertOne({
    empno: 8,
    fname: "nikos",
    lname: "papadopoulos",
    position: "developer",
    salary: 65000,
    departments: ["it", "software"],
    hiredate: ISODate("2021-03-15")
});

// Retrieve ObjectId
const doc = db.employees.findOne({ empno: 8 });
print("ObjectId:");
printjson(doc._id);

// Show timestamp
print("Timestamp:");
print(doc._id.getTimestamp());
