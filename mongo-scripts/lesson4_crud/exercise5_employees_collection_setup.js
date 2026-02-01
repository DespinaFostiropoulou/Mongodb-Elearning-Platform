// Exercise 5: Create Employees collection with initial data

use employees_db;

db.Employees.insertMany([
    {
        _id: 1,
        name: "Alkis Papadopoulos",
        position: "Developer",
        salary: 55000,
        skills: ["Python", "JavaScript", "MongoDB"],
        address: { city: "Athina", street: "Odos Kifisias" },
        projects: [
            { name: "Project X", status: "active", budget: 12000 },
            { name: "Project Y", status: "completed", budget: 8000 }
        ]
    },
    {
        _id: 2,
        name: "Vasilis Nikolaidis",
        position: "Manager",
        salary: 65000,
        skills: ["Management", "Leadership"],
        address: { city: "Athina", street: "Odos Panepistimiou" },
        projects: [
            { name: "Project Z", status: "active", budget: 15000 }
        ]
    },
    {
        _id: 3,
        name: "Maria Kourtidou",
        position: "Developer",
        salary: 48000,
        skills: ["JavaScript", "HTML", "CSS"],
        address: { city: "Athina", street: "Odos Ermou" },
        projects: [
            { name: "Project A", status: "active", budget: 20000 },
            { name: "Project B", status: "completed", budget: 5000 }
        ]
    },
    {
        _id: 4,
        name: "Dimitris Sotiropoulos",
        position: "Tester",
        salary: 40000,
        skills: ["Testing", "Automation"],
        address: { city: "Athina", street: "Odos Panagi Tsaldari" },
        projects: [
            { name: "Project X", status: "active", budget: 12000 }
        ]
    }
]);
