var http = require("http");
//TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");
var empModule = require('./Employee.js');
// console.log(empModule.emp);

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("<h1>Welcome to Lab Exercise 03</h1>")
        }

        else if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(JSON.stringify(empModule.emp));
        }

        else if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            res.writeHead(200, {'Content-Type': 'text/html'});
            const empNameArr = [];
            for(var emp of empModule.emp)
                empNameArr.push(emp.firstName + " " + emp.lastName + " ");
            empNameArr.sort();
            res.write(JSON.stringify(empNameArr));          
        }

        else if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 } 
            res.writeHead(200, {'Content-Type': 'text/html'});
            let empTotalSalary = 0;
            for(var employee of empModule.emp)
                empTotalSalary += employee.salary;
            res.write(JSON.stringify({'total_salary': empTotalSalary}));
        }
        else {
            res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
        }
        res.end();
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})