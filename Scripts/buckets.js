/**************************************/
/*This script contains bucket creation*/
/*and functions that change the bucket*/
/**************************************/


/************************************/
/*Randomize what the bucket requires*/
/************************************/
function randomBucketReq() {
	var myBucket = document.querySelectorAll(".bucket");
	var randomNum = Math.floor((Math.random() * 17) + 0);
	//var randomNum = 9; //for testing purposes
	for (i = 0; i < 3; i++) {
		myBucket[i].shape = randomNum;
	}
}
 
/*********************************************/
/*Set all buckets' shape value to param value*/
/*********************************************/
function setBucketShapeValue(value) {
	var thoseBuckets = document.querySelectorAll(".bucket");
	for (i = 0; i < 3; i++) {
		thoseBuckets[i].shape = value;
	}
}

/*************************/
/* Creates three buckets */
/*************************/
function bucketControls() {
    var bucketLeft = document.createElement("IMG");
    var bucketRight = document.createElement("IMG");
    var bucketMid = document.createElement("IMG");
	var windowHeight = window.innerHeight;
	var windowWidth=window.innerWidth;
	var bucketHeight = windowHeight * 0.75;
	
	//Key conrtols for the bucket
	keyControls();

    /* Makes the left lane button/bucket placeholder*/

    bucketLeft.setAttribute("src", "graphics/invisible_bucket.png");
    bucketLeft.setAttribute("alt", "Transparent button-left");
    bucketLeft.setAttribute("id", "LeftPlace");
	bucketLeft.setAttribute("class", "bucket");
	bucketLeft.setAttribute("location", 0);
	bucketLeft.lane = 0;
	//bucketLeft.style = "top: 80%";
	bucketLeft.style.marginTop = bucketHeight + "px";
    //bucketLeft.style.marginTop = "36%";
    document.body.appendChild(bucketLeft);

    /* Makes the right lane button/bucket placeholder*/
    bucketRight.setAttribute("src", "graphics/invisible_bucket.png");
    bucketRight.setAttribute("alt", "Transparent button-right");
    bucketRight.setAttribute("id", "RightPlace");
	bucketRight.setAttribute("class", "bucket");
	bucketRight.setAttribute("location", 0);
	bucketRight.lane = 2;
	//bucketRight.style = "top: 80%";
	bucketRight.style.marginTop = bucketHeight + "px";
  //  bucketRight.style.marginTop = "36%";
    document.body.appendChild(bucketRight);

    /* Makes the Middle lane button/bucket placeholder*/

    if (checkStepOneCookie() == 0) {
        bucketMid.setAttribute("src", "graphics/Bucket.png");
    } else {
        bucketMid.setAttribute("src", "graphics/Bucket2.png");
    }
    bucketMid.setAttribute("alt", "Transparent button-mid");
    bucketMid.setAttribute("id", "MidPlace");
	bucketMid.setAttribute("class", "bucket");
	bucketMid.setAttribute("location", 0);
	bucketMid.lane = 1;
	//bucketMid.style = "top: 80%";
	bucketMid.style.marginTop = bucketHeight + "px";
   // bucketMid.style.marginTop = "36%";
    document.body.appendChild(bucketMid);
	bucketMid.location = 1;

    /* Left lane click */
    bucketLeft.onclick = function() {
        setLeftBucket();
    }

    /* Right lane click */
    bucketRight.onclick = function() {
       setRightBucket();
    }

    /* Middle lane click */
    bucketMid.onclick = function() {
		setMidBucket();
        
    }
}
/***************************/
/*Changes the middle bucket  */
/*to the be the currently  */
/*active bucket            */
/***************************/
function setMidBucket(){
	var mid = document.getElementById("MidPlace");
	var left = document.getElementById("LeftPlace");
	var right = document.getElementById("RightPlace");
	if (checkStepOneCookie() == 0) {
		mid.src = "graphics/Bucket.png";
	} else {
		mid.src = "graphics/Bucket2.png";
	}
    left.src="graphics/invisible_bucket.png";
    right.src="graphics/invisible_bucket.png";
	left.location = 0;
	right.location = 0;
	mid.location = 1;
}
/***************************/
/*Changes the left bucket  */
/*to the be the currently  */
/*active bucket            */
/***************************/
function setLeftBucket(){
	var windowWidth=window.innerWidth;
	var mid = document.getElementById("MidPlace");
	var left = document.getElementById("LeftPlace");
	var right = document.getElementById("RightPlace");
	if (checkStepOneCookie() == 0) {
		left.src="graphics/Bucket_Left.png";
	} else {
		left.src = "graphics/Bucket2_Left.png";
	}

	if(windowWidth<800){
		if (checkStepOneCookie() == 0) {
			left.src = "graphics/Bucket.png";
		} else {
			left.src = "graphics/Bucket2.png";
		}
	}
    right.src="graphics/invisible_bucket.png";
    mid.src="graphics/invisible_bucket.png";
	left.location = 1;
	right.location = 0;
	mid.location = 0;
}
/***************************/
/*Changes the right bucket */
/*to the be the currently  */
/*active bucket            */
/***************************/
function setRightBucket(){
	var mid = document.getElementById("MidPlace");
	var left = document.getElementById("LeftPlace");
	var right = document.getElementById("RightPlace");
	if (checkStepOneCookie() == 0) {
		right.src="graphics/Bucket_Right.png";
	} else {
		right.src="graphics/Bucket2_Right.png";
	}

    left.src="graphics/invisible_bucket.png";
    mid.src="graphics/invisible_bucket.png";
	left.location = 0;
	right.location = 1;
	mid.location = 0;
}

/***************************/
/*Returns the currently    */
/*visible bucket's location*/
/***************************/
function activeBucket(){
	var buckets = document.querySelectorAll(".bucket");
	for(i = 0; i < 3; i++){
		if(buckets[i].location == 1){
			return buckets[i].lane;
		}
	}
}

function keyControls(){
	window.onkeydown = function(e){
		// code source: Jason's lecture
		if(e.event){
			pressed = e.keyCode;
		}else if(e.which){
			pressed = e.which;
		}
		/******************************/
		//window.alert(pressed);
		var curBucket = activeBucket();
		
		if((pressed == 37 || pressed == 65) && curBucket == 1){
			setLeftBucket();
		}
		else if((pressed == 37 || pressed == 65) && curBucket == 2){
			setMidBucket();
		}
		else if((pressed == 39 || pressed == 68) && curBucket == 0){
			setMidBucket();
		}
		else if((pressed == 39 || pressed == 68) && curBucket == 1){
			setRightBucket();
		}
			
	}
}