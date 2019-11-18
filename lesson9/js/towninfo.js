const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];

        let preston = towns.find(town => town.name === "Preston");
        let fishHaven = towns.find(town => town.name === "Fish Haven");
        let sodaSprings = towns.find(town => town.name === "Soda Springs");
        for (let i = 0; i < towns.length; i++){
            if (towns[i].name == "Fish Haven" ||
                towns[i].name == "Preston" ||
                towns[i].name == "Soda Springs")
            {
                let card = document.createElement('section');
                let townInfo = document.createElement('div');
                let title = document.createElement('h3');
                let motto = document.createElement('h4');
                let founded = document.createElement('p');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');
                let photo = document.createElement('img');

                title.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                founded.textContent = "Year Founded: " + towns[i].yearFounded;
                population.textContent = "Current Population: " + towns[i].currentPopulation;
                rainfall.textContent = "Average Rainfall: " + towns[i].averageRainfall;
                photo.setAttribute('src', "./images/" + towns[i].photo);
                photo.setAttribute('alt', towns[i].photo);

                townInfo.appendChild(title);
                townInfo.appendChild(motto);
                townInfo.appendChild(founded);
                townInfo.appendChild(population);
                townInfo.appendChild(rainfall);
                card.appendChild(townInfo);
                card.appendChild(photo);

                document.querySelector('div.towninfo').appendChild(card);
            }
        }
    });