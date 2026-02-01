// Exercise 7: Insert employee_info data

use employees_db;

db.createCollection("employee_info");

db.employee_info.insertMany([
    {
        empno: 101,
        fname: "Maria",
        lname: "Papadopoulou",
        position: "manager",
        salary: 85000,
        departments: ["sales", "marketing"],
        hiredate: ISODate("2021-04-01")
    },
    {
        empno: 102,
        fname: "Nikos",
        lname: "Georgiou",
        position: "team lead",
        salary: 75000,
        departments: ["marketing", "finance"],
        hiredate: ISODate("2020-09-15")
    },
    {
        empno: 103,
        fname: "Eleni",
        lname: "Karagianni",
        position: "team lead",
        salary: 72000,
        departments: ["hr", "admin"],
        hiredate: ISODate("2022-06-10")
    },
    {
        empno: 104,
        fname: "Andreas",
        lname: "Kotsakis",
        position: "worker",
        salary: 50000,
        departments: ["sales"],
        hiredate: ISODate("2023-02-01")
    },
    {
        empno: 105,
        fname: "Ioanna",
        lname: "Verou",
        position: "worker",
        salary: 45000,
        departments: ["legal"],
        hiredate: ISODate("2023-07-10")
    },
    {
        empno: 106,
        fname: "Kostas",
        lname: "Antoniou",
        position: "manager",
        salary: 92000,
        departments: ["finance"],
        hiredate: ISODate("2021-10-01")
    },
    {
        empno: 107,
        fname: "Giorgos",
        lname: "Papas",
        position: "worker",
        salary: 40000,
        departments: ["hr"],
        hiredate: ISODate("2022-11-20")
    }
]);

print("employee_info data inserted!");
