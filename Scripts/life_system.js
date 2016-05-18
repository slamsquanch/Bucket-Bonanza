/*************************/
/*This script contains   */
/*all the functions that */
/*make the life system   */
/*************************/
//Note:displaying the life is in background_display.js

//Decrements a life
function decrementLives() {
		lives--;		
		if (lives == 0) {
			gameOver();
		} else {
			displayLives();
		}	
}
//Increments a life
function incrementLives() {
		if (lives < 5) {
			lives++;
			displayLives();
		}
}
//Brings up the game over screen
function gameOver() {
		window.location.href = "GameOver.html";
}
//Updates the score
function updateScore() {
	score++;
	document.getElementById("score").innerHTML = score;
}