/*****************/
/*This script has*/
/*popup functions*/
/*****************/

function closeFun(){
	$("#achivePopup").slideToggle('slow','swing');
	$("#achiveIcon").slideToggle('fast','swing');				
	setTimeout(clearFun, 1000);			
}
function clearFun(){
	$("#achivePopup").remove();
	$("#achiveIcon").remove();
}
	
//source code:http://stackoverflow.com/questions/1345722/calling-jquery-function-from-javascript
function myFun(){
	var achivePopup = $('<div id="achivePopup">');
	var achiveIcon = $('<img src="buttons/unknownAchive.png" id="achiveIcon">');
	$(achivePopup).appendTo("body");
	$(achiveIcon).appendTo(achivePopup);
	$("#achivePopup").slideToggle('slow','swing');
	$("#achiveIcon").slideToggle('fast','swing');
	setTimeout(closeFun, 2000);
}
		

		