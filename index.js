const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
//const inquirer = require('inquirer')
//import inquirer from "inquirer";
const generateHTML = require('./src/generateHTML')
//write all of our prompts (array of objects)
const fs = require('fs');
// an array for user input
const questions = [];
//to make inquire prompt cleaner

//Create a function to write HTML file
function writeToFile(fileName, data) {
    //fs write file goes here (takes js data and creates a literal file on comp)
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}         

function init () {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Team Managers Name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Team Managers Employee ID',
            name: 'employeeID',
        },
        {
            type: 'input',
            message: 'Team Mangers Email',
            name: 'email',
            //window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here
        },
        {
            type: 'input',
            message: 'Team Managers Office Number',
            name: 'office_number',
        },
        {
            type: 'checkbox',
            message: 'Would you like to add an Engineer or an Intern?',
            name: 'addToTeam',
            choices: ["Engineer", "Intern", "Finish Building my Team"]
        },
    ])
    .then((response) => {
        console.log(response)
        const createHTML = generateHTML(response);
        console.log(createHTML);
        writeToFile('./dist/index.html', createHTML);
    });
}

init();