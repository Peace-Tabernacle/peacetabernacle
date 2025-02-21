document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector('#mobile-menu'); // Corrected selector
    const menuLinks = document.querySelector('.navbar__menu');

    if (menu && menuLinks) { // Ensuring elements exist
        menu.addEventListener('click', function() {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const calendarBody = document.getElementById("calendar-body");

    // Example events (Modify as needed)
    const events = {
        "2025-02-26": "Communion",
        "2025-02-16": "Youth Sunday",
        "2025-02-25": "Holiday"
    };

    function generateCalendar(year, month) {
        calendarBody.innerHTML = ""; // Clear old calendar
        const firstDay = new Date(year, month, 1).getDay(); // First day of the month
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // Days in month
        let date = 1;

        let today = new Date(); // Get today's date
        today.setHours(0, 0, 0, 0); // Remove time for accurate comparison

        for (let i = 0; i < 6; i++) { // Max 6 weeks
            let row = document.createElement("tr");
            for (let j = 0; j < 7; j++) {
                let cell = document.createElement("td");

                if (i === 0 && j < firstDay) {
                    cell.innerHTML = ""; // Empty cells before the first day
                } else if (date > daysInMonth) {
                    break;
                } else {
                    let dateStr = `${year}-${(month + 1).toString().padStart(2, "0")}-${date.toString().padStart(2, "0")}`;
                    cell.innerHTML = `<span>${date}</span>`;

                    // Check if there's an event on this date
                    if (events[dateStr]) {
                        let eventTag = document.createElement("div");
                        eventTag.classList.add("event");
                        eventTag.innerText = events[dateStr];

                        // ✅ Compare event date with today's date
                        let eventDate = new Date(dateStr);
                        eventDate.setHours(0, 0, 0, 0); // Remove time for accurate comparison

                        if (eventDate >= today) {
                            eventTag.classList.add("upcoming-event"); // Highlight future events
                        }

                        cell.appendChild(eventTag);
                    }

                    date++;
                }

                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }
    }

    generateCalendar(2025, 1); // March 2025 (Months start from 0 in JS)
});