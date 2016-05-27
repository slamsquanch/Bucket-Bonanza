/*
	Score transfer code altered from: http://www.codeproject.com/Questions/795191/Passing-JavaScript-data-values-between-HTML-pages
*/
window.onload = function() {
	var queryString = decodeURIComponent(window.location.search);
	queryString = queryString.substring(1);

    /*
    Number extraction code altered from: http://stackoverflow.com/questions/10003683/javascript-get-number-from-string
    */
	var score = queryString.match(/\d/g);
	score = score.join("");


	document.getElementById("scoreGameOver").innerHTML = score;
	document.getElementById("scoreOutput").value = score;
	
	
	var windowWidth = window.innerWidth;
		if(windowWidth > 800){
			largeBackround();
		}
		checkGameOverScore();
}