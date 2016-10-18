$(document).ready(function(){

	var counter = 0;
	var crystalOne = 0;
	var crystalTwo = 0;
	var crystalThree = 0;
	var crystalFour = 0;
	var yourGuess = [10, 5, 3, 1];

	// add random number to #randomNumber
	var randomNumber = Math.floor((Math.random() * 100) + 19);
		$("#randomNumber").append(randomNumber);
	
	var darkBlueNumber;
	var hotPinkNumber;
	var lightBlueNumber;
	var lightPinkNumber;

	// on click dark blue adds random number from yourGuess
		$(".darkBlue").on("click", function(){
			if (crystalOne === 0){
				darkBlueNumber = yourGuess[Math.floor(Math.random()*yourGuess.length)];
				$(".darkBlue").val(darkBlueNumber);
			    console.log($(".darkBlue").val());
			    crystalOne = 1;
			}
		counter = counter + (darkBlueNumber);	
		$("#yourScore").text("Your Score: " + counter);
			console.log(counter);
		
	});	
	// on click hot pink adds random number from yourGuess
		$(".hotPink").on("click", function(){
			if (crystalTwo === 0){
				hotPinkNumber = yourGuess[Math.floor(Math.random()*yourGuess.length)];
				$(".hotPink").val(hotPinkNumber);
			    console.log($(".hotPink").val());
			    crystalTwo = 1;
			}
		counter = counter + (hotPinkNumber);	
		$("#yourScore").text("Your Score: " + counter);
			console.log(counter);

	});
	// on click light blue adds random number from yourGuess
		$(".lightBlue").on("click", function(){
			if (crystalThree === 0){
				lightBlueNumber = yourGuess[Math.floor(Math.random()*yourGuess.length)];
				$(".lightBlue").val(lightBlueNumber);
			    console.log($(".lightBlue").val());
			    crystalThree = 1;
			}
		counter = counter + (lightBlueNumber);	
		$("#yourScore").text("Your Score: " + counter);
			console.log(counter);
		
	});
	// on click light pink adds random number from yourGuess
		$(".lightPink").on("click", function(){
			if (crystalFour === 0){
				lightPinkNumber = yourGuess[Math.floor(Math.random()*yourGuess.length)];
				$(".lightPink").val(lightPinkNumber);
			    console.log($(".lightPink").val());
			    crystalFour = 1;
			}
		counter = counter + (lightPinkNumber);	
		$("#yourScore").text("Your Score: " + counter);
			console.log(counter);
	});
	
		if (counter === randomNumber){
		  alert("You Won!") && $("#win" + 1);
			}else{
				if (counter > randomNumber){
				alert("you lose!") && $("#lose" + 1);
			}
	}
});




