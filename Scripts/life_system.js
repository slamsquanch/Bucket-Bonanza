/*************************/
/*This script contains   */
/*all the functions that */
/*make the life system   */
/*************************/
//Note:displaying the life is in background_display.js

//Decrements a life.  If no lives are left, goes to the game over screen.
function decrementLives() {
		lives--;		
		if (lives == 0) {
			gameOver();
		} else {
			displayLives();
		}	
}

//Increments a life.  Lives are capped at 5.
function incrementLives() {
		if (lives < 5) {
			lives++;
			displayLives();
		}
}

//Brings up the game over screen
function gameOver() {
	/*
	Score transfer code altered from: http://www.codeproject.com/Questions/795191/Passing-JavaScript-data-values-between-HTML-pages
	*/
	
	var queryString = "?para" + score;
	window.location.href = "GameOverScore.html" + queryString;
	
	if (score == 0) {
		setCookie("stepOne", "unlocked", 365);
	} else if (score >= 100) {
		setCookie("hundred", "unlocked", 7300);
	}
}

//Updates the score
function updateScore() {
	score++;
	document.getElementById("score").innerHTML = score;
	
	if ((score % 5) == 0)
		increaseDropRate();
	
	if ((score % 10) == 0)
		increaseShapeRate();
	
	if ((score % 12) == 0) {
    objectTimer = setInterval('createObject();', (shapeCreate * 2));
	}
		
}