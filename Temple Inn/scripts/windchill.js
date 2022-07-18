/*This is to use the weather API */
const alertInfo = document.querySelector("#alertInfo");
const tempIn = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");

const condition  = document.querySelector("#condition");
const weatherIcon = document.querySelector("#weatherIcon");
const windSpeedIn = document.querySelector("#windSpeed");

const day1temp = document.querySelector("#day1temp")
const day2temp = document.querySelector("#day2temp")
const day3temp = document.querySelector("#day3temp")

const day1 = document.querySelector("#day1")
const day2 = document.querySelector("#day2")
const day3 = document.querySelector("#day3")


//const url = "https://api.openweathermap.org/data/2.5/weather?id=4517586&appid=00ea60318b73a6283c6a3e0101a40d75&units=imperial"

const url = "https://api.openweathermap.org/data/2.5/onecall?lat=39.415352&lon=-81.454842&exclude=hourly,minutely&appid=00ea60318b73a6283c6a3e0101a40d75&units=imperial"

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //to test the call
            displayResults(data);
            allWindChill(tempIn, windSpeedIn);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(weatherData) {
    
    const alertOut = document.querySelector('.weatherAlert')
    let alertIn = weatherData.alerts
    //let alertIn = 'cat'
    console.log(typeof alertIn)
    console.log(alertIn)
    
    
    //if (typeof(alertIn) === "undefined")
      //  {console.log('its undefined')}   

    if (typeof (alertIn) === "undefined"){
        alertOut.style.display = 'none'}
    else {
        alertInfo.innerHTML = `${alertIn[0].event}`;
        const alertBtn = document.querySelector('.alertBtn');
        alertBtn.addEventListener('click', () => {alertOut.classList.toggle('closed')}, false);}
  

    
    tempIn.innerHTML = `<strong>${weatherData.current.temp.toFixed(0)}</strong>`;
    day1temp.innerHTML = `${weatherData.daily[1].temp.day.toFixed(0)}`
    day2temp.innerHTML = `${weatherData.daily[2].temp.day.toFixed(0)}`
    day3temp.innerHTML = `${weatherData.daily[3].temp.day.toFixed(0)}`
    
    day1.innerHTML = `${conversion(1)}: ` 
    day2.innerHTML = `${conversion(2)}: ` 
    day3.innerHTML = `${conversion(3)}: `    


    function conversion (number){
    //console.log(weatherData.daily[number].dt)
    let tomorrow = weatherData.daily[number].dt * 1000
    //console.log(tomorrow)

    let dateOjb = new Date(tomorrow)
    //console.log(dateOjb)

    let weekday = dateOjb.toLocaleString("en-US", {weekday: "long"})
    //console.log(weekday)
    return weekday
}


    humidity.innerHTML = `${weatherData.current.humidity.toFixed(0)}`;
    //tempIn.innerHTML = `5`
    windSpeedIn.innerHTML = `${weatherData.current.wind_speed}`;
    
    //windSpeedIn.innerHTML = `20`
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
    const desc = weatherData.current.weather[0].description;
    
    //to capatilize each word in the description:
    const words = desc.split(" ");
    for (let i = 0; i <words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);}
    //must put it into a different variable bc .join doesn't change the original array.
    let formattedWords = words.join(' ');

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', formattedWords);
    condition.textContent = formattedWords;
  }



/*The following is to calculate the windchill*/
/*Get the temp from the page and make it into a number*/
//var temp = parseFloat(document.querySelector('#temp').textContent)
//console.log(temp)

/*Get the windSpeed from the page and make it into a number*/
//var windSpeed = parseFloat(document.querySelector('#windSpeed').textContent)
//console.log(windSpeed)

//function for all of the functions of calculating and displaying windchill:
function allWindChill (tempIn, windSpeedIn) {
/*define a function to calculat the windSpeed*/
function calcWindChill(tempIn, windSpeedIn){

    var windChill = 35.74 + 0.6215*tempIn - (35.75*windSpeedIn**0.16) + 0.4275 * tempIn * windSpeedIn**0.16
    return windChill
}

/*call the function and round the result if conditions are met, else give 'NA'*/
var f = ''
if (parseFloat(tempIn.innerText) <= 50 && parseFloat(windSpeedIn.innerText) >= 3) {f = roundToTwo(calcWindChill(parseFloat(tempIn.innerText), parseFloat(windSpeedIn.innerText)))}
else {f = "N/A"}
console.log(f)

/*function to accurately round a number to two decimals*/
function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

/*place the wind chill number or NA on the page as needed.*/
document.querySelector('#windChill').textContent = f
}
