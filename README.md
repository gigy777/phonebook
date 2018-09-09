Getting Started
---------------
# Install dependencies
 cd phonebook 
 npm install

#Create database
- create database phonebook in mysql
- go to database.json,config/database.js and set your username and password for mysql
- start migration in console: node node_modules/db-migrate/bin/db-migrate up

# Start development live-reload server
npm run dev

go to http://localhost:8000

# I used:
Backend: Nodejs+express+es06
Frontend: Angular 6

If you want to start angular especially go to frontend folder in console:
- npm install
- ng serve 
