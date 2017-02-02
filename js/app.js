$(function(){
	/**
	* VARIABLES
	*/
	var answer = document.getElementById('answer');
	var textAns = document.getElementById('textAns');
	var scoreBoard = document.getElementById('colors2');
	var para2 = document.getElementById('gameOver');
	var colorText = ["GREEN","YELLOW","LEFT", "RIGHT"]
	var colors = ["green", "yellow"];
	var ans = "";
	var score = 0;
	var colorInterval;
	var easy = 2;
	var clockEnd;
	var colorId;
	var colorId2;
	var score = 0;
	var index = 1;
	var imageMove ;

	/** 
	* Player 1 Button
	*/
	$('#startBtn').on('click', function(){
		$('#front, #gamePage').slideToggle();
		var para = document.createElement("p");
		para.setAttribute("id", "ready")
		para.innerHTML = "GET READY!";
		para2.innerHTML = "";
		answer.appendChild(para);	
      	listenForKeyPress();
      	resetScore();
      	easy = 2;
      	imgMove();
	});

	$('#back').click(function(){
		$('#front, #gamePage').slideToggle();
		var li = document.createElement("li");
		li.innerHTML = "player " + (index++) + " score: "+ score;
		colors2.appendChild(li);
		resetScore();
		clearImageInt()
		$('#ready').remove();
	});


	/**
	*Player 2 Button
	*/
	$('#player2').on('click', function(){
		$('#front, #gamePage2').slideToggle();	
      	//listenForKeyPress2();
	});

	$('#back2').click(function(){
		$('#front, #gamePage2').slideToggle();
	});

	//instruction button
	$('#intBtn').click(function(){
		$('#front, #instrucPage').slideToggle();
		console.log("instruction");
		
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
				ans = "green";
				stopColor();
				stopTimer();
				//easy = 3;
			}else if(event.keyCode === 39){
				ans = "yellow";
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
			if(colors[rand] === "green"){
				$(answer).css('background-color','#63ffb1')
				move();
				colorTimer();
				return "green";
			}else if(colors[rand] === "yellow"){
				$(answer).css('background-color','#ffff91');
				move();
				colorTimer();
				return "yellow";
		}
	}

	//compare answer
	function compareAnswer(ansr, color){
		var spanScore = document.getElementById('spanScore');
		console.log(easy);
		if(ansr !== color || easy === 0 ){
			console.log(easy);
			textAns.innerHTML = "";
			para2.innerHTML = "Game Over!"	
		}else if(ansr === color){
			console.log("You are right");
			score +=100;

			if(score <=1000){
			easy =2 ;
			}else if(score >1000){
				easy =1;
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
  		colorId = setInterval(change, 20);
  		}else if(score > 1000){
  		colorId2 = setInterval(change, 10);
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


	/**
	* set an interval for function countdown that will run every 1second
	*/
	var start = function() {
  		clockEnd = setInterval(countdown, 1000);
	}

	/**
	* decrease the variable easy by 1
	*/
	var countdown = function() {
		if (easy > 0) {
    		easy = easy - 1;
    		console.log(easy);
      	}
	}

	/**
	* stop the interval of the varible clockend
	*/
	function stopTimer() {
    	clearInterval(clockEnd);
	}

	/**
	* stop the interval of the varible colorID and colorId2
	*/
	function stopColor() {
    	clearInterval(colorId);
    	clearInterval(colorId2);
	}
	
	/**
	*r Randomly display the list inside the array colorText when the condition is met
	*/
	function hardMode(){
		textAns.innerHTML = "";
		if(score >= 1100){
			var rand = Math.floor(Math.random()*colorText.length);
			textAns.innerHTML = colorText[rand];
		}else if(score >=2000){
			$('#answer').css('opacity') = '0.6';
		}
	}

	
	/**
	* Reset the score back to zero and print the prev score to the innerHTML of spanScore
	*/
	function resetScore(){
		score = 0;
		console.log(score);
		spanScore.innerHTML = score;
	}
	

	function imgMove(){
		setInterval(moveImage,2000);
	}

	function moveImage(){
		$('#ready').animate({top:"-800px"}, 2000);
	}

	function clearImageInt(){
		clearInterval(moveImage);
	}

	//add ready box that slides up within 3 sec before the game start

	//add a ready sound whenever start button is
});









