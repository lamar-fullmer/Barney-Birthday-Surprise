const heading = document.querySelector("h1");
const one = document.querySelector("#one");
const myImg = document.querySelector("img");
const barneyText = document.querySelector("#barneytext");
const barneyText2 = document.querySelector("#barneytext2");
const two = document.querySelector("#two");

function turnGreen() {
    heading.style.color = "green";
}

heading.addEventListener("click", () => {
    heading.style.color = "yellowgreen";
    heading.innerHTML = "Surprise!<br>It's me, Barney, wishing you, Brody, a Happy Birthday!";
    one.style.backgroundColor = "purple";
    two.style.backgroundColor = "green";
    myImg.style.display = "block";
    barneyText.style.display = "block";
    barneyText2.style.display = "block";

})

const currentYear = new Date().getFullYear();

document.querySelector("#trademark").innerHTML = `TM ${currentYear} - Colton Fullmer`;



