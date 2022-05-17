/*code for getting current date, in format Wednesday, May 11, 2022*/
let now = new Date();
let fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

document.getElementById('date').textContent = fulldate;

/* code for getting copywright date*/
let c = new Date()
let year = c.getFullYear()
document.getElementById("copyright").textContent = year

/*code for getting last modified*/
let d = new Date(document.lastModified)
let date = `Last Updated: ${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
document.getElementById("lastmodified").textContent = date


/*code for responsive hamburger menu*/

const hambutton = document.querySelector('.hamburgerBtn');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
hambutton.addEventListener('click', () => {hambutton.classList.toggle('pressed')}, false);