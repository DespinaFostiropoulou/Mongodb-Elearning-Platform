// Exercise 10: Logical Operators

use employees_db;

// HR OR salary > 60000
db.employee_info.find({
    $or: [
        { departments: "hr" },
        { salary: { $gt: 60000 } }
    ]
}).pretty();

// Not Developer AND salary < 70000
db.employee_info.find({
    $and: [
        { position: { $ne: "developer" } },
        { salary: { $lt: 70000 } }
    ]
}).pretty();
