/* Display High scores from local storage */
var highestScore = document.createElement("div");
var displayHighestScore = document.createElement("h2");
var displayHighestScoreText = document.createTextNode("Recorded scores!");
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

  
var getName = JSON.parse(localStorage.getItem('key')) || [];
//var getScores = JSON.parse(localStorage.getItem());
console.log("get name ", getName);
showHighScoresText.textContent = getName;

document.body.append(highestScore);
highestScore.append(displayHighestScore);
displayHighestScore.appendChild(displayHighestScoreText);
highestScore.appendChild(showHighScores);
showHighScores.appendChild(showHighScoresText);