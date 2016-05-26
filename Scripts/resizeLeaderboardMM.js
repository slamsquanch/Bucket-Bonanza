/************************/
/*Script to resize Title*/
/************************/


function checkTitle(){
		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;
		var titlePicture = document.getElementById("titleScreen");
		if(windowWidth < 800){
			titlePicture.style.cssText = "position:absolute;width:100%;height:100%;margin-left:0px;margin-right:0px;left:0;right:0;top:0;";
		}
		else{
			largeBackround();
			titlePicture.style.cssText = "position:absolute;width:37%;height:95%;margin-left:auto;margin-right:auto;left: 0;right: 0;top:0;";	
		}
	}
	window.onresize = function(){
		resize = setTimeout(function(){
			checkTitle();
		 }, 500);
	}
	onload = function(){
		var windowWidth = window.innerWidth;
		if(windowWidth > 800){
			largeBackround();
		}
		checkTitle();
	}