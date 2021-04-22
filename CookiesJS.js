// Functions for charecter name got from W3 Schools (https://www.w3schools.com/js/js_cookies.asp)

function setCookie(cname, cvalue, exdays) { // function to set a cookie
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) { // function to get a cookie for use by another function
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

function checkCookie() { // function for getting the charecter name
	username = prompt("Please enter your Charecters name:", "");
    setCookie("username", username, 30);
}

function getUsername() { // function to show username with score on end page
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


// Functions for Score function.
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



// Functions for saving which option a user picked in each scenario 
function makeChoice1() {
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

function makeChoice2() {
    var kchoice2 = getCookie("choice2");
    console.log(kchoice2);
    if (getCookie("choice2") == "1") {
        document.getElementById('choice2outcome1').style.display = 'block';
    } else if (getCookie("choice2") == "2") {
        document.getElementById('choice2outcome2').style.display = 'block';
    } else {
        document.getElementById('choice2outcome3').style.display = 'block';
    }
}

function makeChoice3() {
    var kchoice3 = getCookie("choice3");
    console.log(kchoice3);
    if (getCookie("choice3") == "1") {
        document.getElementById('choice3outcome1').style.display = 'block';
    } else if (getCookie("choice3") == "2") {
        document.getElementById('choice3outcome2').style.display = 'block';
    } else {
        document.getElementById('choice3outcome3').style.display = 'block';
    }
}
	
	
function makeChoice() { // function to run all required functions for end screen.
	getUsername();
	makeChoice1();
	makeChoice2();
	makeChoice3();
}
	





