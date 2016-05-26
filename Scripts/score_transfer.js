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
}

// Setting the background
function background() {
    var sky = document.createElement("img");
    sky.setAttribute("src", "Screens/GameOverSubmit.png");
    sky.setAttribute("alt", "Game Background");
    sky.setAttribute("id", "sky");
	sky.setAttribute("class", "background");
    document.body.appendChild(sky);
}

// Supposed to set the cat wall paper
function largeBackround() {
    var largeBackground = document.createElement("img");
    largeBackground.setAttribute("src", "graphics/websiteBackground.png");
    largeBackground.style = "position:absolute;top:0;width:100%;height:100%;";
    document.body.insertBefore(largeBackground, document.body.firstChild);
}