/* Toggle Menu Function*/
function toggleMenu() {
    document.getElementsByClassName("menu")[0].classList.toggle("responsive");
}

/*Current Date Function*/
const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const todaysdate = new Date();
const dayName = dayNames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const currentdate = dayName + ", " + todaysdate.getDate() + " " + monthName + " " + todaysdate.getFullYear();

document.getElementById('currentdate').textContent = currentdate;

/* Banner Ad Visibility */
function showbannerad() {
    if (todaysdate.getDay() === 5) {
        document.getElementById('bannerad').style.display = "block";
    }
}