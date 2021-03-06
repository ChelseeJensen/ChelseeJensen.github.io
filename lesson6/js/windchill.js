/*Windchill Calculation*/
function findValues() {
    var tempF = document.getElementById('currentTemp').textContent;
    var speed = document.getElementById('currentWindSpeed').textContent;
    var output = windChill(tempF, speed);
    document.getElementById('windchillOutput').innerHTML = Math.round(output);
}

function windChill(tempF, speed) {
    if (tempF >= 50 || speed > 3.0) {
        var wcFactor = (35.74 + (0.6215 * tempF)) - (35.75 * (Math.pow(speed, 0.16))) + (0.42775 * tempF * (Math.pow(speed, 0.16)));
        return wcFactor}
    else {
        return "N/A"
    }
}   