// Exercise 2: insertMany()

use books_db;

db.Books.insertMany([
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Moby Dick", author: "Herman Melville", year: 1851 }
]);

// Show inserted documents
db.Books.find().pretty();
