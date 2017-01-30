$(function(){

	var answer = document.getElementById('answer');
	var colors = ["orange", "red"];
	var ans = "";
	var score = 0;

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
				//console.log("Right");
			}
			compareAnswer(ans, color);
		});
	}

	function getColor(){
		var rand = Math.floor(Math.random()*colors.length);
			if(colors[rand] === "orange"){
				answer.style.background = "orange";
				return "orange";
			}else if(colors[rand] === "red"){
				answer.style.background = "red";
			return "red";
		}
	}

	function compareAnswer(ans, color){
		console.log(ans,color);
		if(ans === color){
			console.log("You are right");
			score +=100;
			console.log(score);
		}else{
			alert("Game Over!");
			answer.style.display = "none";
		}

	}

	function myFunction() {
    	myVar = setInterval(listenForKeyPress, 3000);
	}

});