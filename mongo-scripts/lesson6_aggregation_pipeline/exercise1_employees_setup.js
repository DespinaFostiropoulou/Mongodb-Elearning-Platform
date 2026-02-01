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
        skills: ["Communication", "Recruitment"]
    },
    {
        _id: 2,
        fname: "Vasilis",
        lname: "Nikolaidis",
        salary: 90000,
        departments: ["IT"],
        hiredate: ISODate("2018-02-15"),
        skills: ["Python", "Databases"]
    },
    {
        _id: 3,
        fname: "Maria",
        lname: "Kourtidou",
        salary: 60000,
        departments: ["Finance"],
        hiredate: ISODate("2019-11-01"),
        skills: ["Excel", "Analytics"]
    },
    {
        _id: 4,
        fname: "Dimitris",
        lname: "Sotiropoulos",
        salary: 85000,
        departments: ["IT"],
        hiredate: ISODate("2017-09-25"),
        skills: ["Java", "Project Management"]
    },
    {
        _id: 5,
        fname: "Eleni",
        lname: "Georgiou",
        salary: 55000,
        departments: ["HR"],
        hiredate: ISODate("2021-03-10"),
        skills: ["Conflict Resolution", "Training"]
    }
]);

print("Employees inserted successfully!");
