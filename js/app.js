$(function(){

//start button
	$('#startBtn').click(function(){
		$('#front, #gamePage').slideToggle();
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
});