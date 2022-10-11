const URL = "https://thesimpsonsquoteapi.glitch.me/quotes";

const nameSimpson = document.getElementById ("name");
const img = document.getElementById ("image");
const message = document.getElementById ("message");
const generateApi = document.getElementById ("btn-generate");


generateApi.addEventListener("click", getApi)

function getApi () {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        nameSimpson.textContent = data [0].character
        img.src = data [0].image
        message.textContent = data [0].quote
    })
    // .then(data => console.log(data [0].url))
}

function datas (data) {
    nameSimpson.textContent = data [0].character
    img.src = data [0].image
    message.textContent = data [0].quote
}