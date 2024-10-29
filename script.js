document.getElementById('load-events').addEventListener('click', function() {
    const events = [
        'Please follow instagram for more details ...'
    ];

    const eventList = document.getElementById('event-list');
    eventList.innerHTML = ''; // Clear existing events
    events.forEach(event => {
        const li = document.createElement('li');
        li.textContent = event;
        eventList.appendChild(li);
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
     // Clear the form fields
     document.getElementById('contact-form').reset();
});
