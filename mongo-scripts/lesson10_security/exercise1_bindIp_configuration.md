# Exercise 1 — Configure bindIp in mongod.conf

Για να επιτρέπεται πρόσβαση μόνο από το εταιρικό δίκτυο:

## mongod.conf

net:
  port: 27017
  bindIp: 127.0.0.1,192.168.1.0/24

## Ενέργειες
- Αποθηκεύστε το αρχείο.
- Κάντε restart τον MongoDB server.

sudo systemctl restart mongod
