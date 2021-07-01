# E-Commerce Back End

## Description

This E-Commerce App allows the user to create, update, view and delete data in their database using the Insomnia Core application.

## Installation

- Clone the repository
- Update the .env.EXAMPLE with your own database server details and rename the file to .env
- Open up your terminal and ensure you are in the correct folder
- In the terminal enter 'npm install' to install the dependencies 
- In the terminal enter 'mysql -u root -p' and your MySQL password when prompted
- In the terminal type 'source db/schema.sql
- When the database is created type 'quit' into your terminal, this exits out of the MySQL terminal
- In the terminal type 'npm run seed', this fills the database with the information
- In the terminal type 'npm start' to start the server

## Usage

Links to how to use the app/ The walk through videos for setting up in VS code and testing in Insomnia Core
- Setting up in VS [Code](https://drive.google.com/file/d/17Y546IrfnLRLTyFOoa7KxDrttfOl1HMj/view?usp=sharing)
- Insomnia [Core](https://drive.google.com/file/d/1d8z8src01JzRIVbSJxAwbTnDtcvKj9tH/view?usp=sharing)

## Github Link

- Link to [Github](https://danniwilton.github.io/E-Commerce-Back-End/)

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database