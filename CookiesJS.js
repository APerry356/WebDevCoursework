function setScoreCookie() {
	document.cookie = "score=20";
}



// Functions for charecter name got from W3 Schools (https://www.w3schools.com/js/js_cookies.asp)

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function checkCookie() {
  var username = getCookie("username");
  if (username != "") {
   alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your Charecters name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 30);
    }
  }
}


function getUsername() {
	username = getCookie("username");
	score = getCookie("score")
	alert ("You have completed your Journey " + username + ", but what were the consiquences of your actions? Your morality Score was: " + score);
	
	
}






function neutralDec(score) {
	var sCookie = getCookie(score);
	score = sCookie - 0
	
}

function badDec(score) {
	var sCookie = getCookie(score);
	score = sCookie - 2
	
}

function goodDec(score) {
	var sCookie = getCookie(score);
	score = sCookie + 2
	
}


function knightChoice1Option1() {
	document.cookie ="choice1=1"

}


function knightChoice1Option2() {
	document.cookie ="choice1=2"

}


function knightChoice1Option3(choice1) {
	document.cookie ="choice1=3"

}






function knightChoice2Option1(choice2) {
	document.cookie ="choice2=1"

}


function knightChoice2Option2(choice2) {
	document.cookie ="choice2=2"

}


function knightChoice2Option3(choice2) {
	document.cookie ="choice2=3"

}





function knightChoice3Option1(choice3) {
	document.cookie ="choice3=1"

}


function knightChoice3Option2(choice3) {
	document.cookie ="choice3=2"

}


function knightChoice3Option3(choice3) {
	document.cookie ="choice3=3"

}

function checkChoice1Cookie() {
	setCookie("choice1", choice1, 30); 
}	

function endKnight() {
	getUsername();
	checkChoice1Cookie;
	getCookie(choice1);
	
			
}


	
	
	
	
  var username = getCookie("username");
  if (username != "") {
   alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your Charecters name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 30);
    }
  }
}




