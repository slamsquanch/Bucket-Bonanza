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


//Updates the score
function updateScore() {
	score++;
	document.getElementById("score").innerHTML = score;
	if ((score % 2) == 0) {
		increaseDropRate();
	}
}


//Brings up the game over screen
function gameOver() {
		window.location.href = "GameOverScore.html";
	if (score == 0) {
		setCookie("stepOne", "unlocked", 365);
	} else if (score >= 100) {
		setCookie("hundred", "unlocked", 7300);
	}
}

