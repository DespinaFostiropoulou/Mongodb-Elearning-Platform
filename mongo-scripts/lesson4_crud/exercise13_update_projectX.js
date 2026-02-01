// Update Project X to completed

use employees_db;

db.Employees.findOneAndUpdate(
    { "projects.name": "Project X" },
    { $set: { "projects.$.status": "completed" } },
    { returnDocument: "after" }
);
