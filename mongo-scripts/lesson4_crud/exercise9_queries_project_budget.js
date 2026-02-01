// Employees with active projects > 10000

use employees_db;

db.Employees.find({
    projects: {
        $elemMatch: { status: "active", budget: { $gt: 10000 } }
    }
}).pretty();
