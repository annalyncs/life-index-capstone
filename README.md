# Life index
Thinkful (https://thinkful.com/) Third Capstone Project - a fullstack app that allows users to store lifestyle data regarding finances, health, fitness, and transport.

![Life Index Home](https://github.com/annalyncs/life-index-react-capstone/blob/master/assets/screenshots/landing%20page.png?raw=true)
![Life Index About](https://github.com/annalyncs/life-index-react-capstone/blob/master/assets/screenshots/about%20page.png?raw=true)
![Life Index Dashboard](https://github.com/annalyncs/life-index-react-capstone/blob/master/assets/screenshots/dashboard.png?raw=true)
![Life Index Finances](https://github.com/annalyncs/life-index-react-capstone/blob/master/assets/screenshots/finance%20data.png?raw=true)
![Life Index Health](https://github.com/annalyncs/life-index-react-capstone/blob/master/assets/screenshots/health%20data.png?raw=true)
![Life Index Fitness](https://github.com/annalyncs/life-index-react-capstone/blob/master/assets/screenshots/fitness%20data.png?raw=true)
![Life Index Transport](https://github.com/annalyncs/life-index-react-capstone/blob/master/assets/screenshots/transport%20data.png?raw=true)


## Introduction
The goal of Life Index is to allow users to organize their financial, fitness, health, lifestyle, and transport data.

## Use Case
The user of the app will be able to store data about their finances (date, cost, description), fitness (date, workout, duration), health (date, category, notes), and transport (date, category, miles). The user will be able to view, add, delete, and edit individual entries.


## UX
The initial wireframes for the page and the list of results can be seen below.

![Wire Frame](https://github.com/annalyncs/life-index-react-capstone/blob/master/assets/life-index-wireframe.jpg?raw=true)

## Working Prototype


## Technology

**Front End**

* HTML
* CSS
* JavaScript
* jQuery
* React

**Back End**

* Node.js
* Express.js
* MongoDB
* Mongoose
* mLab
* Mocha + Chai
* Travis CI for continuous integration and deployment

**Security**
* User passwords are encrypted using [bcrypt-js](https://github.com/dcodeIO/bcrypt.js).

## Responsive

App is built to be responsive across mobile, tablet, laptop, and desktop screen resolutions.

## API Documentation

API endpoints for the back end include:
* GET to '/finances-by-user/:user' to access all of a user's finance data
* GET to /health-by-user/:user' to access all of a user's health data
* GET to '/fitness-by-user/:user' to access all of a user's fitness data
* GET to 'transport-by-user/:user' to access all of a user's transport data
* GET to '/finances-by-id/:id' to access a user's individual finance data
* GET to /health-by-id/:id' to access a user's individual health data
* GET to '/fitness-by-id/:id' to access a user's individual fitness data
* GET to 'transport-by-id/:id' to access a user's individual transport data
* POST to '/finances/new' to add a new finance entry
* POST to '/health/new' to add a new health entry
* POST to '/fitness/new' to add a new fitness entry
* POST to '/transport/new' to add a new transport entry
* PUT to '/finance-update/:id' to update existing finance entry
* PUT to '/health-update/:id' to update existing health entry
* PUT to '/fitness-update/:id' to update existing fitness entry
* PUT to '/transport-update/:id' to update existing transport entry
* DELETE to '/finances/:id' to delete a single finance entry by id
* DELETE to '/health/:id' to delete a single health entry by id
* DELETE to '/fitness/:id' to delete a single fitness entry by id
* DELETE to '/transport/:id' to delete a single transport entry by id
* POST to '/users/create' to create a new user
* POST to '/login/' to login an existing user
* GET to '/logout' to logout of the app
