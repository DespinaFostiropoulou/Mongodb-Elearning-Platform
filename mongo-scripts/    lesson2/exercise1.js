# Exercise 1 — Create MongoDB Atlas Cluster

## 1. Create a free MongoDB Atlas account
https://www.mongodb.com/cloud/atlas/register

## 2. Create a free cluster
- Choose: Shared Cluster (M0)
- Cloud provider: AWS
- Region: EU (Frankfurt) or nearest available

## 3. Configure network access
Add your IP address:
0.0.0.0/0 *(Allows access from anywhere for development purposes.)*

## 4. Create a database user
- Username: `dbUser`
- Password: `yourPassword123`

## 5. Copy the connection string
Example:
mongodb+srv://dbUser:yourPassword123@cluster0.xxxxx.mongodb.net/
