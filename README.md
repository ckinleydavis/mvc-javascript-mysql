# About Our JavaScript:Bootstrap:MVC Project

This project has been developed using NodeJS, JavaScript, Bootstrap, and MySQL. It is being freely hosted using GitHub Pages. The repository for this project may be found [here](https://github.com/ckinleydavis/mvc-javascript-mysql).

## Installations

 * npm
 * node
 * mysql2
 * sequelize
 * passport
 * bcrypt
 * dotenv
 * heroku

## APIs Used

 * [FDA: Adverse Drug Event Reports](https://api.fda.gov/drug/event.json)

## JSON Data Modeling

 * [JSON Data Modeling in Document Databases](https://www.youtube.com/watch?v=S5nNrrgpypU)

## Run the Application

* [GitHub Pages](https://ckinleydavis.github.io/mvc-javascript-mysql/)

* [Heroku](https://placeholder)

* Local Machine &nbsp; <g-emoji class="g-emoji" alias="desktop_computer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f5a5.png">🖥️</g-emoji>&nbsp;<g-emoji class="g-emoji" alias="point_down" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f447.png">👇</g-emoji>
<br/>

Open a terminal and run the following command to create a MySQL connection:  

    $ mysql -u <username> -p

Once you have logged in with your mysql credentials, run the following command to create the ccbbra_db database.

    mysql > source db/schema.sql

Open a second terminal window and run the following commands to install dependencies and to populate the database with mock data.

    $ npm install
    $ node seeds/index.js

To run the application locally, execute the following on the command-line:

    $ node server.js
<br/>

## 


