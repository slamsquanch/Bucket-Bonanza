/************************/
/*Script to resize score*/
/************************/


function checkGameOverScore(){
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	var gameOverPicture = document.getElementById("gameOverScreen");
	var enterButton = document.getElementById("scoreSubmitBtn");
	var restartButton = document.getElementById("gameOverRestart");
	var mainMenu= document.getElementById("gameOverExit");
	if(windowWidth < 800){
		var bigBackground = document.getElementById("largeBackround");
		if(bigBackground!=null){
			bigBackground.parentNode.removeChild(bigBackground);
		}
		enterButton.style.cssText="display:block;margin-left:auto;margin-right:auto;top:50%;width:70%;height:12%;left:0;right0;background-size:70% 12%;";
		howToBut.style.cssText="display:block;margin-left:auto;margin-right:auto;top:55%;width:70%;height:12%;left:0;right0;";
		restartButton.style.cssText="display:block;margin-left:auto;margin-right:auto;top:70%;width:70%;height:12%;left:0;right0;";
		gameOverPicture.style.cssText = "position:absolute;width:100%;height:100%;margin-left:0px;margin-right:0px;left:0;right:0;top:0;";
	}else{
		gameOverPicture.style.cssText = "position:absolute;width:37%;height:95%;margin-left:auto;margin-right:auto;left: 0;right: 0;top:0;";
	}		
}



window.onresize = function(){
	resize = setTimeout(function(){
		checkGameOverScore();
	 }, 500);
}
	
onload = function(){
	var bigBackground = document.getElementById("largeBackround");
	var windowWidth = window.innerWidth;
	if(windowWidth > 800 && bigBackground == null){
		largeBackround();
	}
}