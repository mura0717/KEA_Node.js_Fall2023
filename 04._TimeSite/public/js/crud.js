function playAlarm(time){

    const maxPlayTime = 10000; //Alarm duration: 10 sec.

    let beep = new Audio('https://www.soundjay.com/buttons/sounds/beep-07a.mp3');
    beep.loop = true;
    setTimeout(() => {
        beep.play();
        setTimeout(() => { //stopping the alarm and resetting.
            beep.pause();
        }, maxPlayTime);
    }, time);
}

function alarmHoursConverter(alarm){
    const alarmDetails = alarm;
    const [hours, minutes] = alarmDetails.split(":").map(Number);

    const hoursInMilliseconds = hours * 3600000; // 1 hour = 3600000 milliseconds
    const minutesInMilliseconds = minutes * 60000;

    return hoursInMilliseconds+minutesInMilliseconds;
}

function currentHoursConverter(){

    const newDateObject = new Date();
    const currentHours = newDateObject.getHours();
    const currentMinutes = newDateObject.getMinutes();

    const currentHoursInMilliseconds = currentHours * 3600000; // 1 hour = 3600000 milliseconds
    const currentMinutesInMilliseconds = currentMinutes * 60000;

    return currentHoursInMilliseconds + currentMinutesInMilliseconds;

}

async function createAlarm() {
    const newAlarm = document.getElementById("newAlarm").value;

    if (!newAlarm) {
    alert("Please provide a time for the alarm.");
    return;
    }

    const res = await fetch ("/alarms", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({alarm: newAlarm})
    })
    const data = await res.json();
    alert(`Alarm created with Id: ${data.data.id} and time: ${data.data.alarm}`);

    const alarmTime = alarmHoursConverter(newAlarm);
    const currentTime = currentHoursConverter();
    const timeDelay = alarmTime - currentTime; 
    playAlarm(timeDelay);
}


async function getAlarm() {
    const alarmId = document.getElementById("getAlarmId").value;
    const res = await fetch (`/alarms/${alarmId}`);
    const data = await res.json();

    const specificAlarm = document.getElementById("specificAlarm")
    specificAlarm.innerHTML =''; //clears textContent

    if (data.alarm){
        const alarmProperties = Object.entries(data.alarm)
            .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
            .join(", ");
        document.getElementById("specificAlarm").textContent = `${alarmProperties}`;
    } else {
        document.getElementById("specificAlarm").textContent = "Alarm not found.";
    }
}

async function getAllAlarms() {
    const allAlarms = document.getElementById("allAlarms");
    const res = await fetch (`/alarms`);
    const data = await res.json();

    allAlarms.innerHTML =''; //clears textContent

    if (data.alarms.length === 0) {
        allAlarms.textContent = "No alarms yet.";
    }

    if (data && data.alarms) {
        data.alarms.forEach((alarm) => {
        const alarmProperties = Object.entries(alarm)
            .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
            .join(", ");
        const listItem = document.createElement("li");
        listItem.textContent = `${alarmProperties}`;
        allAlarms.appendChild(listItem);
    });
    } else {
        allAlarms.textContent = "Error populating alarms' list.";
         };
    }

async function editAlarm() {
    const editAlarmId = document.getElementById("editAlarmId").value;
    const editedTime = document.getElementById("editedAlarmTime").value;
    
    const res = await fetch (`/alarms/${editAlarmId}`);
    const data = await res.json();

    if (res.status === 404) {
    alert("Alarm not found.");
    return;
    }

    if (!editedTime) {
    alert("Please provide a new time for the alarm.");
    return;
    }

    const updatedAlarm = {...data.alarms, alarm: editedTime};
    const patchRes = await fetch(`/alarms/${editAlarmId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedAlarm),
    });

    if (patchRes.status === 200) {
    alert(`Alarm with Id: ${editAlarmId} edited to ${editedTime}`);
    } else {
    alert("Failed to edit the alarm.");
    }
}

async function deleteAlarm() {
    const deleteAlarmId = document.getElementById("deleteAlarmId").value;
    const res = await fetch (`/alarms/${deleteAlarmId}`);
    const data = await res.json();

    if (res.status === 404) {
    alert("Alarm not found.");
    return;
    }

    if(data.alarm){
        const alarmProperties = Object.entries(data.alarm)
            .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
            .join(", with ");

        const deleteRes = await fetch(`/alarms/${deleteAlarmId}`, {
        method: "DELETE",
    });

    if (deleteRes.status === 200) {
        alert(`${alarmProperties} is deleted.`);
    } else {
        alert("Failed to delete the alarm.");
    }
}
}