/******************************/
/*This script is to resize the*/
/*how to page                 */
/******************************/

function checkHowTo(){
		var windowWidth = window.innerWidth;	
		var bigBackground = document.getElementById("largeBackround");
		var howTo = document.getElementById("howTo");

		if(bigBackground!=null){
			bigBackground.parentNode.removeChild(bigBackground);	
		}
		if(windowWidth >800){
			howTo.style.cssText = "position:absolute;width:37%;height:95%;margin-left:auto;margin-right:auto;left:0;right:0;top:0;";
			largeBackround();
		}
		if(windowWidth < 800){
			howTo.style.cssText = "position:absolute;width:100%;height:100%;margin-left:0px;margin-right:0px;left:0;right:0;top:0;";
			var windowBackground = document.querySelectorAll(".bigBackground");
			for(i=0; i < windowBackground.length; i++){
				windowBackground[i].parentNode.removeChild(windowBackground[i]);
			}
		}
}

window.onresize = function(){
		resize = setTimeout(function(){
			checkHowTo();
		 }, 500);
	}
	onload = function(){
		var windowWidth = window.innerWidth;
		if(windowWidth > 800){
			largeBackround();
		}
		checkHowTo();
	}