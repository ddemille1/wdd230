/**/
/*Get the temp from the page and make it into a number*/
var temp = parseFloat(document.querySelector('#temp').textContent)
console.log(temp)

/*Get the windSpeed from the page and make it into a number*/
var windSpeed = parseFloat(document.querySelector('#windSpeed').textContent)
console.log(windSpeed)

/*define a function to calculat the windSpeed*/
function calcWindChill(temp, windSpeed){

    var windChill = 35.74 + 0.6215*temp - (35.75*windSpeed**0.16) + 0.4275 * temp * windSpeed**0.16
    return windChill
}

/*call the function and round the result if conditions are met, else give 'NA'*/
var f = ''
if (temp <= 50 && windSpeed >= 3) {f = roundToTwo(calcWindChill(temp, windSpeed))}
else {f = "N/A"}
console.log(f)

/*function to accurately round a number to two decimals*/
function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

/*place the wind chill number or NA on the page as needed.*/
document.querySelector('#windChill').textContent = f
