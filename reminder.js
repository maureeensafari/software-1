const form = document.getElementById('reminder-form');
const viewBtn = document.querySelector(".view-btn");

var data;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    var eventName = document.getElementById("event-name").value;
    var eventDate = document.getElementById("event-date").value;
    var eventTime = document.getElementById("event-time").value;
    var eventDescription= document.getElementById("event-description").value;
    
    const data = {
        name:eventName,
        date:eventDate,
        time:eventTime,
        description:eventDescription,
    }

    fetch("reminder.php", { 
        method: "POST",
         body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }).then(function (response) { 
        return response.text();
    })
    eventDate = "";
    eventDescription="";
    eventName="";
    eventTime="";
});



