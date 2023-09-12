const express = require("express");
const app = express();

//Locale Time String
console.log(Date());
//UTC
console.log(new Date());
// Epoch timestamp / Unix
console.log(Date.now);

// task: create a route that returns the date

app.get("/date", (req, res) => {
    res.send({ data: new Date() });
});

// task2: create a route that returns the current month

app.get("/monthversion1", (req, res) => {
    const currentDate = new Date();
    const currentMonthName = currentDate.toLocaleDateString('en-US', { month: 'long' });
    res.send({ data: currentMonthName });
})
app.get("/monthversion2", (req, res) => {
    const date = Date().split(" ")
    res.send({data:{month: date[1]}})
})

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/* app.get("/currentMonth", (req, res) => {
    const newDate = new Date();
    let month = months[newDate.getMonth];
    res.send({ data: month})
}) */
 
// task3: create a route that returns the current day

app.get('/dayversion1', (req, res) => {
    const currentDay = new Date();
    const currentDayName = currentDay.toLocaleDateString('en-US', { weekday: 'long' });
    res.send({ data: currentDayName });
  });

app.get("/dayversion2", (req, res) => {
    const date = Date().split(" ")
    res.send({data:{day: date[0]}})
})

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

/* app.get("/currentDay", (req, res) => {
    const newDate = new Date();
    let day = days[newDate.getDay];
    res.send({ data: day});
}) */

const PORT = 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log ("Server failed to start.");
        return;
    } 
    console.log ("Server is running on port:", PORT);    
})