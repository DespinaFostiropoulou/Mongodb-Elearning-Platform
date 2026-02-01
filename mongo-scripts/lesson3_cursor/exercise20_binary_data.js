// Exercise 20: Binary Data

use employees_db;

// Example binary data (fake base64 string)
const imageData = new BinData(0, "QmFzZTY0RW5jb2RlZERhdGE=");

db.employees.insertOne({
    fname: "Binary",
    lname: "Example",
    profilePicture: imageData
});

// Retrieve only the binary field
db.employees.find(
    { fname: "Binary" },
    { profilePicture: 1, _id: 0 }
).pretty();
