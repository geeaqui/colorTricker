$(function(){

var answer = document.getElementById('answer');
var colors = ["orange", "red"];
var score = 0;
//start button
	$('#startBtn').on('click', function(){
		$('#front, #gamePage').slideToggle();
		listenForKeyPress();
		getColor();
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
		document.addEventListener("keydown", function(event){
			if(event.keyCode === 37){
				console.log("Left");
			}else if(event.keyCode === 39){
				console.log("Right");
			}
			//console.log(event.keyCode);
		});
	}

function getColor(){
	var rand = Math.floor(Math.random()*colors.length);
		if(colors[rand] === "orange"){
			answer.style.background = "orange";
			console.log("I am orange");
		}else if(colors[rand] === "red"){
			answer.style.background = "red";
			console.log("I am red");
		}
}



});