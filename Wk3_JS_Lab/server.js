// import libraries
const os = require('os');
const fs = require('fs');
const http = require('http');
const path = require('path');

// console.log(os.cpus());
http.createServer((req, res) =>{
    console.log(req.method);

    // Defining the endpoints
    // home page
    if (req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'}); // sets Header, by default 200
        res.write('<h1>Home Page</h1>')
    }

    if (req.url == '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'}); // sets Header, by default 200
        res.write('<h1>About Page</h1>')
    }

    if (req.url == '/student'){
        res.writeHead(200, {'Content-Type': 'text/html'}); // sets Header, by default 200
        res.write('<h1>Student Page</h1>');
        const student1 = {
            name: 'John Doe',
            age: 20,
            course: 'Programming'
        }
        res.write(JSON.stringify(student1)); // write() can't take object, only string
    }

    // res.write('Hello world'); // write() populates the response
    res.end(); // end() indicates the end of writing the response
}).listen(3000, () => {
    console.log("Server running on port 3000"); // listening @ port 3000
})