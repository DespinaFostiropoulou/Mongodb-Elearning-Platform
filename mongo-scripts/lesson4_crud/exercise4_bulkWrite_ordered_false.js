// Exercise 4: bulkWrite() with ordered: false

use employees_db;

db.Products.bulkWrite(
    [
        {
            insertOne: {
                document: {
                    _id: 1,
                    fname: "Kostas",
                    lname: "Georgiou",
                    salary: 25000,
                    departments: ["Sales"],
                    hiredate: ISODate("2023-01-01")
                }
            }
        },
        {
            insertOne: {
                document: {
                    _id: 1, // duplicate _id
                    fname: "Elena",
                    lname: "Pappas",
                    salary: 22000,
                    departments: ["Marketing"],
                    hiredate: ISODate("2023-01-05")
                }
            }
        },
        {
            insertOne: {
                document: {
                    _id: 2,
                    fname: "Dimitris",
                    lname: "Sotiropoulos",
                    salary: 30000,
                    departments: ["HR"],
                    hiredate: ISODate("2023-02-01")
                }
            }
        }
    ],
    { ordered: false }
);

// Check inserted documents
db.Products.find().pretty();
