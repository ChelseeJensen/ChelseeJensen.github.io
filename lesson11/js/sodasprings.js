// Weather API Fetch Method //
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=8574f8268ffa4865851e03bb68a97c32';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
       // console.log(jsObject);

        document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
        document.getElementById('high-temp').textContent = Math.round(jsObject.main.temp_max);
        document.getElementById('current-humidity').textContent = jsObject.main.humidity;
        document.getElementById('currentWindSpeed').textContent = Math.round(jsObject.wind.speed);

        //Calculate Wind Chill//
        var tempF = jsObject.main.temp;
        var speed = jsObject.wind.speed;
        var f = (35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.42775 * tempF * Math.pow(speed, 0.16)));
            if (tempF >= 50 || speed > 3.0) {
                document.getElementById('windchillOutput').textContent = Math.round(f);    
            }
            else {
                document.getElementById('windchillOutput').textContent = "N/A";
            }  
    });

// Forecast API Fetch Method//
const apiURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=8574f8268ffa4865851e03bb68a97c32';

fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);

        var i = 0;
        var j = 0;

        while (i < 40 && j < 5) {
            var time = jsObject.list[i].dt_txt;
            if (time.includes('18:00:00')) {
                       
                //Get the date and post
                let date = new Date(time);
                let weekdayOption = { weekday: 'short'};
                let weekday = date.toLocaleDateString('en-US', weekdayOption);
                let nameId = 'name' + j;
                document.getElementById(nameId).textContent = weekday;

                //Weather Icon
                let icon = 'https://api.openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
                let desc = jsObject.list[i].weather[0].description;
                let imageId = 'image' + j;
                document.getElementById(imageId).setAttribute('src', icon);
                document.getElementById(imageId).setAttribute('alt', desc);
                
                //Temperature
                let temp = Math.round(jsObject.list[i].main.temp_max);
                let tempId = 'temp' + j;
                document.getElementById(tempId).textContent = temp;

                j++;
            }
            i++;
        }
    });