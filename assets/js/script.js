/* Create H1 */
var infoEl = document.createElement("div");
var h1 = document.createElement("H1");
var text = document.createTextNode("Coding Quiz Challenge");

/* h1 styling */
h1.setAttribute(
  "style",
  "padding: 30px 20px 30px 20px; margin:auto; width:50%; text-align:center;"
);

/* View High Scores */

var highestScore = document.createElement("p");
var viewHighestScore = document.createTextNode("View High Scores");

highestScore.setAttribute("style", "margin: 0; float:left;");

var a = document.createElement("a");

// Create the text node for anchor element.
var link = document.createTextNode("View High Scores");

// Append the text node to anchor element.
a.appendChild(link);

// Set the title.
a.title = "View High Scores";

// Set the href property.
a.href = "./ViewHighScores.html";

/* create Timer */

var timer = document.createElement("p");
var timerText = document.createTextNode("Timer");
timer.setAttribute("style", "margin: 0; float:right;");

/* Create H2 */

var h2 = document.createElement("H3");
var h2Content = document.createTextNode(
  "Try to answer the code related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by ten seconds"
);

h2.setAttribute(
  "style",
  "margin:auto; width:50%; padding: 30px 20px 30px 20px; text-align:center;"
);

/* create START Quiz button */
var startBtn = document.createElement("BUTTON");
var btnText = document.createTextNode("Start Quiz");
startBtn.appendChild(btnText);

startBtn.setAttribute(
  "style",
  "margin-left:45%; width:8%;  margin-right:50%; border-radius:10px; background-color: violet;"
);

h1.appendChild(text);
document.body.appendChild(infoEl);
infoEl.appendChild(h1);

h2.appendChild(h2Content);
document.body.appendChild(h2);

document.body.appendChild(startBtn);

/* Declare Global Variables and Functions for Code logic */

let questions = [
  {
    question: "What does HTML stand for?",
    choiceA: "HyperText Markup Language",
    choiceB: "Hyper Transmission Markup Language",
    choiceC: "Host Text Markup Language",
    choiceD: "HD Text Markup Language",
    correct: "HyperText Markup Language",
  },
  {
    question: "What does CSS stand for?",
    choiceA: "Cascade StyleSheet",
    choiceB: "Cascase Service Solutions",
    choiceC: "Computer Services Solutions",
    choiceD: "Cat StyleSheet ",
    correct: "Cascase Service Solutions",
  },
  {
    question: "What does JS stand for?",
    choiceA: "JellyScript",
    choiceB: "JamScript",
    choiceC: "JavaScript",
    choiceD: "JumpScript",
    correct: "JavaScript",
  },
  {
    question: "What does JS stand for?",
    choiceA: "JellyScript",
    choiceB: "JamScript",
    choiceC: "JaScript",
    choiceD: "JavaScript",
    correct: "JavaScript",
  },
  {
    question: "What does JS stand for?",
    choiceA: "JellyScript",
    choiceB: "JamScript",
    choiceC: "JavaScript",
    choiceD: "JumpScript",
    correct: "JavaScript",
  },
];

// variables used by all functions / Global Variables */
var index = 0;
var score = 0;
var startMinutes = 5;
var interval;
let time = startMinutes * 60;

/* START QUIZ button event listener */
startBtn.addEventListener("click", function () {
  startBtn.style.display = "none";
  h1.style.display = "none";
  h2.style.display = "none";
  currentQuestion(index);
});

/* Declare Render Question Div */
var renderQuestion = document.createElement("div");
var displayQuestion = document.createElement("h3");

renderQuestion.appendChild(displayQuestion);

/* create Multiple choice options as buttons */

var options = document.createElement("div");
var option1 = document.createElement("INPUT");
option1.setAttribute("type", "button");
var option2 = document.createElement("INPUT");
option2.setAttribute("type", "button");
var option3 = document.createElement("INPUT");
option3.setAttribute("type", "button");
var option4 = document.createElement("INPUT");
option4.setAttribute("type", "button");

renderQuestion.appendChild(options);
options.appendChild(option1);
options.appendChild(option2);
options.appendChild(option3);
options.appendChild(option4);

/* Display Question Styling */
displayQuestion.setAttribute(
  "style",
  "margin-left:25%; width:50%; text-align:center;"
);

/* Multiple Choice Styling */
option1.setAttribute(
  "style",
  "margin-left:41%; width:20%;  margin-right:50%; margin-top:20px; margin-bottom:10px; text-align:center; background-color: skyblue;"
);
option2.setAttribute(
  "style",
  "margin-left:41%; width:20%;  margin-right:50%; margin-top:20px; margin-bottom:10px; text-align:center; background-color: skyblue;"
);
option3.setAttribute(
  "style",
  "margin-left:41%; width:20%;  margin-right:50%; margin-top:20px; margin-bottom:10px; text-align:center; background-color: skyblue;"
);
option4.setAttribute(
  "style",
  "margin-left:41%; width:20%;  margin-right:50%; margin-top:20px; margin-bottom:10px; text-align:center; background-color: skyblue;"
);

/* Check answer and display right or wrong */
var showResponse = document.createElement("div");
var elem = document.createElement("hr");
elem.setAttribute("width", "30%");
showResponse.appendChild(elem);
var answer = document.createElement("p");
showResponse.appendChild(answer);
var answerText = document.createTextNode("Correct !");
answer.setAttribute(
  "style",
  "margin-left:45%; width:10%;  margin-right:50%; margin-top: 20px; text-align:center; font-style: italic;"
);

/* display score */
var displayScore = document.createElement("div");
var finalScore = document.createElement("h2");
var h2Content = document.createTextNode(" All Done !");
var totalScore = document.createElement("p");
var scoreText = document.createTextNode("");

finalScore.setAttribute(
  "style",
  "margin:auto; width:50%; padding: 30px 20px 30px 20px; text-align:center; font-weight: bold;"
);

totalScore.setAttribute(
  "style",
  "margin:auto; width:50%; padding: 30px 20px 30px 20px; text-align:center; "
);

/* Enter Initials */
var inputInitials = document.createElement("input");
var input = document.createElement("p");
var inputText = document.createTextNode("Enter Initials :");

inputInitials.setAttribute(
  "style",
  "margin-left: 45%; margin-right: 45%; width:10%;  text-align:center;"
);
input.setAttribute(
  "style",
  "margin-left: 45%; margin-right: 45%; width:10%;  text-align:center; font-weight:bold"
);

/* create SUBMIT button */
var submitBtn = document.createElement("BUTTON");
var submitText = document.createTextNode("SUBMIT");
submitBtn.appendChild(submitText);

submitBtn.setAttribute(
  "style",
  "margin-left:45%; width:10%;  margin-right:50%; margin-top:20px; border-radius:10px; background-color: violet;"
);

/* Display Current Question */
function currentQuestion(index) {
  if (index < questions.length) {
    displayQuestion.textContent = questions[index].question;
    document.body.appendChild(displayQuestion);

    option1.setAttribute("value", questions[index].choiceA);
    option2.setAttribute("value", questions[index].choiceB);
    option3.setAttribute("value", questions[index].choiceC);
    option4.setAttribute("value", questions[index].choiceD);

    document.body.appendChild(options);
    interval = setInterval(countdown, 1000);

    if (index == questions.length - 1) {
      console.log("display last ele");
      
      scoreText.textContent = `Your final Score is : ${score}`;
      
      displayScore.append(finalScore);
      finalScore.append(h2Content);

      document.body.append(finalScore);
     
      displayScore.appendChild(totalScore);
      totalScore.appendChild(scoreText);
      
      document.body.appendChild(totalScore);

      input.appendChild(inputText);
      document.body.append(input);
      document.body.append(inputInitials);
      document.body.append(submitBtn);
      displayQuestion.style.display = "none";
      options.style.display = "none";

      clearInterval(interval);          
    }
  }
}

/* Option1 Button Event listener */

option1.addEventListener("click", function () {
  console.log("index" + index);
  if (option1.value === questions[index].correct) {
    console.log(
      "options 1 value " + option1.value + "answer " + questions[index].correct
    );
    answer.textContent = `Correct !`;
    score++;

    index++;
    options.append(answer);
  } else {
    answer.textContent = `wrong !`;
    index++;
    if (score > 0) {
      score--;
    }
    options.append(answer);
  }
  currentQuestion(index);
  console.log("score : " + score);
});

option2.addEventListener("click", function () {
  console.log("index" + index);
  if (option2.value === questions[index].correct) {
    console.log("index" + index);
    console.log(
      "options 2 value " + option2.value + "answer " + questions[index].correct
    );
    answer.textContent = `Correct !`;
    score++;
    index++;
    console.log("score : " + score);
    options.append(answer);
  } else {
    answer.textContent = `wrong !`;
    options.append(answer);
    index++;
    if (score > 0) {
      score--;
    }
  }
  currentQuestion(index);
  console.log("score : " + score);
});

option3.addEventListener("click", function () {
  console.log("index" + index);
  if (option3.value === questions[index].correct) {
    console.log("index" + index);
    console.log(
      "option 3 value " + option3.value + "answer " + questions[index].correct
    );
    answer.textContent = `Correct !`;
    score++;
    index++;
    options.append(answer);
  } else {
    answer.textContent = `wrong !`;
    options.append(answer);
    index++;
    if (score > 0) {
      score--;
    }
  }
  currentQuestion(index);
  console.log("score : " + score);
});

option4.addEventListener("click", function () {
  console.log("index" + index);
  if (option4.value === questions[index].correct) {
    console.log("index" + index);
    console.log(
      "option 4 value " + option4.value + "answer " + questions[index].correct
    );
    answer.textContent = `Correct !`;
    score++;
    index++;
    options.append(answer);
  } else {
    answer.textContent = `wrong !`;
    options.append(answer);
    index++;
    if (score > 0) {
      score--;
    }
  }
  currentQuestion(index);
  console.log("score : " + score);
});


/* Display High scores from local storage */
var highestScore = document.createElement("div");
var displayHighestScore = document.createElement("h2");
var displayHighestScoreText = document.createTextNode(" Highest Scores !");
var showHighScores = document.createElement("p");
var showHighScoresText = document.createTextNode("");
var recordScores = [{"name": " ", "score":" "}];

displayHighestScore.setAttribute(
  "style",
  "margin:auto; width:50%; padding: 30px 20px 30px 20px; text-align:center; font-weight: bold;"
);

showHighScores.setAttribute(
  "style",
  "margin:auto; margin-top: 20px; width:25%; text-align:center; border-radius: 10px; background-color: silver; color:white; font-weight:normal"
);

highestScore.appendChild(displayHighestScore);
displayHighestScore.appendChild(showHighScores);


var submitBtn = document.createElement("BUTTON");
var submitText = document.createTextNode("SUBMIT");
submitBtn.appendChild(submitText);

submitBtn.setAttribute(
  "style",
  "margin-left:45%; width:10%;  margin-right:50%; margin-top:20px; border-radius:10px; background-color: violet;"
);

var showButtons = document.createElement("div");
// Go Back Button
var goBackBtn = document.createElement("BUTTON");
var goBtnText = document.createTextNode("Go Back");
goBackBtn.appendChild(goBtnText);

showButtons.setAttribute(
  "style",
  "margin-left:45%; width:40%;  margin-right:50%; margin-top:20px; display:in-line;"
);

goBackBtn.setAttribute(
  "style",
  "margin-left:45%; width:25%;  margin-right:50%; margin-top:20px; border-radius:10px; background-color: violet;"
);

// Clear High Scores
var clearScoreBtn = document.createElement("BUTTON");
var clearScoreText = document.createTextNode("Clear High Scores");
clearScoreBtn.appendChild(clearScoreText);

clearScoreBtn.setAttribute(
  "style",
  "margin-left:45%; width:25%;  margin-right:50%; margin-top:20px; border-radius:10px; background-color: violet;"
);


showButtons.appendChild(goBackBtn);
showButtons.appendChild(clearScoreBtn);

submitBtn.addEventListener("click", function () {
 var highScorers = [{
   name : '',
   value: ''
 }];
  highScorers.name = inputInitials.value;
  highScorers.value = score;

  getName.push(highScorers);
  
  localStorage.setItem('key', JSON.stringify(getName));

  //console.log("input Name " ,highScorers.name, "score value : ", highScorers.value);
  console.log("local store: ", localStorage);

 /* var getNames = JSON.parse(localStorage.getItem("initials"));
  var getScores = JSON.parse(localStorage.getItem("score"));*/
  showHighScoresText.textContent = inputInitials.value +':' +score;

  finalScore.style.display = "none";
  inputInitials.style.display = "none";
  input.style.display = "none";
  totalScore.style.display = "none";
  
  document.body.append(displayHighestScore);
  displayHighestScore.appendChild(displayHighestScoreText);
  displayHighestScore.appendChild(showHighScores);
  showHighScores.appendChild(showHighScoresText);  
  displayHighestScore.appendChild(showButtons);
  showButtons.appendChild(goBackBtn);
  showButtons.appendChild(clearScoreBtn);
  
  
  submitBtn.style.display = "none";

});



/* For displaying timer */

function countdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timer.textContent = `Timer : ${minutes}: ${seconds}`;
  time--;
  infoEl.appendChild(timer);
  infoEl.appendChild(a);
}
