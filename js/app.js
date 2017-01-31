$(function(){

	var answer = document.getElementById('answer');
	var textAns = document.getElementById('textAns');
	// add more colors inside the array
	var colorText = ["ORANGE", "RED"]
	var colors = ["orange", "red"];
	var ans = "";
	var score = 0;
	var colorInterval;
	var easy = 3;
	var clockEnd;

	//start button
	$('#startBtn').on('click', function(){
		$('#front, #gamePage').slideToggle();	
      	listenForKeyPress();
			//listenForKeyPress();
	});

	$('#back').click(function(){
		$('#front, #gamePage').slideToggle();
	});


	//instruction button
	$('#intBtn').click(function(){
		$('#front, #instrucPage').slideToggle();
	});

	$('#mainMenu').click(function(){
		$('#front, #instrucPage').slideToggle();
	});


	//key event listener

	function listenForKeyPress(){
		var color = getColor();
		var rand = Math.floor(Math.random()*colorText.length);
		$(document).one("keydown", function(event){
			if(event.keyCode === 37){
				ans = "orange";
				stopTimer();
				//easy = 3;
			}else if(event.keyCode === 39){
				ans = "red";
				stopTimer();
				//easy = 3;
			}
			//textAns.innerHTML = colorText[rand];
			hardMode();
			compareAnswer(ans, color);
		});
	}

	//Generate random color between orange and red
	function getColor(){
		//start();
		var rand = Math.floor(Math.random()*colors.length);
			if(colors[rand] === "orange"){
				$(answer).css('background-color','orange');
				move();
				colorTimer();
				return "orange";
			}else if(colors[rand] === "red"){
				$(answer).css('background-color','red');
				move();
			return "red";
		}
	}

	//compare answer
	function compareAnswer(ans, color){
		start();
		var spanScore = document.getElementById('spanScore');
		console.log(easy);
		if(ans !== color || easy === 0 ){
			console.log(easy);
			console.log("Game over");
			$(answer).css('display','none');
			alert("game over");	
		}else if(ans === color){
			console.log(easy);
			console.log("You are right");
			score +=100;
			spanScore.innerHTML = score;
			listenForKeyPress();
			//removeInterval();
		}
	}

	//animating the background color of div id="answer"
	function move() {  
  		var width = 0;
  		var id = setInterval(frame, 10);
  		function frame() {
    		if (width == 35) {
      			clearInterval(id);
    		} else {
      			width++; 
      			answer.style.width = width + '%'; 
    		}
  		}
	}

	function colorTimer() {  
		var timer = document.getElementById('timer');
  		var width = 0;
  		var id = setInterval(change, 30);
  		function change() {
    		if (width == 100) {
      			clearInterval(id);
    		} else {
      			width++; 
      			timer.style.width = width + '%'; 
    		}
  		}
	}

	//add set timeout if there is no answer
	var start = function() {
  		clockEnd = setInterval(countdown, 1000);
	}

	var countdown = function() {
		if (easy > 0) {
    		easy = easy - 1;
    		console.log(easy);
      	}
	}

	function stopTimer() {
    	clearInterval(clockEnd);
	}

	function hardMode(){
		textAns.innerHTML = "";
		if(score >= 1500){
			var rand = Math.floor(Math.random()*colorText.length);
			textAns.innerHTML = colorText[rand];
		}
	}
});









