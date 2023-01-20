//result of prompt and combine it with html syntax and make it a big string for the HTML file to use
function generateHTML (employees) {
    //loop through employees and make html string and add variables on line 18 (between h2 and body)
    (function addEmployee(employeeData) {
        for (let i = 0; i < employeeData.length; i++) {
            return `   
             <div>
            <h2> ${employeeData[i].name} </h2>
            <h2> ${employeeData[i].id} </h2>
            <h2> <a href="mailto: ${employeeData[i].email}" target="_blank"> ${employeeData[i].email} </a></h2>
            <h2> ${employeeData[i].officeNumber} </h2>
            </div>`;
    }
})();
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel='stylesheet' src='./style.css'>
        <title>Document</title>
    </head>
    <body>
    <header>
    <h1>My Team</h1>
    </header>
    <div>
    <h2> ${employees[0].name} </h2>
    <h2> ${employees[0].id} </h2>
    <h2> <a href="mailto: ${employees[0].email}" target="_blank"> ${employees[0].email} </a></h2>
    <h2> ${employees[0].officeNumber} </h2>
    </div>

    </body>
    </html> `;
}



module.exports = generateHTML;