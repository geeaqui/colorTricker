$(function(){

//start button
	$('#startBtn').on('click', function(){
		$('#front, #gamePage').slideToggle();
		listenForKeyPress();
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





});