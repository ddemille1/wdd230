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
  if (btnReload.style.color === "orange") {
    btnReload.textContent = "Liked"}
    else {btnReload.textContent = "like"}
}

function pullLocal1() {
  const storedInput = localStorage.getItem("second");
  let btnReload = document.querySelector(".second .like");
  console.log(btnReload);
  console.log(storedInput);
  btnReload.style.color = storedInput;
  if (btnReload.style.color === "orange") {
    btnReload.textContent = "Liked"}
    else {btnReload.textContent = "like"}
}

function pullLocal2() {
  const storedInput = localStorage.getItem("third");
  let btnReload = document.querySelector(".third .like");
  console.log(btnReload);
  console.log(storedInput);
  btnReload.style.color = storedInput;
  if (btnReload.style.color === "orange") {
    btnReload.textContent = "Liked"}
    else {btnReload.textContent = "like"}
}

function pullLocal3() {
  const storedInput = localStorage.getItem("forth");
  let btnReload = document.querySelector(".forth .like");
  console.log(btnReload);
  console.log(storedInput);
  btnReload.style.color = storedInput;
  if (btnReload.style.color === "orange") {
    btnReload.textContent = "Liked"}
    else {btnReload.textContent = "like"}
}

let state = true;

function likefirst() {
    if (state) {
        let btnSpn = document.querySelector(".first .like");
        console.log(btnSpn);
        btnSpn.style.color = "orange";
        btnSpn.innerHTML = "Liked";
        localStorage.setItem("first", "orange");
    } else {
        let btnSpn = document.querySelector(".first .like");
        console.log(btnSpn);
        btnSpn.style.color = "black";
        btnSpn.innerHTML = "Like";
        localStorage.setItem("first", "black");
    }
    state = !state;
}

function likesecond() {
    if (state) {
        let btnSpn = document.querySelector(".second .like");
        console.log(btnSpn);
        btnSpn.style.color = "orange";
        btnSpn.innerHTML = "Liked";
        localStorage.setItem("second", "orange");
    } else {
        let btnSpn = document.querySelector(".second .like");
        console.log(btnSpn);
        btnSpn.style.color = "black";
        btnSpn.innerHTML = "Like";
        localStorage.setItem("second", "black");
    }
    state = !state;
}

function likethird() {
    if (state) {
        let btnSpn = document.querySelector(".third .like");
        console.log(btnSpn);
        btnSpn.style.color = "orange";
        btnSpn.innerHTML = "Liked";
        localStorage.setItem("third", "orange");
    } else {
        let btnSpn = document.querySelector(".third .like");
        console.log(btnSpn);
        btnSpn.style.color = "black";
        btnSpn.innerHTML = "Like";
        localStorage.setItem("third", "black");
    }
    state = !state;
}
function likeforth() {
    if (state) {
        let btnSpn = document.querySelector(".forth .like");
        console.log(btnSpn);
        btnSpn.style.color = "orange";
        btnSpn.innerHTML = "Liked";
        localStorage.setItem("forth", "orange");
    } else {
        let btnSpn = document.querySelector(".forth .like");
        console.log(btnSpn);
        btnSpn.style.color = "black";
        btnSpn.innerHTML = "Like";
        localStorage.setItem("forth", "black");
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
  let h3 = document.createElement("h3");
  let img = document.createElement("img");
  let span = document.createElement("span");
  let spanName = names[counter];

  console.log(spanName);
  span.classList.add(spanName);
  span.innerHTML =
    `<button class="like" onclick="like${spanName}(this)"><i class="fa fa-thumbs-up">Like</i></button>`;

  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");
  let p5 = document.createElement("p");
  let p6 = document.createElement("p");
  let p7 = document.createElement("p");
  let p8 = document.createElement("p");

  h3.textContent = `${temple.name}`;
  p1.textContent = `Address: ${temple.address}`;
  p2.textContent = `Phone: ${temple.phone}`;
  p3.textContent = `Email: ${temple.email}`;
  p4.textContent = `Services: ${temple.services}`;
  p5.textContent = `History: ${temple.history}`;
  p6.textContent = `Ordinance Scheduel: ${temple.ordSched}`;
  p7.textContent = `Session Schedule: ${temple.sesSched}`;
  p8.textContent = `Closing Dates: ${temple.closSched}`;

  img.setAttribute("src", temple.imageName);
  img.setAttribute("alt", `Picture of ${temple.name}`);
  img.setAttribute("loading", "lazy");

  card.appendChild(h3);
  card.appendChild(img);
  card.appendChild(span);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(p3);
  card.appendChild(p4);
  card.appendChild(p5);
  card.appendChild(p6);
  card.appendChild(p7);
  card.appendChild(p8);

  document.querySelector("div.cards").appendChild(card);

  counter = counter + 1;
}
