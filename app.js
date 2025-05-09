import employees from "#db/employees";
import express from "express"
const app = express();

//Adds a route for '/' that enters the message "Hello employees!"
app.route('/').get((req, res)=>{
    res.status(200).send("Hello employees!");
})

//Adds a route with a GET request to return the array of employees from the db/employees
app.route('/employees').get((req, res)=>{
    res.status(200).send(employees)
})


//The most specific route needs to be written first!!


//Adds a route that returns the information for a random employee from the array
app.route('/employees/random').get((req, res)=>{
    const randomNum = Math.floor(Math.random()*employees.length);
    const found = employees[randomNum - 1]
    if (found){
        res.send(found)
    } else {
        res.status(404).send()
    }
})


//Adds a route that returns the information for an employee given the id number of the employee
app.route('/employees/:id').get((req, res)=>{
    const employeeID = Number(req.params.id);
    const found = employees.find(emp=> emp.id === employeeID)
    if (found){
        res.status(200).send(found)
    } else {
        res.status(404).send()
    }
})


export default app 