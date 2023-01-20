const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
//const inquirer = require('inquirer')
//import inquirer from "inquirer";
const generateHTML = require('./src/generateHTML')
//write all of our prompts (array of objects)
const fs = require('fs');
const Employee = require('./lib/Employee')
// an array for user input
const questions = [];
//to make inquire prompt cleaner
var employeeData = [];
//Create a function to write HTML file
function writeToFile(fileName, data) {
    //fs write file goes here (takes js data and creates a literal file on comp)
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Your Team is complete!')
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
            type: 'list',
            message: 'Would you like to add an Engineer or an Intern?',
            name: 'addToTeam',
            choices: ["Engineer", "Intern", "Finish Building my Team"]
        },
       
    ])
    .then((response) => {
            var manager = new Manager(response.name, response.employeeID, response.email, response.office_number)
            employeeData.push(manager);
            console.log(response);
            var employee = response.addToTeam;
        if (employee === "Engineer" ||  employee === "Intern") {
                 initEngineer(employee);
        } else {
            // const createHTML = generateHTML(employeeData);
            // console.log(createHTML);
            // writeToFile('./dist/index.html', createHTML);
        }
    });
    
}
function initEngineer (employee) {
    inquirer 
    .prompt([
        {
            type: 'input',
            message: `${employee} Name`,
            name: 'name',
        },
        {
            type: 'input',
            message: `${employee} Employee ID`,
            name: 'employeeID',
        },
        {
            type: 'input',
            message: `${employee} Email`,
            name: 'email',
        },
        {
            type: 'input',
            message: `${employee === "Engineer" ? "Engineers GitHub" : "Interns School Number"}  `,
            name: 'office_number',
        },
        {
            type: 'list',
            message: 'Would you like to add an Engineer or an Intern?',
            name: 'addToTeam',
            choices: ["Engineer", "Intern", "Finish Building my Team"]
        },
        
    ])
    .then((response) => {
        var newEmployee = response.addToTeam;
        if (newEmployee === "Engineer") {
            var engineer = new Engineer(response.name, response.employeeID, response.email, response.office_number)
            employeeData.push(engineer);
        } else {
            var intern = new Intern(response.name, response.employeeID, response.email, response.office_number)
            employeeData.push(intern);
        }
        console.log(response)
       if (newEmployee === "Engineer" || newEmployee === "Intern") {
            initEngineer(newEmployee);
       } else {
        const createHTML = generateHTML(employeeData);
        console.log(employeeData)
        console.log(createHTML);
        writeToFile('./dist/index.html', createHTML);
       }
    });
}

init();
