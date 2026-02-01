// Exercise 2: Show projects of Alkis using Embedded Data Model

use company_db;

db.Employees.find(
    { fname: "Alkis", lname: "Papadopoulos" },
    { projects: 1, _id: 0 }
).pretty();
