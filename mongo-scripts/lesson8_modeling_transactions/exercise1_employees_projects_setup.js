// Exercise 1: Create Employees & Projects collections with initial data

use company_db;

// Employees collection
db.Employees.insertMany([
    {
        _id: ObjectId("64d1fdf68a35436b9ed8bf21"),
        fname: "Alkis",
        lname: "Papadopoulos",
        position: "Manager",
        skills: ["Leadership", "Project Management"],
        projects: [
            { project_id: ObjectId("64d1fdf68a35436b9ed8bf31"), role: "Lead" },
            { project_id: ObjectId("64d1fdf68a35436b9ed8bf32"), role: "Coordinator" }
        ]
    },
    {
        _id: ObjectId("64d1fdf68a35436b9ed8bf22"),
        fname: "Vasilis",
        lname: "Nikolaidis",
        position: "Developer",
        skills: ["JavaScript", "Python"],
        projects: [
            { project_id: ObjectId("64d1fdf68a35436b9ed8bf32"), role: "Contributor" }
        ]
    }
]);

// Projects collection
db.Projects.insertMany([
    {
        _id: ObjectId("64d1fdf68a35436b9ed8bf31"),
        name: "Website Redesign",
        budget: 50000,
        employees: [
            { employee_id: ObjectId("64d1fdf68a35436b9ed8bf21"), role: "Lead" }
        ]
    },
    {
        _id: ObjectId("64d1fdf68a35436b9ed8bf32"),
        name: "Mobile App Development",
        budget: 80000,
        employees: [
            { employee_id: ObjectId("64d1fdf68a35436b9ed8bf21"), role: "Coordinator" },
            { employee_id: ObjectId("64d1fdf68a35436b9ed8bf22"), role: "Contributor" }
        ]
    }
]);

print("Employees & Projects inserted successfully!");
