const requestURL = 'https://ChelseeJensen.github.io/finalproject/data/templeinfo.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        console.table(jsonObject);
        const temples = jsonObject['temples'];

        let saltlake = temples.find(temples => temples.name === "Salt Lake Temple");
        let sandiego = temples.find(temples => temples.name === "San Diego California Temple");
        let laie = temples.find(temples => temples.name === "Laie Hawaii Temple");
        let manhattan = temples.find(temples => temples.name === "Manhattan New York Temple");
            for (let i = 0; i < temples.length; i++) {
                /*Create Card Sections*/
                let card = document.createElement('section');

                /*Create Headings*/
                let h2 = document.createElement('h2');
                h2.textContent = temples[i].name;
                card.appendChild(h2);
                document.querySelector('div.templeinfo').appendChild(card);

                /*Create Text: Phone Contact*/
                let p = document.createElement('p');
                p.textContent = temples[i].phone;
                card.appendChild(p);
                document.querySelector('div.templeinfo').appendChild(card);

                /*Create Text: Address*/
                let p2 = document.createElement('p');
                p.textContent = temples[i].address;
                card.appendChild(p);
                document.querySelector('div.templeinfo').appendChild(card);

                /*Create Text: Email*/
                let p3 = document.createElement('p');
                p.textContent = temples[i].email;
                card.appendChild(p);
                document.querySelector('div.templeinfo').appendChild(card);

                /*Create Text: Services*/
                let p4 = document.createElement('p');
                p.textContent = temples[i].services;
                card.appendChild(p);
                document.querySelector('div.templeinfo').appendChild(card);

                /*Create Text: Baptisms*/
                let p5 = document.createElement('p');
                p.textContent = temples[i].baptism;
                card.appendChild(p);
                document.querySelector('div.templeinfo').appendChild(card);

                /*Create Text: Initiatories*/
                let p6 = document.createElement('p');
                p.textContent = temples[i].initiatory;
                card.appendChild(p);
                document.querySelector('div.templeinfo').appendChild(card);

                /*Create Text: Endowment*/
                let p7 = document.createElement('p');
                p.textContent = temples[i].endowment;
                card.appendChild(p);
                document.querySelector('div.templeinfo').appendChild(card);

                /*Create Text: Sealing*/
                let p8 = document.createElement('p');
                p.textContent = temples[i].sealing;
                card.appendChild(p);
                document.querySelector('div.templeinfo').appendChild(card);

                /*Create Text: Closure*/
                let p9 = document.createElement('p');
                p.textContent = temples[i].closure;
                card.appendChild(p);
                document.querySelector('div.templeinfo').appendChild(card);

                /*Create Text: History*/
                let p10 = document.createElement('p');
                p.textContent = temples[i].history;
                card.appendChild(p);
                document.querySelector('div.templeinfo').appendChild(card);
            }
        });