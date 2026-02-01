// Find employee with salary null and return previous version

use employees_db;

db.Employees.findAndModify({
    query: { salary: null },
    update: { $set: { salary: 0 } },
    new: false
});
