// vvv targets element on DOM vvv //
const message = document.getElementById("message");
const article1 = document.getElementById("article1");
const article2 = document.getElementById("article2");


message.addEventListener("keyup", function (evt) {
    article1.innerHTML = evt.target.value
    article2.innerHTML = evt.target.value
})