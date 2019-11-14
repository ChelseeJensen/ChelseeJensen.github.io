const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
            for (let i = 0; i < prophets.length; i++ ) {
                /*Create Card Sections*/
                let card = document.createElement('section');
                
                /*Create Headings*/
                let h2 = document.createElement('h2');
                h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
                card.appendChild(h2);
                document.querySelector('div.cards').appendChild(card);

                /*Create Text/Paragraph*/
                let p = document.createElement('p');
                p.textContent = 'Date of Birth: ' + prophets[i].birthdate;
                card.appendChild(p);
                document.querySelector('div.cards').appendChild(card);
                
                /*Create Second Text/Paragraph*/
                let p2 = document.createElement('p');
                p2.textContent = 'Place of Birth: ' + prophets[i].birthplace;
                card.appendChild(p2);
                document.querySelector('div.cards').appendChild(card);

                /*Create Image*/
                let image = document.createElement('img');
                image.setAttribute('src', prophets[i].imageurl);
                image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' ' + '- ' + prophets[i].order);
                card.appendChild(image);
                document.querySelector('div.cards').appendChild(card);
            }
    });