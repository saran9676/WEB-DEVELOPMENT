function eventOnChange() {
    const eventSelection = document.getElementById("eventSelection").value;
    const ticketDropdown = document.getElementById("ticket");

    // Reset the ticket dropdown
    ticketDropdown.innerHTML = '<option value="" hidden>--Select--</option>';

    const eventTickets = {
        "Conference": ["Standard", "VIP"],
        "Workshop": ["Beginner", "Intermediate", "Advanced"],
        "Seminar": ["General", "Student"],
        "Webinar": ["Free", "Paid"]
    };

    if (eventTickets[eventSelection]) {
        eventTickets[eventSelection].forEach(ticket => {
            let option = document.createElement('option');
            option.value = ticket;
            option.textContent = ticket;
            ticketDropdown.appendChild(option);
        });
    }
}

function registerEvent() {
    try {
        const eventSelection = document.getElementById('eventSelection').value;
        const ticketSelection = document.getElementById('ticket').value;
        const resultDiv = document.getElementById('result');

        if (!eventSelection || !ticketSelection) {
            resultDiv.innerHTML = "Select values from all dropdown menus";
        } else {
            resultDiv.innerHTML = "You have placed the " + ticketSelection + " ticket for the " + eventSelection;
        }
    } catch (err) {
        document.getElementById("result").innerHTML = "Function registerEvent: " + err;
    }
}

function clearValues() {
    try {
        document.getElementById("eventSelection").value = "";
        document.getElementById("ticket").innerHTML = '<option value="">--Select--</option>';
        document.getElementById("result").innerHTML = "";
    } catch (err) {
        document.getElementById("result").innerHTML = "Function clearValues: " + err;
    }
}