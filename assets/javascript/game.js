$(document).ready(function(){

	var wins = 0;
	var loses = 0;
	var counter = 0;
	var yourGuess = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

	// add random number to #randomNumber
	var randomNumber = Math.floor((Math.random() * 100) + 19);
		$("#randomNumber").append(randomNumber);
	var darkBlueNumber = yourGuess[Math.floor(Math.random() * yourGuess.length)];
	var hotPinkNumber = yourGuess[Math.floor(Math.random() * yourGuess.length)];
	var lightBlueNumber = yourGuess[Math.floor(Math.random() * yourGuess.length)];
	var lightPinkNumber = yourGuess[Math.floor(Math.random() * yourGuess.length)];



	// on click dark blue adds random number from yourGuess
		$(".darkBlue").on("click", function(){
				counter = $(this).attr("value");
			$("#yourScore").append(darkBlueNumber);
			console.log(darkBlueNumber);
		
	});	
	// on click hot pink adds random number from yourGuess
		$(".hotPink").on("click", function(){
			counter = $(this).attr("value");
			$("#yourScore").append(hotPinkNumber);
			console.log(hotPinkNumber);

	});
	// on click light blue adds random number from yourGuess
		$(".lightBlue").on("click", function(){
			counter = $(this).attr("value");
			$("#yourScore").append(lightBlueNumber);
			console.log(lightBlueNumber);
		
	});
	// on click light pink adds random number from yourGuess
		$(".lightPink").on("click", function(){
			counter = $(this).attr("value");
			$("#yourScore").append(lightPinkNumber);
			console.log(lightPinkNumber);
	
	});
		if (counter == randomNumber){
               wins = +1;
               $("#wins").html(wins);
            }

            // If the numbers did not match. You also let them know
            else {
                loses = +1;
                $("#loses").html(loses);
            }            


	

});

