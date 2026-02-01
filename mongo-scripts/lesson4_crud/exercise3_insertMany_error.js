// Exercise 3: insertMany() with duplicate _id error

use employees_db;

db.Employees.insertMany([
    {
        _id: 1,
        fname: "Alkis",
        lname: "Papadopoulos",
        salary: 70000,
        departments: ["Management"],
        hiredate: ISODate("2022-01-15")
    },
    {
        _id: 1, // duplicate _id
        fname: "Vasilis",
        lname: "Nikolaidis",
        salary: 60000,
        departments: ["Development"],
        hiredate: ISODate("2022-02-10")
    },
    {
        _id: 2,
        fname: "Maria",
        lname: "Kourtidou",
        salary: 55000,
        departments: ["Design"],
        hiredate: ISODate("2021-11-20")
    }
]);
