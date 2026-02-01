// Exercise 13: Manual ObjectId

use employees_db;

// Create ObjectId manually
const myId = new ObjectId();

// Show hex string
print("Hex string:");
print(myId.valueOf());

// Insert document using manual ObjectId
db.employees.insertOne({
    _id: myId,
    empno: 99,
    fname: "Manual",
    lname: "Entry",
    position: "tester",
    salary: 30000
});
