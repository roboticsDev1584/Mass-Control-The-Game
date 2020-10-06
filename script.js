window.onload = function (){
  var navButtonClicked = false;
  var navButton = document.getElementById("navButton");
  var bar1 = document.getElementById("bar1");
  var bar2 = document.getElementById("bar2");
  var bar3 = document.getElementById("bar3");
  var navbar = document.getElementById("navbar");
  //var embed = document.getElementById("embed");
  
  //content selectors
  var rulesS = document.getElementById("rulesS");
  var howToS = document.getElementById("howToS");
  var gameS = document.getElementById("gameS");
  var fdbS = document.getElementById("fdbS");
  var argEssayS = document.getElementById("argEssayS");
  
  //content
  var rules = document.getElementById("rules");
  var howTo = document.getElementById("howTo");
  var game = document.getElementById("gameContainer");
  var form = document.getElementById("form");
  var argEssay = document.getElementById("argEssay");
  var rulesLink = document.getElementById("rulesLink");
  var howToLink = document.getElementById("howToLink");
  var gameLink = document.getElementById("gameLink");
  var feedbackLink = document.getElementById("feedbackLink");
  var argEssayLink = document.getElementById("argEssayLink");

  navButton.onclick = function() {
    if (navButtonClicked == false) {
      rules.style.width = "85.9%"; //used to be 86.1%
      howTo.style.width = "85.9%";
      game.style.width = "85.9%";
      argEssay.style.width = "85.9%";
      form.style.width = "85.9%";
      navbar.style.display = "block";
      bar1.style.display = "none";
      bar3.style.display = "none";
      navButtonClicked = true;
    }
    else {
      rules.style.width = "100%";
      howTo.style.width = "100%";
      argEssay.style.width = "100%";
      game.style.width = "100%";
      form.style.width = "100%";
      navbar.style.display = "none";
      bar1.style.display = "block";
      bar3.style.display = "block";
      navButtonClicked = false;
    }
    
  }

  rulesS.onclick = function() {
      rules.style.display = "block";
      howTo.style.display = "none";
      game.style.display = "none";
      form.style.display = "none";
      argEssay.style.display = "none";
  }
  howToS.onclick = function() {
      rules.style.display = "none";
      howTo.style.display = "block";
      game.style.display = "none";
      form.style.display = "none";
      argEssay.style.display = "none";
  }
  gameS.onclick = function() {
      rules.style.display = "none";
      howTo.style.display = "none";
      game.style.display = "block";
      form.style.display = "none";
      argEssay.style.display = "none";
  }
  fdbS.onclick = function() {
      rules.style.display = "none";
      howTo.style.display = "none";
      game.style.display = "none";
      form.style.display = "block";
      argEssay.style.display = "none";
  }
  argEssayS.onclick = function() {
      rules.style.display = "none";
      howTo.style.display = "none";
      game.style.display = "none";
      form.style.display = "none";
      argEssay.style.display = "block";
  }
  rulesLink.onclick = function() {
      rules.style.display = "block";
      howTo.style.display = "none";
      game.style.display = "none";
      form.style.display = "none";
      argEssay.style.display = "none";
  }
  howToLink.onclick = function() {
      rules.style.display = "none";
      howTo.style.display = "block";
      game.style.display = "none";
      form.style.display = "none";
      argEssay.style.display = "none";
  }
  gameLink.onclick = function() {
      rules.style.display = "none";
      howTo.style.display = "none";
      game.style.display = "block";
      form.style.display = "none";
      argEssay.style.display = "none";
  }
  feedbackLink.onclick = function() {
      rules.style.display = "none";
      howTo.style.display = "none";
      game.style.display = "none";
      form.style.display = "block";
      argEssay.style.display = "none";
  }
  argEssayLink.onclick = function() {
      rules.style.display = "none";
      howTo.style.display = "none";
      game.style.display = "none";
      form.style.display = "none";
      argEssay.style.display = "block";
  }

}