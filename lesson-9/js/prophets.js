const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];   
        prophets.forEach(displayProphets); 
                
        });
function displayProphets(prophet) {
    
    // create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let portrait = document.createElement('img');

    //change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    p1.textContent = `Date of Birth: ${prophet.birthdate}`;
    p2.textContent = `Place of birth: ${prophet.birthplace}`;
    //build the image attributes by using the setAttribute method for the src, alt, alt, and loading attribute values.
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `portrait of ${prophet.name} ${prophet.lastname} prophen number: ${prophet.order}`);
    portrait.setAttribute('loading', 'lazy');

    //add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(portrait);

    //add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}


