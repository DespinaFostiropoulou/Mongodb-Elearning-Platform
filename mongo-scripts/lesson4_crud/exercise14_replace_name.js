// Replace Alkis Papadopoulos with Alkis Petros

use employees_db;

db.Employees.findOneAndReplace(
    { name: "Alkis Papadopoulos" },
    {
        name: "Alkis Petros",
        position: "Developer",
        salary: 55000,
        skills: ["Python", "JavaScript", "MongoDB"],
        address: { city: "Athina", street: "Odos Kifisias" },
        projects: [
            { name: "Project X", status: "active", budget: 12000 },
            { name: "Project Y", status: "completed", budget: 8000 }
        ]
    }
);
