const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes.js')
const employeeRouter = require('./routes/employeeRoutes.js');
const errorHandlerMiddleware = require('./routes/errorHandlerMiddleware.js');

const SERVER_PORT = process.env.PORT || 3000;

// configure environment (based on current .env)
var nodeEnv = process.env.NODE_ENV || "development";
configDotenv.config({ path: `.env.${nodeEnv}`})


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// === error ===
// app.get('/error', (req, res) => {
//     try{
//         throw new Error('This is a forced error');
//     } catch (error){
//         next()
//     }
//     res.send('This is the part for error handling');
// })


// === configure a basic logger middleware ===

// const loggerMiddleware = (req, res, next) => {
//     console.log(`Logged ${req.url} ${req.method} @${new Date}`)
// }
// app.use(loggerMiddleware);


// note the precedence of routes goes to the earlier middleware
app.use('/api/user', userRouter); // define route area
app.use('/api/emp', employeeRouter);

app.use(errorHandlerMiddleware);


app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT} ...`);
})