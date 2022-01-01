// delete every classes in window
document.addEventListener("scroll", () => {
    ul_Menu.classList.remove("active");
});
// english

let enBtn = document.getElementById("en");
let noification = document.querySelector(".left .notification");

enBtn.onclick = function() {
    noification.classList.add("active");
    setTimeout(function() {
        noification.classList.remove("active");
    }, 1000);
};
noification.onclick = () => {
    noification.classList.remove("active");
};

//
let searchBtn = document.getElementById("searchBtn");
let inputSearch = document.getElementById("search");
let notfi_Input = document.querySelector(".rightSearch .notifications");
searchBtn.onclick = function() {
    inputSearch.classList.toggle("active");
};

// notification input
inputSearch.oninput = function() {
    notfi_Input.classList.add("active");
    setTimeout(function() {
        notfi_Input.classList.remove("active");
    }, 1000);
};

// finish
// haumburgur

let menu = document.querySelector(".hamburgar");
let ul_Menu = document.querySelector(".leftHam ul");

menu.onclick = function() {
    ul_Menu.classList.toggle("active");
};
// Intro
let menu2 = document.querySelector(".hamburgars");
let ul_Menu2 = document.querySelector(".Intro .center ul");

menu2.onclick = function() {
    ul_Menu2.classList.toggle("active");
};
// console.log();

// cart items

let items_Btn = document.getElementById("items_Btn");
let item_Page = document.querySelector(".items");

items_Btn.onclick = function() {
    item_Page.classList.toggle("active");
};