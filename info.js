// Getting all the elements from HTML
var infoDiv = document.querySelector("#info-container")
var diffDiv = document.querySelector("#difficulty")
var backArrow = document.querySelector(".back-arrow")
var backArrow1 = document.querySelector(".back-arrow1")
var nextButton = document.querySelector("#next-button")
var diffOptions = document.querySelector("#options")
var easyDiff = document.querySelector("#easy-button")
var mediumDiff = document.querySelector("#medium-button")
var hardDiff = document.querySelector("#hard-button")

var input = document.querySelector(".input").value
var input1 = document.querySelector(".input1") 

// Storing the input value in localStorage
localStorage.setItem("input","name")


// Redirecting to the respective pages on some action
backArrow.addEventListener("click", ()=>{
    window.location.href = "./index.html"
})

nextButton.addEventListener("click", () => {
if (input.value == "" || input1.value === "") {
    alert("You can't escape without giving us our name(●'◡'●)");
} else {
    infoDiv.style.visibility = "hidden";
    diffDiv.style.visibility = "visible";
}
});

backArrow1.addEventListener("click", ()=>{
    diffDiv.style.visibility = "hidden"
    infoDiv.style.visibility = "visible"
})

easyDiff.addEventListener("click", ()=>{
    localStorage.setItem("level","easy")
    window.location.href = "./game.html?difficulty='easy'"
})

mediumDiff.addEventListener("click", ()=>{
    localStorage.setItem("level","medium")
    window.location.href = "./game.html?difficulty='medium'"
})

hardDiff.addEventListener("click", ()=>{
    localStorage.setItem("level","hard")
    window.location.href = "./game.html?difficulty='hard'"
})


// Style for the changing background
const styleVar = document.documentElement.style;
let timerInterval = setInterval(() => {
let rand = Math.floor(Math.random() * 360);
styleVar.setProperty('--hue', rand);
}, 3000);

// Adding music to the game
const backgroundMusic = new Audio("./assets/background.mp3")
window.onload(play())

function play() {
backgroundMusic.play()
backgroundMusic.loop = true
backgroundMusic.volume = 0.5
}