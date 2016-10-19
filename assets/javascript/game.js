$(document).ready(function(){
	var wins = 0;
	var loses = 0;
	var counter = 0;
	var yourGuess = [10, 5, 3, 1];

	// add random number to #randomNumber
	
	var randomNumber = Math.floor((Math.random() * 100) + 19);
	$("#randomNumber").append(randomNumber);
	
	var darkBlueNumber = 0;
	var hotPinkNumber = 0;
	var lightBlueNumber = 0;
	var lightPinkNumber = 0;
	function newGame(){
		randomNumber = Math.floor((Math.random() * 100) + 19);
		$("#randomNumber").empty();
		$("#randomNumber").append("Random Number: " + randomNumber);
		counter = 0;
		$("#yourScore").text("Your Score: " + counter);
	};


	function testScore(){
		console.log("test1");
		if (counter == randomNumber){
		  	alert("You Won!");
		  	wins++;
		  	$("#wins").text("wins: " + wins);
			newGame();

		 }else if (counter > randomNumber){
			alert("you lose!");
			loses++;
			$("#loses").text("Loses: " + loses);
			newGame();
		
		}

	};


	// on click dark blue adds random number from yourGuess
	// can put a $(".whateverThisIs")
	$(".darkBlue").on("click", function(){
			if (darkBlueNumber === 0){
				darkBlueNumber = yourGuess[Math.floor(Math.random()*yourGuess.length)];
				$(".darkBlue").val(darkBlueNumber);
			    
			}
		counter = counter + (darkBlueNumber);	
		$("#yourScore").text("Your Score: " + counter);
			testScore();
		
	});	
	// on click hot pink adds random number from yourGuess
	$(".hotPink").on("click", function(){
			if (hotPinkNumber === 0){
				hotPinkNumber = yourGuess[Math.floor(Math.random()*yourGuess.length)];
				$(".hotPink").val(hotPinkNumber);
			}
		counter = counter + (hotPinkNumber);	
		$("#yourScore").text("Your Score: " + counter);
			testScore();

	});
	// on click light blue adds random number from yourGuess
	$(".lightBlue").on("click", function(){
			if (lightBlueNumber === 0){
				lightBlueNumber = yourGuess[Math.floor(Math.random()*yourGuess.length)];
				$(".lightBlue").val(lightBlueNumber);
			}
		counter = counter + (lightBlueNumber);	
		$("#yourScore").text("Your Score: " + counter);
			testScore();
		
	});
	// on click light pink adds random number from yourGuess
	$(".lightPink").on("click", function(){
			if (lightPinkNumber === 0){
				lightPinkNumber = yourGuess[Math.floor(Math.random()*yourGuess.length)];
				$(".lightPink").val(lightPinkNumber);
			}
		counter = counter + (lightPinkNumber);	
		$("#yourScore").text("Your Score: " + counter);
		testScore();
	});


});




