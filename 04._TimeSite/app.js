const express = require("express")
const app = express();
app.use(express.json());
app.use(express.static('public'));

//alarms array
let alarms = []
//alarm id
let currentId = 0;

//homepage
app.get("/", (req, res) => {
    res.sendFile(__dirname +"/public/home.html");
});

//get all alarms
app.get("/alarms", (req, res) => {
    res.send({ alarms: alarms });
});

//get alarm by id
app.get("/alarms/:id", (req, res) => {
    const pathVariableAlarmId = req.params.id;
    if (pathVariableAlarmId  >= 1 && pathVariableAlarmId < alarms.length){
        const foundAlarm = alarms[pathVariableAlarmId];
        req.send({alarm:pathVariableAlarmId});
    } else {
        req.send({alarm:"Alarm not found."});
    }
});

//create new alarm
app.post("/alarms", (req, res) => {
    const newAlarm = req.body;
    newAlarm.id = ++currentId;
    alarms.push(newAlarm);
    res.send({data: newAlarm})
});

app.patch("/alarms/:id", (req, res) => {
    let foundAlarmId = alarms.findIndex((alarm) => alarm.id === Number(req.params.id));
    if (foundAlarmId === -1) {
        res.status(416).send({error: `No alarm by id: ${req.params.id}`});
    } else {
        alarms[foundAlarmId] = {...alarms[foundAlarmId], ...req.body, id: Number(req.params.id)};
        res.send({data: alarms[foundAlarmId]});
    }
});

app.delete("/alarms/:id", (req, res) => {
    const foundAlarmId = alarms.findIndex((alarm) => alarm.id === Number(req.params.id));
    if(foundAlarmId = -1){
        res.status(416).send({error: `No alarm by id: ${req.params.id}`});
    } else {
        alarms.splice(foundAlarmId, 1);
        res.send({message: "Alarm deleted."})
    }
})


const PORT = 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log ("Server failed to start.");
        return;
    } 
    console.log ("Server is running on port:", PORT);    
})

