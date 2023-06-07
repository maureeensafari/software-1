const reminders = document.querySelector(".reminders")

window.addEventListener('load', ()=>{
    fetch('data.php')
    .then(response => response.json())
    .then(data => {
        for(let reminder of data)
        {
            let val = JSON.parse(reminder)
            reminders.innerHTML += 
            `
                <li>${val.name}</li>
            `
        }
    })
    .catch(error => {
        console.error('Error:', error); 
    });
})