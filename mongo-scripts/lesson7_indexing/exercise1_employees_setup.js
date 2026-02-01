// Exercise 1: Create Employees collection with initial data

use employees_db;

db.Employees.insertMany([
    {
        _id: 1,
        fname: "Alkis",
        lname: "Papadopoulos",
        salary: 75000,
        departments: ["HR"],
        hiredate: ISODate("2020-06-01"),
        skills: ["Leadership", "Communication", "Team Management"],
        location: { type: "Point", coordinates: [23.726, 37.975] }
    },
    {
        _id: 2,
        fname: "Vasilis",
        lname: "Nikolaidis",
        salary: 65000,
        departments: ["IT"],
        hiredate: ISODate("2018-02-15"),
        skills: ["JavaScript", "Node.js", "React"],
        location: { type: "Point", coordinates: [23.734, 37.977] }
    },
    {
        _id: 3,
        fname: "Maria",
        lname: "Kourtidou",
        salary: 55000,
        departments: ["Finance"],
        hiredate: ISODate("2019-11-01"),
        skills: ["Excel", "SQL", "Data Analysis"],
        location: { type: "Point", coordinates: [23.728, 37.980] }
    },
    {
        _id: 4,
        fname: "Dimitris",
        lname: "Sotiropoulos",
        salary: 58000,
        departments: ["Marketing"],
        hiredate: ISODate("2017-09-25"),
        skills: ["Photoshop", "Illustrator", "Creativity"],
        location: { type: "Point", coordinates: [23.725, 37.974] }
    },
    {
        _id: 5,
        fname: "Eleni",
        lname: "Georgiou",
        salary: 62000,
        departments: ["HR"],
        hiredate: ISODate("2021-03-10"),
        skills: ["Recruitment", "Training", "Conflict Resolution"],
        location: { type: "Point", coordinates: [23.732, 37.979] }
    }
]);

print("Employees inserted successfully!");
