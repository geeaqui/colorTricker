$(function(){

	var answer = document.getElementById('answer');
	var colors = ["orange", "red"];
	var ans = "";
	var score = 0;
	var colorInterval;

	//start button
	$('#startBtn').on('click', function(){
		$('#front, #gamePage').slideToggle();
		
			myFunction();
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
		$(document).one("keydown", function(event){
			if(event.keyCode === 37){
			ans = "orange";
			}else if(event.keyCode === 39){
				ans = "red";
			}
			compareAnswer(ans, color);
		});
	}

	//Generate random color between orange and red
	function getColor(){
		var rand = Math.floor(Math.random()*colors.length);
			if(colors[rand] === "orange"){
				$(answer).css('background-color','orange');
				move();
				return "orange";
			}else if(colors[rand] === "red"){
				$(answer).css('background-color','red');
				move();
			return "red";
		}
	}

	//compare answer
	function compareAnswer(ans, color){
		var spanScore = document.getElementById('spanScore');
		console.log(ans,color);
		if(ans === color){
			console.log("You are right");
			score +=100;
			spanScore.innerHTML = score;
		}else{
			console.log("Game over");
			//answer.style.display = "none";
			$(answer).css('display','none');
			alert("game over");
			removeInterval();
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
	//stop the game
	function removeInterval(){
			clearInterval(colorInterval);
	}

	//set game speed
	function myFunction() {
		 colorInterval = setInterval(listenForKeyPress, 3000);
	}
	//add set timeout if there is no answer
});









