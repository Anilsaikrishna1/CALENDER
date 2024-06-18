document.addEventListener("DOMContentLoaded", function () {
    const monthYearElement = document.getElementById("monthYear");
    const calendarDatesElement = document.getElementById("calendarDates");

    const now = new Date();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();
    const today = now.getDate();

    monthYearElement.textContent = `${month.toUpperCase()} ${year}`;

    const startDay = new Date(year, now.getMonth(), 1).getDay();
    const totalDays = new Date(year, now.getMonth() + 1, 0).getDate();

    const days = [];
    for (let i = 1; i <= totalDays; i++) {
        days.push(i);
    }

    for (let i = 1; i < startDay; i++) {
        const emptyDiv = document.createElement("div");
        calendarDatesElement.appendChild(emptyDiv);
    }

    days.forEach(day => {
        const dayElement = document.createElement("div");
        dayElement.textContent = day;
        if (day === today) {
            dayElement.classList.add("today");
        }
        calendarDatesElement.appendChild(dayElement);
    });
});
