// Variables - Capture HTML IDs
var timerEl = $('#timer')
var scoresBtn = $('#high-score-btn')
var startBtn = $("#start-btn")
var welcomeSec = $("#welcome")
var scoresSec = $('#scores-section')
var gameSec = $('#game-section')
// var questionsDiv = $('#questions')
var answersDiv = $('#answers')
var feedbackDiv = $('#answerFeedback')
var questionText = $('#questions')
var ansA = $('#a')
var ansB = $('#b')
var ansC = $('#c')
var ansD = $('#d')
var feedbackText = $('#answer-feedback')
var endGameScreen = $('#end-game-screen')
var scoreText = $('#score-text')
var initials = $('#initials-input')
var scoreSubmit = $('#score-submit')

//Question & Answer Object Array
var quizArray = [
    {
        question: 'Question 1: Who invented JavaScript?',
        a: "Mickey Mouse",
        b: "Brendan Eich",
        c: "Earthworm Jim",
        d: "John Resig",
        correct: "b"
    },
    {
        question: 'Question 2: ',
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        correct: 'd'
    },
    {
        question: 'Question 3: ',
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        correct: 'd'
    },
    {
        question: 'Question 4: ',
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        correct: 'd'
    },
    {
        question: 'Question 5: ',
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        correct: 'd'
    },
    {
        question: 'Question 6: ',
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        correct: 'd'
    }
]


// Game Variables
var timer = 30;
currentIndex = 0;
// console.log(quizArray[currentIndex].question)
// console.log(quizArray[5])
var score = 0
var highScoresList = []
// var inputInitials = ""

console.log(quizArray.length)


//Page when user first loads
initialize()
function initialize() {
    //Hide Questions & Answer Buttons
    gameSec.hide()
    //Hide High Score List
    scoresSec.hide()
    //Hide End Game Screen
    endGameScreen.hide()
}


// Start Game Button on Click
startBtn.on('click', startGame)

function startGame() {
    //Hide welcome section
    welcomeSec.hide();
    // Show Game Section w/ Questions, Multiple Choice, & Feedback
    gameSec.show()
    renderQuiz()
    var gameTimer = setInterval(() => {
        timer--
        timerEl.text("Timer: " + timer)

        if (timer < 0 || currentIndex == quizArray.length) {
            clearInterval(gameTimer);
            endGame();
        }
    }, 1000);
}


// Render Questions & Answers
function renderQuiz() {
    //Insert question from array
    questionText.text(quizArray[currentIndex].question)
    //Insert text from answers variables
    ansA.text(quizArray[currentIndex].a)
    ansB.text(quizArray[currentIndex].b)
    ansC.text(quizArray[currentIndex].c)
    ansD.text(quizArray[currentIndex].d)

}

// Answer Buttons


//Timer function

// Penalty Function

// Store High Scores in Local Storage
// var currentScores = JSON.parse(localStorage.getItem())
// var currentScoreLi = $(initials).on('submit', ).val();

scoreSubmit.on('click', highScoreSubmit);

function highScoreSubmit() {
    inputInitials = $(initials).on('click').val(); // capture user submitted initials
    $('input[type="text"]').val(""); // clear out form after submit
    var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    var highScoreInput = {
        player: inputInitials,
        playerScore: score,
    }
    highScores.push(highScoreInput)
    localStorage.setItem('player', JSON.stringify(highScores))
    // var highScoreArray = (currentScoreLi + '--' + score)
    // highScoresList.push(highScoreArray)
//     console.log(highScoresList)
//     window.localStorage.setItem('player', highScoreString)
}

// Append High Scores as List Items 

// End Game
function endGame() {
    gameSec.hide()
    endGameScreen.show()
    scoreText.text("Your final score is: " + score)

    // inputInitials = $(initials).on('click').val();
    // $('input[type="text"]').val("");
    // highScoresList.push(highScoreInput)
    // localStorage.setItem('highScore', JSON.stringify(highScoresList))

}

// Render High Scores
scoresBtn.on('click', showScores)

function showScores () {
    //Ensure Welcome Section is hidden
    welcomeSec.hide();
    // Hide Game Section
    gameSec.hide();
    //Hide End Game Screen
    endGameScreen.hide()
    // Show High Scores List
    scoresSec.show();
    
}
// 
//Logging user's answer ID to the correct answer and changing current index 
$(answersDiv.children()).on('click', function() {
    var userAnswer = (this.id)
    console.log(userAnswer)
    if (userAnswer === quizArray[currentIndex].correct) {
        score++
    } else {
        timer = timer - 10;
        // score--
    }
    console.log("Score: " + score)
    currentIndex++;
    console.log(currentIndex);
    if (currentIndex == quizArray.length) {
        endGame();
    } else {
        renderQuiz();
    }
})



// var userAnswer = $('')

// quizArray[currentIndex].correct