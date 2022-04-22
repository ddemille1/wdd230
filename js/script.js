//Script for the copywrite year:
let c = new Date()
let year = c.getFullYear()
document.getElementById("copywrite").textContent = year

//Script for the last modified date and time:
let d = new Date(document.lastModified)
let date = `Last Updated: ${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
document.getElementById("lastmodified").textContent = date

