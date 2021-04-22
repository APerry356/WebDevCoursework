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

function knightChoice(choiceno, choiceVal) {
    setCookie(choiceno, choiceVal, 365);
}

function archerChoice(choiceno, choiceVal) {
    setCookie(choiceno, choiceVal, 365);
}

function neutralDec() {
	var sCookie = getCookie(score);
	score = sCookie - 0
	setCookie("score", score, 365)
}

function badDec() {
	var sCookie = getCookie(score);
	score = sCookie - 2
	setCookie("score", score, 365)
}

function goodDec() {
	var sCookie = getCookie(score);
	score = sCookie + 2
	setCookie("score", score, 365)
}

function endKnight() {
	getUsername();
	getCookie(choice1);	
}

function makeChoice1() {
	getUsername();
	var kchoice1 = getCookie("choice1");
	console.log(kchoice1);
	if (getCookie("choice1") == "1") {
		document.getElementById('choice1outcome1').style.display = 'block';
	} else if (getCookie("choice1") == "2") {
		document.getElementById('choice1outcome2').style.display = 'block';
	} else {
	document.getElementById('choice1outcome3').style.display = 'block';
	}								
								
							
}


	
	
	
	





