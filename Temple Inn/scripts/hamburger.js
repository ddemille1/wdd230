/*code for responsive hamburger menu*/
/** This needs to be modified to querySelectorAll then something else to run through the new list. right now it is only applying to the last instances of .hamburgerBtn and .navigation. Currently the dropdown only works on the last page -- the join page*/
const hambutton = document.querySelector('.hamburgerBtn');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
hambutton.addEventListener('click', () => {hambutton.classList.toggle('pressed')}, false);