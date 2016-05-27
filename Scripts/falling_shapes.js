/***********************************/
/*This script contains the creation*/
/*of falling shapes and functions */
/*that change their attributes     */
/***********************************/


/******************************************/
/* Returns the ID of the target shape.
   In case of a mixed target, will return
   one of the two ID's needed */
/******************************************/
function bias(id) {
	var random = Math.floor(Math.random() * 2);
	
	if (id < 9)
		return id;
	else {
		switch(id) {
			case 9:
				if (random == 0)
					return 0;
				else
					return 6;
				break;
			case 10:
				if (random == 0)
					return 1;
				else
					return 7;
				break;
			case 11:
				if (random == 0)
					return 2;
				else
					return 8;
				break;
			case 12:
				if (random == 0)
					return 3;
				else
					return 6;
				break;
			case 13:
				if (random == 0)
					return 4;
				else
					return 7;
				break;
			case 14:
				if (random == 0)
					return 5;
				else
					return 8;
				break;
			case 15:
				if (random == 0)
					return 0;
				else
					return 3;
				break;
			case 16:
				if (random == 0)
					return 1;
				else
					return 4;
				break;
			case 17:
				if (random == 0)
					return 2;
				else
					return 5;
				break;
		}
	}
}

/**************************/
/*Returns a random src    */
/*name for a falling shape*/
/**************************/
function randomObject() {
	          
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
	var biasChance = Math.floor(Math.random() * 4);
	
	var myBucket = document.querySelector(".bucket");
	
	// Weight system for falling objects
	var chance = Math.floor((Math.random() * 100) + 1);
    if (chance < 78) {
		// 1/4 chance the shape you need will drop
		if (biasChance == 0)
			return scrNames[bias(myBucket.shape)];
		else
			return scrNames[randomNum];
	} else if (chance < 94) {
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
function randomLane() {
	var currentWidth=window.innerWidth;
	if(currentWidth>800){
		var lanes = ["32%", "47%", "60%"];
		return lanes[Math.floor(Math.random() * 3)];
	}
	else{
		var lanes = ["5%", "40%", "78%"];
		return lanes[Math.floor(Math.random() * 3)];
	}
}

/*************************/
/*Creates a falling shape*/
/*************************/
function createObject() {
	if (bonanzaBool == 0) {
		var imgSrc = randomObject();
	} else {
		var imgSrc = "graphics/star.png";
	}
	
    
    var element = document.createElement("img");
    //element.style = "position:absolute; top:20%";
	element.style.top = "20%";
    element.style.marginLeft = randomLane();
    element.src = imgSrc;
	element.myHeight = 20//(window.innerHeight * 0.2);
	
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
    document.body.appendChild(element);
    return element;
}

/********************************/
/*Moves all falling shapes by 1%*/
/********************************/
function move() {
    var objectArray = document.querySelectorAll(".fallingObject");
    for (var i = 0; i < objectArray.length; i++) {
		//window.alert("init:" + parseInt(objectArray[i].style.top));
		objectArray[i].style.top = parseInt(objectArray[i].style.top) + dropPercent + "%";
	   //objectArray[i].style.top = objectArray[i].myHeight++ + "%";
	   //window.alert("after:" +parseInt(objectArray[i].style.top));
	   //objectArray[i].style.margin-top = "600px";
    }
}