/***********************************/
/*This script contains the creation*/
/*of falling shapes and functions */
/*that change thier attributes     */
/***********************************/

/************************/
/*Constructor for Object*/
/************************/
function Object(imgSrc, element, timer){
    this.imgSrc =imgSrc;
    this.element= element;
    this.myTimer = timer;
}
/**************************/
/*Returns a random src    */
/*name for a falling shape*/
/**************************/
function randomObject(){
    var scrNames = new Array("graphics/blueCircle.png", "graphics/blueSquare.png",
        "graphics/blueTriangle.png", "graphics/redCircle.png", "graphics/redSquare.png", "graphics/redTriangle.png",
        "graphics/yellowCircle.png", "graphics/yellowSquare.png", "graphics/yellowTriangle.png");
	// Added three new graphics to fall
	var boot = "graphics/boot.png";
	var fish = "graphics/fish.png";
	var star = "graphics/star.png";
    // if you wish to change the max and min for the random generator
    // change the 8 for max and the 0 for min.
    var randomNum = Math.floor(Math.random() * 9);
	
	// Weight system for falling objects
	var chance = Math.floor((Math.random() * 100) + 1);
    if (chance < 70) {
		return scrNames[randomNum];
	} else if (chance < 90) {
		return boot;
	} else if (chance < 99) {
		return fish;
	} else {
		return star;
	}
}
/***********************/
/*returns a number that*/
/*represents the three */
/*lanes                */
/***********************/
function randomLane(){
    var lanes = ["30%", "45%", "60%"];
    return lanes[Math.floor(Math.random() * 3)];
}
/*************************/
/*Creates a falling shape*/
/*************************/
function createObject(){
    var imgSrc = randomObject();
    var element = document.createElement("img");
    element.style = "position:absolute; top:20%";
    element.style.marginLeft = randomLane();
    element.src = imgSrc;
	
	switch(imgSrc) {
		
		case "graphics/blueCircle.png":
			element.shape = 0;
			break;
			
		case "graphics/blueSquare.png":
			element.shape = 1;
			break;
				
		case "graphics/blueTriangle.png":
			element.shape = 2;
			break;			
			
		case "graphics/redCircle.png":
			element.shape = 3;
			break;
				
		case "graphics/redSquare.png":
			element.shape = 4;
			break;
				
		case "graphics/redTriangle.png":
			element.shape = 5;
			break;	
			
		case "graphics/yellowCircle.png":
			element.shape = 6;
			break;
				
		case "graphics/yellowSquare.png":
			element.shape = 7;
			break;
				
		case "graphics/yellowTriangle.png":
			element.shape = 8;
			break;
		case "graphics/boot.png":
			element.shape = 21;
			break;
		case "graphics/fish.png":
			element.shape = 22;
			break;
		case "graphics/star.png":
			element.shape = 23;
			break;
			
		default:
			break;
		
		}
    element.className = "fallingObject";
    var coolObject = new Object(imgSrc, element, null);
    document.body.appendChild(coolObject.element);
    return coolObject;
}
/********************************/
/*Moves all falling shapes by 1%*/
/********************************/
function move(){
    var objectArray = document.querySelectorAll(".fallingObject");
    for(var i = 0; i < objectArray.length; i++){
		//window.alert(objectArray[i].style.top);
        objectArray[i].style.top = parseInt(objectArray[i].style.top) + 1 + "%";
    }
}