function lastUpdated() {
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById('year').innerHTML = year;
    document.getElementById('lastUpdated').innerHTML += document.lastModified;
}