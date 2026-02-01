// Exercise 3: Using .forEach()

use employees_db;

db.employees.find().forEach(emp => {
    print("Name: " + emp.fname + ", Salary: " + emp.salary);
});
