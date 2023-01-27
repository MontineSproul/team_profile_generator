//result of prompt and combine it with html syntax and make it a big string for the HTML file to use
function generateHTML (employees) {
    console.log(employees)
    //loop through employees and make html string and add variables on line 18 (between h2 and body)
    function addEmployee(employeeData) {
        let employeeHTML = "";
        for (let i = 1; i < employeeData.length; i++) {
           employeeHTML +=  `   
           <div class="column">
           <div class="card">
           <h2 class="card-header">${employeeData[i].name}</h2>
           <p>${employeeData[i].getRole()} </p>
           <div class="card-body">
             <p>Employee ID: ${employeeData[i].id} </p>
             <p>Email: <a href="mailto: ${employeeData[i].email}" target="_blank"> ${employeeData[i].email} </a></p>
             <p><a href="https://github.com/${employeeData[i].Github} "> ${employeeData[i].getRole() === "Engineer" ? employeeData[i].Github : employeeData[i].school}</a></p>
             </div>
             </div>
             </div>`;
            }
            
    return employeeHTML;
};
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel='stylesheet' href='./bootswatch.css'>
        <link rel='stylesheet' href='./style.css'>
        <title>Document</title>
    </head>
    <body>
    <header>
    <h1>My Team</h1>
    </header>
    <div class="row">
    <div class="column">
    <div class="card">
    <h2 class="card-header">${employees[0].name} </h2>
    <p>Manager</p>
    <div class="card-body">
    <p>Employee ID: ${employees[0].id} </p>
    <p>Email: <a href="mailto: ${employees[0].email}" target="_blank"> ${employees[0].email} </a></p>
    <p>Office Number: ${employees[0].officeNumber} </p>
    </div>
    
    </div>
    </div>
    ${addEmployee(employees)}
    <div>
    </body>
    </html> `;
}



module.exports = generateHTML;


{/* <div class="card border-light mb-3" style="max-width: 20rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h4 class="card-title">Light card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div> */}