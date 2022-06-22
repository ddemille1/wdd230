// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
//const url = https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=00ea60318b73a6283c6a3e0101a40d75//

const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=00ea60318b73a6283c6a3e0101a40d75&units=imperial"

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //to test the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    //to capatilize each word in the description:
    const words = desc.split(" ");
    for (let i = 0; i <words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);}
    
    words.join(" ");

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = words;
  }