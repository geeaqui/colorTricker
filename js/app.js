$(function(){

	var answer = document.getElementById('answer');
	var colors = ["orange", "red"];
	var ans = "";
	var score = 0;
	var status = true;

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
				//answer.style.background = "orange";
				$(answer).css('background-color','orange');
				return "orange";
			}else if(colors[rand] === "red"){
				//answer.style.background = "red";
				$(answer).css('background-color','red');
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
			status =true;
		}else{
			console.log("Game over");
			//answer.style.display = "none";
			$(answer).css('display','none');
			alert("game over");
			status = false;
		}

	}

	//set game speed
	function myFunction() {
		myVar = setInterval(listenForKeyPress, 3000);
	}

	//add set timeout if there is no answer
});









