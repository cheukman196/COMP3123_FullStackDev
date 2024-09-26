const express = require('express')
const app = express()
const SERVER_PORT = process.env.port || 3000; 
// either passed a value or default to 3000

// default end point
app.get('/', function (req, res) {
  res.write('<h1>Hello World</h1>');
  res.end(); // or res.send() = both write and end but only 1 line
})

app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1>');
})

// Use Postman to test your api endpoints

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us Now</h1>');
})

app.get(('/test_get'), (req, res) => {
    res.status(200);
    res.send('<h1>You sent a GET request</h1>');
})

app.post(('/test_post'), (req, res) => {
    res.status(201) // 201 for post
        .send('<h1>You sent a POST request</h1>');
})

app.put(('/test_put'), (req, res) => {
    res.status(204) // we can use 200, 204 for put or delete
        .send('<h1>You sent a PUT request</h1>');
})

app.delete(('/test_delete'), (req, res) => {
    res.status(204)    
        .send('<h1>You sent a DELETE request</h1>');
})

app.get('/student', (req, res) => {
    const student = {
        name: 'John Doe',
        age: 25
    }
    res.json(student); // return as JS object
})

// ** Query String **
// req.query object
// http://localhost:3000/student?fname=John&lname=Doe
// Accessing values in the query string 
app.get('/employee', (req, res) => {
    console.log(req.query);
    const fname = req.query.fname;
    const lname = req.query.lname;
    res.send(`First Name: ${fname}, Last Name: ${lname}`); 
})


// ** Parameters **
// req.params object
// we need to pre-define the name of each param
// /person/:fname/:lname/:city
app.get('/person/:fname/:lname/:city', (req, res) => {
    console.log(req.query);
    const fname = req.params.fname;
    const lname = req.params.lname;
    const city = req.params.city;
    res.send(`First Name: ${fname}, Last Name: ${lname}, City: ${city}`); 
})

// starting the server
app.listen(SERVER_PORT, ()=>{
    console.log(`Server is running on http://localhost:${SERVER_PORT}.`)
})