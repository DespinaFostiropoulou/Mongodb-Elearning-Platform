// Exercise 6: Create employees_db and insert employees

use employees_db;

db.createCollection("employees");

db.employees.insertMany([
    {
        fname: "Maria",
        lname: "Papadopoulou",
        salary: 55000,
        departments: ["HR", "admin"],
        hiredate: ISODate("2019-07-15")
    },
    {
        fname: "Nikos",
        lname: "Georgiou",
        salary: 75000,
        departments: ["IT", "development"],
        hiredate: ISODate("2020-01-10")
    },
    {
        fname: "Eleni",
        lname: "Markou",
        salary: 62000,
        departments: ["marketing", "sales"],
        hiredate: ISODate("2021-06-20")
    }
]);

print("Employees inserted successfully!");
