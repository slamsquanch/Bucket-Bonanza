/************************/
/*Script to resize Title*/
/************************/


function checkTitle(){
		var menu = document.getElementById("menu");
		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;
		var titlePicture = document.getElementById("titleScreen");
		var leaderboardBut = document.getElementById("titleLeaderboard");
		var playButton = document.getElementById("titlePlay");
		var howToBut= document.getElementById("titleHowTo");
		if(windowWidth < 800){
			var bigBackground = document.getElementById("largeBackround");
			if(bigBackground!=null){
				bigBackground.parentNode.removeChild(bigBackground);
			}		
			if(menu!=null){
				menu.style.cssText="display:none;width:100%;height:100%;position:absolute;left:0;right:0;overflow:hidden;";
			}
			howToBut.style.cssText="display:block;margin-left:auto;margin-right:auto;top:55%;width:70%;height:12%;left:0;right0;";
			playButton.style.cssText="display:block;margin-left:auto;margin-right:auto;top:40%;width:70%;height:12%;left:0;right0;";
			leaderboardBut.style.cssText="display:block;margin-left:auto;margin-right:auto;top:70%;width:70%;height:12%;left:0;right0;";
			titlePicture.style.cssText = "position:absolute;width:100%;height:100%;margin-left:0px;margin-right:0px;left:0;right:0;top:0;";
		}
		else{
			var bigBackground = document.getElementById("largeBackround");
			if(bigBackground==null){
				largeBackround();
			}
			howToBut.style.cssText="display:block;margin-left:auto;margin-right:auto;top:55%;width:30%;height:12%;left:0;right0;";
			playButton.style.cssText="display:block;margin-left:auto;margin-right:auto;top:40%;width:30%;height:12%;left:0;right0;";
			leaderboardBut.style.cssText="display:block;margin-left:auto;margin-right:auto;top:70%;width:30%;height:12%;left:0;right0;"
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
        checkMittinsCookie();
		checkStepOneCookie();
		checkHundredCookie();
	}