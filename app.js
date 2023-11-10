//Getting all the elements from HTML
var questionNumber = document.querySelector("#questionNo");
var timer = document.querySelector("#timer");
var optionsContainer = document.querySelectorAll(".option");
var questionContainer = document.querySelector(".question-append");
var scoreDisplay = document.querySelector("#score")
var compliments = document.querySelector("#compliment")
var quizContainer = document.querySelector("#quiz-container")
var gameOver = document.querySelector("#game-over-container")
var githubImg = document.querySelector("#github")
var linkedinImg = document.querySelector(".linkedin")
var playAgain = document.getElementById("play-again")

//Style for changing background
const styleVar = document.documentElement.style;
    let intervalTime = setInterval(() => {
    let rand = Math.floor(Math.random() * 360);
    styleVar.setProperty('--hue', rand);
}, 3000);

const totalQuestions = 10;
let currentDifficulty = "";
let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let timerInterval; 

//Variable to store the questions in form of list inside an object
const questions = {
    easy: [
        {
            question: "What is the largest mammal on Earth?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Lion"],
            answer: "Blue Whale"
        },
        {
            question: "In which country is the Great Wall of China located?",
            options: ["Japan", "China", "India", "United States"],
            answer: "China"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Ag", "Ge", "Au"],
            answer: "Au"
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            answer: "Leonardo da Vinci"
        },
        {
            question: "What is the capital of Japan?",
            options: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
            answer: "Tokyo"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean"
        },
        {
            question: "How many continents are there on Earth?",
            options: ["4", "5", "6", "7"],
            answer: "7"
        },
        {
            question: "What is the primary gas that makes up the Earth's atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
            answer: "Nitrogen"
        },
        {
            question: "Who is the author of 'To Kill a Mockingbird'?",
            options: ["Mark Twain", "George Orwell", "Harper Lee", "J.K. Rowling"],
            answer: "Harper Lee"
        },
        {
            question: "What is the smallest prime number?",
            options: ["0", "1", "2", "3"],
            answer: "2"
        },
        {
            question: "What is the national flower of India?",
            options: ["Rose", "Lotus", "Sunflower", "Tulip"],
            answer: "Lotus"
        },
        {
            question: "Who is known as the 'Father of the Nation' in India?",
            options: ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Mahatma Gandhi", "Subhas Chandra Bose"],
            answer: "Mahatma Gandhi"
        },
        {
            question: "What is the currency of the United Kingdom?",
            options: ["Dollar", "Euro", "Pound Sterling", "Yen"],
            answer: "Pound Sterling"
        },
        {
            question: "Which gas do humans breathe out when they exhale?",
            options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
            answer: "Carbon dioxide"
        },
        {
            question: "What is the largest desert in the world?",
            options: ["Gobi Desert", "Sahara Desert", "Atacama Desert", "Arabian Desert"],
            answer: "Sahara Desert"
        },
        {
            question: "Who discovered the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
            answer: "Albert Einstein"
        },
        {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
            answer: "Canberra"
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O"
        },
        {
            question: "Which planet is known as the 'Evening Star'?",
            options: ["Mercury", "Venus", "Mars", "Jupiter"],
            answer: "Venus"
        },
        {
            question: "Who wrote the 'Harry Potter' book series?",
            options: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "C.S. Lewis"],
            answer: "J.K. Rowling"
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Liver", "Heart", "Brain", "Skin"],
            answer: "Skin"
        },
        {
            question: "In which country is the city of Rome located?",
            options: ["Greece", "Spain", "Italy", "France"],
            answer: "Italy"
        },
        {
            question: "What is the chemical symbol for oxygen?",
            options: ["O2", "O", "O3", "Ox"],
            answer: "O2"
        },
        {
            question: "Who was the first person to walk on the Moon?",
            options: ["Neil Armstrong", "Buzz Aldrin", "Alan Shepard", "John Glenn"],
            answer: "Neil Armstrong"
        },
        {
            question: "What is the largest species of penguin?",
            options: ["Emperor Penguin", "Adélie Penguin", "King Penguin", "Gentoo Penguin"],
            answer: "Emperor Penguin"
        },
        {
            question: "Which gas is used for filling balloons and makes them float?",
            options: ["Oxygen", "Carbon dioxide", "Helium", "Nitrogen"],
            answer: "Helium"
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Venus", "Mars", "Jupiter"],
            answer: "Jupiter"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Ag", "Ge", "Au"],
            answer: "Au"
        }
    ],
    medium: [
        {
            question: "Which chemical element has the highest melting point?",
            options: ["Tungsten", "Iridium", "Osmium", "Rhenium"],
            answer: "Tungsten",
          },
          {
            question: "In which year was the periodic table first published?",
            options: ["1869", "1898", "1905", "1911"],
            answer: "1869",
          },
          {
            question: "Who was the first woman to win a Nobel Prize?",
            options: ["Marie Curie", "Rosalind Franklin", "Dorothy Crowfoot", "Gerty Cori"],
            answer: "Marie Curie",
          },
          {
            question: "Which philosopher is known for the 'Cogito, ergo sum' (I think, therefore I am) statement?",
            options: ["Aristotle", "Plato", "René Descartes", "Immanuel Kant"],
            answer: "René Descartes",
          },
          {
            question: "What is the world's largest coral reef system?",
            options: ["Belize Barrier Reef", "Great Barrier Reef", "Red Sea Coral Reef", "Maldives Coral Reef"],
            answer: "Great Barrier Reef",
          },
          {
            question: "Who discovered the first antibiotic, penicillin?",
            options: ["Alexander Fleming", "Louis Pasteur", "Robert H. Grubbs", "Paul Dirac"],
            answer: "Alexander Fleming",
          },
          {
            question: "What is the tallest mountain outside of Asia?",
            options: ["Mount McKinley", "Mount Kilimanjaro", "Mount Aconcagua", "Mount Everest"],
            answer: "Mount McKinley",
          },
          {
            question: "Which gas is responsible for the greenhouse effect on Earth?",
            options: ["Methane", "Oxygen", "Nitrogen", "Argon"],
            answer: "Methane",
          },
          {
            question: "Who wrote the philosophical work 'Critique of Pure Reason'?",
            options: ["Friedrich Nietzsche", "Karl Marx", "Søren Kierkegaard", "Immanuel Kant"],
            answer: "Immanuel Kant",
          },
          {
            question: "Which two chemical elements are most abundant in the Earth's crust?",
            options: ["Oxygen and Carbon", "Silicon and Aluminum", "Iron and Nickel", "Sodium and Chlorine"],
            answer: "Oxygen and Silicon",
          },
          {
            question: "What is the largest moon of Saturn?",
            options: ["Titan", "Enceladus", "Mimas", "Dione"],
            answer: "Titan",
          },
          {
            question: "Who formulated the theory of general relativity?",
            options: ["Isaac Newton", "Max Planck", "Albert Einstein", "Werner Heisenberg"],
            answer: "Albert Einstein",
          },
          {
            question: "Which city is known as the 'Venice of the North'?",
            options: ["Amsterdam", "Copenhagen", "Stockholm", "St. Petersburg"],
            answer: "St. Petersburg",
          },
          {
            question: "In which year was the Declaration of Independence of the United States adopted?",
            options: ["1774", "1776", "1781", "1789"],
            answer: "1776",
          },
          {
            question: "What is the chemical formula of ozone?",
            options: ["O", "O2", "CO2", "O3"],
            answer: "O3",
          },
          {
            question: "Who is the author of the book 'One Hundred Years of Solitude'?",
            options: ["Gabriel García Márquez", "Pablo Neruda", "Isabel Allende", "Jorge Luis Borges"],
            answer: "Gabriel García Márquez",
          },
          {
            question: "Which planet has the highest average surface temperature in our solar system?",
            options: ["Venus", "Mercury", "Mars", "Earth"],
            answer: "Venus",
          },
          {
            question: "What is the largest freshwater lake by volume in the world?",
            options: ["Lake Baikal", "Lake Superior", "Lake Victoria", "Lake Tanganyika"],
            answer: "Lake Baikal",
          },
          {
            question: "Who was the first person to circumnavigate the Earth?",
            options: ["Christopher Columbus", "Amerigo Vespucci", "Ferdinand Magellan", "James Cook"],
            answer: "Ferdinand Magellan",
          },
          {
            question: "Which element has the atomic number 92 and is commonly used as nuclear fuel?",
            options: ["Uranium", "Thorium", "Plutonium", "Neptunium"],
            answer: "Uranium",
          },
          {
            question: "What is the largest species of shark in the world?",
            options: ["Tiger shark", "Great white shark", "Whale shark", "Hammerhead shark"],
            answer: "Whale shark",
          },
          {
            question: "Which composer is famous for the 'Moonlight Sonata'?",
            options: ["Ludwig van Beethoven", "Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Frederic Chopin"],
            answer: "Ludwig van Beethoven",
          },
          {
            question: "Which ancient wonder of the world was a massive statue that stood on the island of Rhodes?",
            options: ["Great Pyramid of Giza", "Hanging Gardens of Babylon", "Colossus of Rhodes", "Statue of Zeus at Olympia"],
            answer: "Colossus of Rhodes",
          },
          {
            question: "In which country is the city of Petra, famous for its rock-cut architecture?",
            options: ["Egypt", "Jordan", "Greece", "Turkey"],
            answer: "Jordan",
          },
          {
            question: "Who discovered the laws of planetary motion known as Kepler's Laws?",
            options: ["Isaac Newton", "Galileo Galilei", "Johannes Kepler", "Nicolaus Copernicus"],
            answer: "Johannes Kepler",
          },
          {
            question: "What is the chemical symbol for lead?",
            options: ["Ld", "Pb", "Le", "Pl"],
            answer: "Pb",
          },
          {
            question: "Which gas is known as 'laughing gas'?",
            options: ["Oxygen", "Nitrous oxide", "Carbon dioxide", "Methane"],
            answer: "Nitrous oxide",
          },
          {
            question: "What is the name of the world's largest desert that is not a cold desert?",
            options: ["Sahara Desert", "Gobi Desert", "Atacama Desert", "Arabian Desert"],
            answer: "Sahara Desert",
          },
          {
            question: "Which noble gas is used in lighting and signs due to its distinctive red-orange glow?",
            options: ["Neon", "Helium", "Krypton","Xenon"],
            answer: "Neon"
          }     
    ],
    hard: [
        {
            question: "What is the smallest prime number greater than 1?",
            options: ["2", "1", "3", "5"],
            answer: "2",
        },
        {
            question: "Which chemical element is the densest naturally occurring element?",
            options: ["Osmium", "Iridium", "Platinum", "Uranium"],
            answer: "Osmium",
        },
        {
            question: "In quantum mechanics, what is the fundamental unit of information?",
            options: ["Bit", "Byte", "Qubit", "Quark"],
            answer: "Qubit",
        },
        {
            question: "Who developed the concept of the 'Uncertainty Principle' in physics?",
            options: ["Isaac Newton", "Niels Bohr", "Werner Heisenberg", "Max Planck"],
            answer: "Werner Heisenberg",
        },
        {
            question: "Which element was named after the Greek word for 'the sun'?",
            options: ["Helium", "Hydrogen", "Plutonium", "Sodium"],
            answer: "Helium",
        },
        {
            question: "What is the term for a sentence that reads the same forwards and backwards?",
            options: ["Palindrome", "Anagram", "Acronym", "Simile"],
            answer: "Palindrome",
        },
        {
            question: "In which African country can you find the ancient city of Carthage?",
            options: ["Egypt", "Algeria", "Tunisia", "Morocco"],
            answer: "Tunisia",
        },
        {
            question: "What is the chemical formula of a water molecule?",
            options: ["H2O", "CO2", "O2", "H2SO4"],
            answer: "H2O",
        },
        {
            question: "What is the name of the densest known substance in the universe found in neutron stars?",
            options: ["Black Hole", "Dark Matter", "Quark-Gluon Plasma", "Neutronium"],
            answer: "Neutronium",
        },
        {
            question: "Who wrote the philosophical work 'Critique of Pure Reason'?",
            options: ["Friedrich Nietzsche", "Karl Marx", "Søren Kierkegaard", "Immanuel Kant"],
            answer: "Immanuel Kant",
        },
        {
            question: "What is the process by which plants convert sunlight into chemical energy?",
            options: ["Photosynthesis", "Respiration", "Fermentation", "Osmosis"],
            answer: "Photosynthesis",
        },
        {
            question: "What is the term for a material that allows electrical current to flow in only one direction?",
            options: ["Conductor", "Resistor", "Capacitor", "Diode"],
            answer: "Diode",
        },
        {
            question: "In which year was the theory of relativity first published by Albert Einstein?",
            options: ["1905", "1915", "1925", "1935"],
            answer: "1915",
        },
        {
            question: "Which gas is responsible for the distinctive color of a gas discharge lamp, such as neon lights?",
            options: ["Argon", "Xenon", "Krypton", "Neon"],
            answer: "Neon",
        },
        {
            question: "What is the largest artery in the human body?",
            options: ["Aorta", "Femoral artery", "Coronary artery", "Carotid artery"],
            answer: "Aorta",
        },
        {
            question: "Which element is the main component of the Earth's inner core?",
            options: ["Iron", "Nickel", "Gold", "Copper"],
            answer: "Iron",
        },
        {
            question: "In mathematics, what is the Riemann Hypothesis related to?",
            options: ["Prime numbers", "Complex analysis", "Differential equations", "Calculus"],
            answer: "Prime numbers",
        },
        {
            question: "What is the name of the brightest star in the night sky?",
            options: ["Vega", "Betelgeuse", "Sirius", "Deneb"],
            answer: "Sirius",
        },
        {
            question: "In which country is the ancient city of Petra located?",
            options: ["Greece", "Egypt", "Jordan", "Syria"],
            answer: "Jordan",
        },
        {
            question: "Which mathematical constant is the ratio of a circle's circumference to its diameter?",
            options: ["Euler's number (e)", "Golden ratio (φ)", "Pi (π)", "Phi (Φ)"],
            answer: "Pi (π)",
        },
        {
            question: "What is the term for a word that is spelled the same way forwards and backwards?",
            options: ["Palindrome", "Anagram", "Acronym", "Antonym"],
            answer: "Palindrome",
        },
        {
            question: "Who is the author of the philosophical work 'Meditations'?",
            options: ["Aristotle", "Plato", "Marcus Aurelius", "Seneca"],
            answer: "Marcus Aurelius",
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Ag", "Ge", "Au", "Fe"],
            answer: "Au",
        },
        {
            question: "What is the most abundant gas in the Earth's atmosphere by volume?",
            options: ["Oxygen", "Carbon dioxide", "Argon", "Nitrogen"],
            answer: "Nitrogen",
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Mars", "Saturn", "Jupiter", "Venus"],
            answer: "Jupiter",
        },
        {
            question: "What is the term for the longest side of a right-angled triangle?",
            options: ["Hypotenuse", "Adjacent side", "Opposite side", "Perpendicular side"],
            answer: "Hypotenuse",
        },
        {
            question: "In which year did the famous mathematician Leonhard Euler pass away?",
            options: ["1713", "1783", "1793", "1823"],
            answer: "1783"
        },
    ]       
}
//For game audio
const gameMusic = new Audio("./assets/game-audio.mp3")
function playMusic(){
    gameMusic.play()
    gameMusic.loop = true
    gameMusic.volume = 1
}
document.addEventListener('load',playMusic())

//To redirect to according places
playAgain.addEventListener("click", () => {
    console.log("Play again button clicked!");
    window.location.href = "./info.html";
});

githubImg.addEventListener("click",() =>{
    window.open("https://github.com/KishoreGhost", "_blank")
})

linkedinImg.onclick = () =>{
    window.open("https://www.linkedin.com/in/kishore-kumar-d-a4b49927a/", "_blank")
}

//Function to check what difficulty the user has selected and display the questions accordingly 
function chosenDiff(difficulty){
    if (difficulty === "easy"){
    return "easy"
    }

    else if(difficulty === "medium"){
    return "medium"
    }

    else if(difficulty === "hard"){
    return "hard"
    }
}

//Function to initialize the start the game
function startQuiz(difficulty) {    
    currentDifficulty = chosenDiff(difficulty)
    randomQuestions(questions[currentDifficulty]); 
    currentQuestion = 0
    displayQuestion();
}

//Function to generate random Questions from the above variable
function randomQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to show the questions and options for the game
function displayQuestion() {
    if (currentQuestion < totalQuestions) {
        const questionData = questions[currentDifficulty][currentQuestion];
        const questionNo = currentQuestion + 1;

        questionNumber.innerHTML = `${questionNo} / 10`;
        timer.innerHTML = `${timeLeft}`;
        questionContainer.innerHTML = questionData.question;

        for (let i = 0; i < optionsContainer.length; i++) {
            optionsContainer[i].innerHTML = questionData.options[i];
        }
        startTimer();
        currentQuestion++;
    } else {
        endGame();
  
    }
}


// Function for the timer
function startTimer() {
    timeLeft = 10;
    clearInterval(timerInterval);
    timerInterval = setInterval(function () {
        timer.innerHTML = `${timeLeft}`;
        if (timeLeft === 0) {
            displayQuestion();
        }
        if(currentQuestion == 10 && timeLeft <= 0){
            endGame();
        }
        timeLeft--;
    }, 1000);
}

// Function to check the answer and display the score at the end
function checkAnswer(selectedOption) {
    if(selectedOption > 0){
        const selectedText = optionsContainer[selectedOption].textContent;
        const questionData = questions[currentDifficulty][currentQuestion - 1];
        if (selectedText === questionData.answer) {
            score++;
            console.log(score)
        }      
    }
    clearInterval(timerInterval); 

    if (currentQuestion < totalQuestions) {
        setTimeout(displayQuestion, 100); 
    }
    else {
        endGame(); 
    }
}

// Variables for giving compliments according to the score
var perfectScore = ["Perfect! You got all questions right!", "You are officially a nerd🤓", "You've reached the pinnacle of quiz success you're exceptional!", "Your perfect score is a testament to your incredible knowledge.", "Good job! Here is a cookie🍪"]
var mediumScore = ["Good job! You did well.","Your quiz performance is really impressive. Keep up the excellent work!", "Your quiz results are impressive, and your knowledge shines through with these scores.", "Keep up the great work, and continue enjoying your quiz games!"]
var lowScore = ["Keep practicing. You can do better!" , "You gave it your best shot, and that's what counts." ,"You're on the path to improvement, and that's admirable.", "Keep up the effort, and you'll surely see progress in no time.", "Every quiz is a learning opportunity, and you're making the most of it."]
var randomPerfect = Math.floor(Math.random()*perfectScore.length)
var randomMedium = Math.floor(Math.random()*mediumScore.length)
var randomLow = Math.floor(Math.random()*lowScore.length)

var userName = localStorage.getItem("input")

// Function to finish the game after certain conditions
function endGame() {
    clearInterval(timerInterval);
    quizContainer.style.visibility = "hidden"
    gameOver.style.visibility = "visible"
    if (score === totalQuestions) {
        compliments.innerHTML = perfectScore[randomPerfect]
    } else if (score >= totalQuestions / 2) {
        compliments.innerHTML = mediumScore[randomMedium]
    } else {
        compliments.innerHTML = lowScore[randomLow]
    }
    scoreDisplay.textContent =  `You have scored: ${score}/${totalQuestions}`;
    for (let i = 0; i < optionsContainer.length; i++) {
        optionsContainer[i].style.display = "none";
    }
}

// Calling the startQuiz function according to the difficulty chosen in the info.html 
var difficulty = localStorage.getItem("level")
startQuiz(difficulty)
document.getElementById("easy-button").addEventListener("click", () => {
    questions.options = "easy"
});

document.getElementById("medium-button").addEventListener("click", () => {
    questions.options = "medium"
});

document.getElementById("hard-button").addEventListener("click", () => {
    questions.options = "hard"
});

// :)



