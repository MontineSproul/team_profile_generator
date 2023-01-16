const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern.js')
const Manager = require('./lib/Manager.js')
const inquirer = require('inquirer')
const generateHTML = require('generateHTML')
//write all of our prompts (array of objects)


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
    ])
    .then((response) => {
        console.log(response)
        const createHTML = generateMarkdown(response);
        console.log(createHTML);
        writeToFile('index.html', createHTML);
    });
}

init();