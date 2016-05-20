/************************/
/*Script to resize game */
/*over screen           */
/************************/

function checkTitle(){
		var windowWidth = window.innerWidth;	
		if(windowWidth >800){
			largeBackround();
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