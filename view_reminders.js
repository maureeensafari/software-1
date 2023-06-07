const reminders = document.querySelector(".reminders")

window.addEventListener('load', ()=>{
    fetch('data.php')
    .then(response => response.json())
    .then(data => {
        if (data.length > 0)
        {
            for(let reminder of data)
            {
                let val = JSON.parse(reminder)
                reminders.innerHTML += 
                `
                    <li class="reminder-item">
                        <div class="reminder-info">
                            <p>${val.name}</p>
                            <p>${val.date}</p>
                        </div>
                        <p class="description">
                            ${val.description}
                        </p>
                    </li>
                `
            }
        }
        else
        {
            reminders.innerHTML = `<p style="text-align: center;">No Reminders...</p>`
        }
    })
    .catch(error => {
        console.error('Error:', error); 
    });
})