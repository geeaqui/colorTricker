$(function(){
	//VARIABLES
	var answer = document.getElementById('answer');
	var textAns = document.getElementById('textAns');
	var colorText = ["RED","ORANGE","LEFT", "RIGHT"]
	var colors = ["orange", "red"];
	var ans = "";
	var score = 0;
	var colorInterval;
	var easy = 3;
	var clockEnd;
	var colorId;
	var colorId2;

	/** 
	* add function to the button id "startBtn"
	*/
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


	
	/** 
	* invoke the function getColor() and store it to the variable color
	* add an event listener that assigns value to to left and right arrow key
	*/
	function listenForKeyPress(){
		var color = getColor();
		//var rand = Math.floor(Math.random()*colorText.length);
		$(document).one("keydown", function(event){
			if(event.keyCode === 37){
				ans = "orange";
				stopColor();
				stopTimer();
				//easy = 3;
			}else if(event.keyCode === 39){
				ans = "red";
				stopColor();
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
		var rand = Math.floor(Math.random()*colors.length);
			if(colors[rand] === "orange"){
				//$(answer).css('background-color','orange');
				$(answer).css('background-color','#63ffb1')
				move();
				colorTimer();
				return "orange";
			}else if(colors[rand] === "red"){
				//$(answer).css('background-color','red');
				$(answer).css('background-color','#ffff91');
				move();
				colorTimer();
			return "red";
		}
	}

	//compare answer
	function compareAnswer(ans, color){
		var spanScore = document.getElementById('spanScore');
		console.log(easy);
		if(ans !== color || easy === 0 ){
			console.log(easy);
			console.log("Game over");
			$(answer).css('display','none');
			alert("game over");	
		}else if(ans === color){
			//console.log(easy);
			console.log("You are right");
			score +=100;

			if(score <=1000){
			easy =3 ;
			}else if(score >1000){
				easy =2;
				score+=200;
			}

			console.log(easy);
			spanScore.innerHTML = score;
			listenForKeyPress();
			start();
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

	/** 
	* animate a timer inside the html div ID 'timer'
	*/
	function colorTimer() {  
		var timer = document.getElementById('timer');
  		var width = 0;

  		if(score <= 1000){
  		colorId = setInterval(change, 30);
  		}else if(score > 1000){
  		colorId2 = setInterval(change, 20);
  		}

  		function change() {
    		if (width == 100) {
      			clearInterval(colorId );
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

	function stopColor() {
    	clearInterval(colorId);
    	clearInterval(colorId2);
	}
	
	function hardMode(){
		textAns.innerHTML = "";
		if(score >= 1100){
			var rand = Math.floor(Math.random()*colorText.length);
			textAns.innerHTML = colorText[rand];
		}else if(score >=2000){
			$('#answer').css('opacity') = '0.6';
		}
	}
});









