// Get the current date in YYYY-MM-DD format
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return year + "-" + month + "-" + day;
}

// Compare dates and hide/show divs accordingly
function showPastAndPresentDivs() {
    const currentDate = getCurrentDate();

    // Get all elements with class 'date-div'
    const dateDivs = document.querySelectorAll('[data-date]');

    dateDivs.forEach(div => {
        // Get the date from the data attribute
        const divDate = div.getAttribute('data-date');

        // Compare the dates
        if (divDate <= currentDate) {
            // Show the div
            div.style.display = 'block';
        } else {
            // Hide the div
            div.style.display = 'none';
        }
    });
}

showPastAndPresentDivs();
