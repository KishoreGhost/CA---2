//Getting all the element from HTML to make the page dynamic
var getStarted = document.querySelector("#bottom")
var rules = document.querySelector("#rules");
var instructions = document.querySelector("#instructions");
var forBlur = document.querySelector("#blur")

//Redirects to info.html on clicking
getStarted.addEventListener("click", () =>{
    window.location.href = "./info.html"
})

//Shows the instructions on how to play the game while hovering over the info button
instructions.style.display = "none";
rules.addEventListener("mouseenter", () => {
    instructions.style.display = "block";
    forBlur.style.filter = "blur(80px)";
});

rules.addEventListener("mouseout", () => {
    instructions.style.display = "none";
    forBlur.style.filter = "blur(0px)"
});