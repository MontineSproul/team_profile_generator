//result of prompt and combine it with html syntax and make it a big string for the HTML file to use
function generateHTML (employees) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <h1>Team Roster</h1>
    <h2> ${employees.name} </h2>
    <h2> ${employees.employeeID} </h2>
    <h2> <a href="mailto: ${employees.email}" target="_blank"> ${employees.email} </a></h2>
    <h2> ${employees.office_number} </h2>
        
    </body>
    </html> `;
}



module.exports = generateHTML;