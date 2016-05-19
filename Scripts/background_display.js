/*********************************/
/*This script file contains all **/
/*functions that are used to     */
/*display the background         */
/*********************************/


/********************************************/
/*			Mittens displays target			*/
/********************************************/
// Needs to be placed above the checkbox hit function because it is being called by it
function displayTarget(){
	var scrNames = new Array("graphics/blueCircle.png", "graphics/blueSquare.png",
        "graphics/blueTriangle.png", "graphics/redCircle.png", "graphics/redSquare.png", "graphics/redTriangle.png",
        "graphics/yellowCircle.png", "graphics/yellowSquare.png", "graphics/yellowTriangle.png", "graphics/greenCircle.png",
		"graphics/greenSquare.png", "graphics/greenTriangle.png", "graphics/orangeCircle.png", "graphics/orangeSquare.png",
		"graphics/orangeTriangle.png", "graphics/purpleCircle.png", "graphics/purpleSquare.png","graphics/purpleTriangle.png");
		
	var checkTarget = document.querySelector(".targetShape");
	if(checkTarget != null){
		checkTarget.parentNode.removeChild(checkTarget);
	}
	var theBucket = document.querySelector(".bucket");
	var targetShape = document.createElement("img");
	targetShape.src = scrNames[theBucket.shape];
	targetShape.style = "position:absolute; top:26%";
	targetShape.style.marginLeft = "auto";
	targetShape.style.marginRight = "auto";
	targetShape.setAttribute("class", "targetShape");
	targetShape.style.left = 0;
	targetShape.style.right = 0;
	targetShape.setAttribute ("width", "5%");
	targetShape.setAttribute ("height", "10%");
	document.body.appendChild(targetShape);	
}

/********************************************/
/*			Mittens teaches mixing			*/
/********************************************/
// only at the top for testing purposes will be moved with background stuff later
function speechBubble(){
	// array will be 9 elements later
	var teach = new Array("Mixing Colours/MixGreenCircle.png", "Mixing Colours/MixGreenSquare.png",
		"Mixing Colours/MixGreenTriangle.png", "Mixing Colours/MixOrangeCircle.png", "Mixing Colours/MixOrangeSquare.png",
		"Mixing Colours/MixOrangeTriangle.png", "Mixing Colours/MixPurpleCircle.png", "Mixing Colours/MixPurpleSquare.png",
		"Mixing Colours/MixPurpleTriangle.png");

	var theBucket = document.querySelector(".bucket");
	var checkBubble = document.querySelector(".speechBubble");
	if(checkBubble != null){
		checkBubble.parentNode.removeChild(checkBubble);
	}
	if (theBucket.shape > 8) {
		var mixColours = document.createElement("img");
		mixColours.src = teach[theBucket.shape - 9];
		mixColours.style = "position:absolute; top:0%";
		mixColours.style.marginLeft = "30%";
		mixColours.setAttribute("class", "speechBubble");
		mixColours.setAttribute ("width", "15%");
		//mixColours.setAttribute ("height", "10%");
		document.body.appendChild(mixColours);
	}

}
/****************/
/*Displays lives*/
/****************/
function displayLives() {
		document.getElementById("life").src = "Lives/" + lives + "lifeB.png";
}

/*****************************/
/***** GAME BACKGROUND  ******/
/*****************************/
//Displays background
function background() {
    var sky = document.createElement("img");
    sky.setAttribute("src", "graphics/SkyBackground.png");
    sky.setAttribute("alt", "Game Background");
    sky.setAttribute("id", "sky");
	sky.setAttribute("class", "background");
    document.body.appendChild(sky);
}

/****************/
/*Creats Mittins*/
/****************/
function mittins(){
	var mittins = document.createElement("img");
	mittins.setAttribute("src", "graphics/MiddleCat.png");
	mittins.style = "position:absolute; top:10%";
	mittins.setAttribute ("width", "15%");
	mittins.setAttribute ("height", "30%");
	mittins.setAttribute ("class", "middleCloud");
	mittins.id = "mittins";
	mittins.style.marginLeft = "auto";
	mittins.style.marginRight = "auto";
	mittins.style.left = 0;
	mittins.style.right = 0;
	document.body.appendChild(mittins);
	
	var mittins = document.getElementById("mittins")
	
	/*When you click on the middle cat it will change the cat to the other cat*/
	mittins.onclick = function(){
			
			if(mittins.getAttribute("src") == "graphics/MiddleCat.png"){
				mittins.src = "graphics/originalCat.png";
				//mittins.style = "margin-left: 26%; 	position:absolute; top:7%";
				meowKitty.play();
			}
			else{
				mittins.src = "graphics/MiddleCat.png";
				//mittins.style = "margin-left: 26%; 	position:absolute; top:10%";
				meowKitty2.play();
			}
		};		
}
/*******************/
/*Creats the clouds*/
/*******************/
function sideClouds(){
	/***************/
	/**Left cloud***/
	/***************/
	var leftCloud = document.createElement("img");
	leftCloud.setAttribute("src", "graphics/leftCloud.png");
	leftCloud.style = "position:absolute; top:10%";
	leftCloud.setAttribute ("width", "15%");
	leftCloud.setAttribute ("height", "30%");
	leftCloud.style.marginLeft = "31.5%";
	/***************/
	/**Right cloud**/
	/***************/
	var rightCloud = document.createElement("img");
	rightCloud.setAttribute("src", "graphics/rightCloud.png");
	rightCloud.style = "position:absolute; top:10%";
	rightCloud.setAttribute ("width", "15%");
	rightCloud.setAttribute ("height", "28%");
	rightCloud.style.marginLeft = "53.5%";
	/*****************************/
	/*Adds the images to the body*/
	/*****************************/
	document.body.appendChild(rightCloud);
	document.body.appendChild(leftCloud);
}
/**************************/
/*Displays the word Target*/
/**************************/
function displayTargetText(){
	var targetText = document.createElement("img");
	targetText.src = "graphics/target.png";
	targetText.style = "position:absolute; top:24%";
	targetText.style.marginLeft = "auto";
	targetText.style.marginRight = "auto";
	targetText.style.left = 0;
	targetText.style.right = 0;
	targetText.setAttribute ("width", "5%");
	targetText.setAttribute ("height", "5%");
	document.body.appendChild(targetText);
}
/********************************************/
/*creates pause icon in the top right corner*/
/********************************************/
function pauseIcon(){
	var pauseIcon = document.createElement("img");
	pauseIcon.setAttribute("src", "buttons/pauseIcon.png");
	pauseIcon.style = "position:absolute; top:1%";
	pauseIcon.setAttribute ("width", "5%");
	pauseIcon.setAttribute ("height", "10%");
	pauseIcon.setAttribute("class", "pauseIcon");
	pauseIcon.style.marginLeft = "63%"
	document.body.appendChild(pauseIcon);
	
}