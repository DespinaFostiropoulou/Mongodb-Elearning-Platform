// Exercise 3: Create read-only user for employees collection

use companyDB;

db.createUser({
    user: "employeeReader",
    pwd: "ReadOnlyPass456!",
    roles: [
        {
            role: "read",
            db: "companyDB"
        }
    ]
});

print("User employeeReader created with read-only role.");
