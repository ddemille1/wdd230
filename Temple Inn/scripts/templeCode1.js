const requestInfo = "json/templeInfo.json";
const cards = document.querySelector(".cards");

fetch(requestInfo)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);
    const temples = jsonObject["temples"];
    console.table(temples);
    temples.forEach(displayTemples);
    pullLocal();
    pullLocal1();
    pullLocal2();
    pullLocal3();
  });

function pullLocal() {
  const storedInput = localStorage.getItem("first");
  let btnReload = document.querySelector(".first .like");
  console.log(btnReload);
  console.log(storedInput);
  btnReload.style.color = storedInput;
  if (btnReload.style.color === "lightgray") {
    btnReload.textContent = "Liked"}
    else {btnReload.textContent = "Like"}
}

function pullLocal1() {
  const storedInput = localStorage.getItem("second");
  let btnReload = document.querySelector(".second .like");
  console.log(btnReload);
  console.log(storedInput);
  btnReload.style.color = storedInput;
  if (btnReload.style.color === "lightgray") {
    btnReload.textContent = "Liked"}
    else {btnReload.textContent = "Like"}
}

function pullLocal2() {
  const storedInput = localStorage.getItem("third");
  let btnReload = document.querySelector(".third .like");
  console.log(btnReload);
  console.log(storedInput);
  btnReload.style.color = storedInput;
  if (btnReload.style.color === "lightgray") {
    btnReload.textContent = "Liked"}
    else {btnReload.textContent = "Like"}
}

function pullLocal3() {
  const storedInput = localStorage.getItem("forth");
  let btnReload = document.querySelector(".forth .like");
  console.log(btnReload);
  console.log(storedInput);
  btnReload.style.color = storedInput;
  if (btnReload.style.color === "lightgray") {
    btnReload.textContent = "Liked"}
    else {btnReload.textContent = "Like"}
}

let state = true;

function likefirst() {
    if (state) {
        let btnSpn = document.querySelector(".first .like");
        console.log(btnSpn);
        btnSpn.style.color = "lightgray";
        btnSpn.innerHTML = "Liked";
        localStorage.setItem("first", "lightgray");
    } else {
        let btnSpn = document.querySelector(".first .like");
        console.log(btnSpn);
        btnSpn.style.color = "white";
        btnSpn.innerHTML = "Like";
        localStorage.setItem("first", "white");
    }
    state = !state;
}

function likesecond() {
    if (state) {
        let btnSpn = document.querySelector(".second .like");
        console.log(btnSpn);
        btnSpn.style.color = "lightgray";
        btnSpn.innerHTML = "Liked";
        localStorage.setItem("second", "lightgray");
    } else {
        let btnSpn = document.querySelector(".second .like");
        console.log(btnSpn);
        btnSpn.style.color = "white";
        btnSpn.innerHTML = "Like";
        localStorage.setItem("second", "white");
    }
    state = !state;
}

function likethird() {
    if (state) {
        let btnSpn = document.querySelector(".third .like");
        console.log(btnSpn);
        btnSpn.style.color = "lightgray";
        btnSpn.innerHTML = "Liked";
        localStorage.setItem("third", "lightgray");
    } else {
        let btnSpn = document.querySelector(".third .like");
        console.log(btnSpn);
        btnSpn.style.color = "white";
        btnSpn.innerHTML = "Like";
        localStorage.setItem("third", "white");
    }
    state = !state;
}
function likeforth() {
    if (state) {
        let btnSpn = document.querySelector(".forth .like");
        console.log(btnSpn);
        btnSpn.style.color = "lightgray";
        btnSpn.innerHTML = "Liked";
        localStorage.setItem("forth", "lightgray");
    } else {
        let btnSpn = document.querySelector(".forth .like");
        console.log(btnSpn);
        btnSpn.style.color = "white";
        btnSpn.innerHTML = "Like";
        localStorage.setItem("forth", "white");
    }
    state = !state;
}


let counter = 0;
let names = ["first", "second", "third", "forth", "fifth"];
console.log(names);

function displayTemples(temple) {
  console.log(names);
  console.log(counter);
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let img = document.createElement("img");
  let span = document.createElement("span");
  let spanName = names[counter];

  console.log(spanName);
  span.classList.add(spanName);
  span.innerHTML =
    `<button class="like" onclick="like${spanName}(this)"><i class="fa fa-thumbs-up">Like</i></button>`;

/*console.log(temple)
for (const key in temple) {
    console.log(`${key}: ${temple[key]}`);
}*/
    /*const ul = document.createElement("ul")
    ul.textContent = temple;
    card.appendChild(ul);
    console.log(ul)*/



  let ul1 = document.createElement("ul");
  let ul2 = document.createElement("ul");
    let li1 = document.createElement("li")

  let ul3 = document.createElement("ul");
    let li2 = document.createElement("li")

  let ul4 = document.createElement("ul");
  let ul5 = document.createElement("ul");
    let li3 = document.createElement("li")

  let ul6 = document.createElement("ul");
    let li4 = document.createElement("li");

  let ul7 = document.createElement("ul");
    let li5 = document.createElement("li");

  let ul8 = document.createElement("ul");
  

  h2.textContent = `${temple.name}`;
  ul1.textContent = `Address: `;
  ul2.textContent = `Phone: `;
    li1.textContent = `${temple.phone}`;
  ul3.textContent = `Email: `;
    li2.textContent = `${temple.email}`;
  ul4.textContent = `Services: `;
  ul5.textContent = `History: `;
    li3.textContent = `${temple.history}`;
  ul6.textContent = `Ordinance Scheduel: `;
    li4.textContent = `${temple.ordSched}`;
  ul7.textContent = `Session Schedule: `;
    li5.textContent = `${temple.sesSched}`;
  ul8.textContent = `Closing Dates: `;

  img.setAttribute("src", temple.imageName);
  img.setAttribute("alt", `Picture of ${temple.name}`);
  img.setAttribute("loading", "lazy");

//add list items------------------------------------, 
//must first make arrays into variables
let address = temple.address;
let services = temple.services;
let closSched = temple.closSched;
//call make list function to add list items from array to each ul
makeList(address,ul1)
makeList(services,ul4)
makeList(closSched,ul8)

//the make list function:
  function makeList(array, parent){
  for (const item of array){
    let li = document.createElement('li');
    li.textContent = item;
    parent.appendChild(li);
  }}



  card.appendChild(h2);
  card.appendChild(img);
  card.appendChild(span);
  card.appendChild(ul1);
  card.appendChild(ul2);
    ul2.appendChild(li1);
  card.appendChild(ul3);
    ul3.appendChild(li2);
  card.appendChild(ul4);
  card.appendChild(ul5);
    ul5.appendChild(li3);
  card.appendChild(ul6);
    ul6.appendChild(li4);
  card.appendChild(ul7);
    ul7.appendChild(li5);
  card.appendChild(ul8);

  document.querySelector("div.cards").appendChild(card);

  counter = counter + 1;
}
