

/*********************************************/
/*  Stores the name of a visitor in a cookie */
/* file.   (Learned from W3schools &         */
/*    stackoverflow)                         */
/*********************************************/
function setCookie(name, value, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires;
}



/*********************************************/
/*  Returns the value of a specified cookie  */
/*  (Taken from W3schools)                         */
/*********************************************/
function getCookie(name) {
    var name = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}


/*********************************************/
/*  Checks if a cookie is already set        */
/*  for "Good ol' Mittins" achievement       */
/*  (Learned from W3schools &                */
/*  stackoverflow.com)                       */
/*********************************************/
function checkMittinsCookie() {
    var mittinsCookie=getCookie("mittins");
	var mittins = document.getElementById("mittins")
    //mittinsCookie = "";
    if (mittinsCookie!="") {
		/* if(mittins!=null){
			mittins.src = "graphics/achiveCat.png";
			meowKitty.play();
		} */
        //mittinsCookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
     //   alert("Good old Mittins! " + mittinsCookie);
    } else {
     //   alert("you have no Mittins cookies!");
    }
}

/*********************************************/
/*  Checks if a cookie is already set        */
/*  for "Back to Step 1" achievement       */
/*  (Learned from W3schools &                */
/*  stackoverflow.com)                       */
/*********************************************/
function checkStepOneCookie() {
    var stepOneCookie=getCookie("stepOne");
    //stepOneCookie = "";
    if (stepOneCookie!="") {
        return 1;
        //stepOneCookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
     //   alert("Back to step 1! " + stepOneCookie);
    } else {
        return 0;
     //   alert("you have no step 1 cookies!");
    }
}
//initializes the step on boolean as false for later jqueries 
var globalStepOne = 0;

/*********************************************/
/*  Checks if a cookie is already set        */
/*  for "Back to Step 1" achievement       */
/*  (Learned from W3schools &                */
/*  stackoverflow.com)                       */
/*********************************************/
function checkHundredCookie() {
    var hundredCookie=getCookie("hundred");
    //hundredCookie = "";
    if (hundredCookie!="") {
        //hundredCookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
     //   alert("Over 100! " + hundredCookie);
    } else {
      //  alert("you have no 100 cookies!");
    }
}