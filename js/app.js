$(function(){
	//VARIABLES
	var answer = document.getElementById('answer');
	var textAns = document.getElementById('textAns');
	var colorText = ["GREEN","YELLOW","LEFT", "RIGHT"]
	var colors = ["green", "yellow"];
	var ans = "";
	var score = 0;
	var colorInterval;
	var easy = 3;
	var clockEnd;
	var colorId;
	var colorId2;
	var player1 = 0;
	var player2 = 0;
	var index = 1;
	var scoreBoard = document.getElementById('colors2');

	/** 
	* Player 1 Button
	*/
	$('#startBtn').on('click', function(){
		$('#front, #gamePage').slideToggle();	
      	listenForKeyPress();
      	resetScore();
	});

	$('#back').click(function(){
		for(var i=1; i>0; i++){
		$('#front, #gamePage').slideToggle();
		var li = document.createElement("li");
			li.innerHTML = "player " + i + "score: "+ player1;
			colors2.appendChild(li);
		resetScore();
		}
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

	// function listenForKeyPress2(){
	// 	var color = getColor2();
	// 	//var rand = Math.floor(Math.random()*colorText.length);
	// 	$(document).one("keydown", function(event){
	// 		if(event.keyCode === 37){
	// 			ans = "green";
	// 			stopColor();
	// 			stopTimer();
	// 			//easy = 3;
	// 		}else if(event.keyCode === 39){
	// 			ans = "yellow";
	// 			stopColor();
	// 			stopTimer();
	// 			//easy = 3;
	// 		}
	// 		//textAns.innerHTML = colorText[rand];
	// 		hardMode();
	// 		compareAnswer2(ans, color);
	// 	});
	// }


	//Generate random color between orange and red
	function getColor(){
		var rand = Math.floor(Math.random()*colors.length);
			if(colors[rand] === "green"){
				//$(answer).css('background-color','orange');
				$(answer).css('background-color','#63ffb1')
				move();
				colorTimer();
				return "green";
			}else if(colors[rand] === "yellow"){
				//$(answer).css('background-color','red');
				$(answer).css('background-color','#ffff91');
				move();
				colorTimer();
				return "yellow";
		}
	}

	//Generate random color between orange and red
	// function getColor2(){
	// 	var rand = Math.floor(Math.random()*colors.length);
	// 		if(colors[rand] === "green"){
	// 			$(answer2).css('background-color','#63ffb1')
	// 			move();
	// 			colorTimer();
	// 			return "green";
	// 		}else if(colors[rand] === "yellow"){
	// 			$(answer2).css('background-color','#ffff91');
	// 			move();
	// 			colorTimer();
	// 			return "yellow";
	// 	}
	// }

	//compare answer
	function compareAnswer(ansr, color){
		var spanScore = document.getElementById('spanScore');
		console.log(easy);
		if(ansr !== color || easy === 0 ){
			console.log(easy);
			console.log("Game over");
			//$(answer).css('display','none');
			alert("game over");	
		}else if(ansr === color){
			//console.log(easy);
			console.log("You are right");
			player1 +=100;

			if(player1 <=1000){
			easy =3 ;
			}else if(player1 >1000){
				easy =2;
			}
			console.log(easy);
			spanScore.innerHTML = player1;
			listenForKeyPress();
			start();
		}
	}

	// function compareAnswer2(ans, color){
	// 	var spanScore2 = document.getElementById('spanScore2');
	// 	console.log(easy);
	// 	if(ans !== color || easy === 0 ){
	// 		console.log(easy);
	// 		console.log("Game over");
	// 		//$(answer).css('display','none');
	// 		alert("game over");	
	// 	}else if(ans === color){
	// 		//console.log(easy);
	// 		console.log("You are right");
	// 		player2 +=100;

	// 		if(player2 <=1000){
	// 		easy =3 ;
	// 		}else if(player2 >1000){
	// 			easy =2;
	// 		}
	// 		console.log(easy);
	// 		spanScore2.innerHTML = player2;
	// 		listenForKeyPress2();
	// 		start();
	// 	}
	// }


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

  		if(player1 <= 1000){
  		colorId = setInterval(change, 30);
  		}else if(player1 > 1000){
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
		if(player1 >= 1100){
			var rand = Math.floor(Math.random()*colorText.length);
			textAns.innerHTML = colorText[rand];
		}else if(player1 >=2000){
			$('#answer').css('opacity') = '0.6';
		}
	}

	function resetScore(){
		player1 = 0;
		console.log(player1);
		spanScore.innerHTML = player1;
	}
	//add another page for player 2
});









