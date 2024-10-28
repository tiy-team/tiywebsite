document.getElementById('load-events').addEventListener('click', function() {
    const events = [
        'Cultural Evening - November 15, 2024',
        'Networking Event - December 1, 2024',
        'Festival Celebration - January 10, 2025'
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
});