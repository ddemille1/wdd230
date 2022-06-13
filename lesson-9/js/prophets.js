const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonOjbect) {
        console.table(jsonOjbect);
        prophets.forEach(displayProphets);            
        });

const prophets = jsonObject['prophets']