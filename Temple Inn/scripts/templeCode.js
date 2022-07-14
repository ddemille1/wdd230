const requestInfo = "json/templeInfo.json";
const cards = document.querySelector('.cards');

fetch(requestInfo)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);
        const temples = jsonObject['temples'];
        console.table(temples);
        temples.forEach(displayTemples);
    })

function displayTemples (temple){
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');
    let p6 = document.createElement('p');
    let p7 = document.createElement('p');
    let p8 = document.createElement('p');
    let p9 = document.createElement('p');
    let p10 = document.createElement('p');
    
    
    h3.textContent =`${temple.name}`;
    p1.textContent = `Address: ${temple.address}`;
    p2.textContent = `Phone: ${temple.phone}`;
    p3.textContent = `Email: ${temple.email}`;
    p4.textContent = `Services: ${temple.services}`;
    p5.textContent = `History: ${temple.history}`;
    p6.textContent = `Ordinance Scheduel: ${temple.ordSched}`;
    p7.textContent = `Session Schedule: ${temple.sesSched}`;
    p8.textContent = `Closing Dates: ${temple.closSched}`;

    img.setAttribute('src', temple.imageName);
    img.setAttribute('alt', `Picture of ${temple.name}`);
    img.setAttribute('loading', 'lazy');

    card.appendChild(h3);
    card.appendChild(img);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    card.appendChild(p6);
    card.appendChild(p7);
    card.appendChild(p8);
    
    document.querySelector('div.cards').appendChild(card);
}