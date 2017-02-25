function Crystal(color, min, max){
	this.color = color;
	this.min = min;
	this.max = max;
	this.value = function(){
		return Math.floor(Math.random() * this.max) + this.min;
  };
}
	
var crystalsGame = {

  mainNumber: 0,

  wins: 0,
  
  losses: 0,
  
  gemsArray: [],
  
  scoreCount: null,
  
  hiddenNumber: 0,


  start: function(){
	
  //generate random number from 19-120
  this.mainNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	
  console.log("this is the main number:" + this.mainNumber);

	//display it on screen in random number box
	$("#random-number-box").html("<p>" + this.mainNumber + "</p>");	

	//set total score 
	this.scoreCount = null || 0;

	//display total score
	$("#total-score").html(this.scoreCount);	
			
	//display wins

	//starts at 0
	$("#wins").html(this.wins);

	//display losses

	//starts at 0
	$("#losses").html(this.losses);
	},


	restart: function(){
		this.mainNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		return this.mainNumber;

	},

	///when user clicks on gem 1

};

	var firstCrystal = new Crystal("blue", 1, 12);
	var firstCrystalValue = firstCrystal.value();
	console.log("The value of the first crystal is " + firstCrystalValue);
	
	
	var secondCrystal = new Crystal("pink", 1, 12);
	var secondCrystalValue = secondCrystal.value();
	console.log("The value of the second crystal is " + secondCrystalValue);
	
	var thirdCrystal = new Crystal("purple", 1, 12);
	var thirdCrystalValue = thirdCrystal.value();
	console.log("The value of the third crystal is " + thirdCrystalValue);
	
	var fourthCrystal = new Crystal("green", 1, 12);
	var fourthCrystalValue = fourthCrystal.value();
	console.log("The value of the fourth crystal is " + fourthCrystalValue);
	
	

crystalsGame.start();

var testArr = [];
var sum = 0;

for(var i = 0; i < testArr.length; i++){

  sum += testArr[i]

}

$("#crystal-1").on("click", function(){
	console.log(crystalsGame.scoreCount += firstCrystalValue);
	$("#total-score").html(crystalsGame.scoreCount);
	testArr.push(firstCrystalValue);
	console.log(testArr);
	console.log("1 total score? " + crystalsGame.scoreCount)
	compare();
		});

$("#crystal-2").on("click", function(){
	console.log(crystalsGame.scoreCount += secondCrystalValue);
	$("#total-score").html(crystalsGame.scoreCount);
	testArr.push(secondCrystalValue);
		console.log(testArr);
		console.log("2 total score? " + crystalsGame.scoreCount)
compare();

	});

$("#crystal-3").on("click", function(){

	console.log(crystalsGame.scoreCount += thirdCrystalValue);
	$("#total-score").html(crystalsGame.scoreCount);
	testArr.push(thirdCrystalValue);
		console.log(testArr);
		console.log("3 total score? " + crystalsGame.scoreCount)
compare();

	});

$("#crystal-4").on("click", function(){
	console.log(crystalsGame.scoreCount += fourthCrystalValue);
	$("#total-score").html(crystalsGame.scoreCount);
	testArr.push(fourthCrystalValue);
		console.log(testArr);
		console.log("4 total score? " + crystalsGame.scoreCount)
	compare();
});

function compare(){
	if(crystalsGame.scoreCount > crystalsGame.mainNumber){
		
		$("#losses").html(crystalsGame.losses + 1);
		$("#win-or-lose").html("You lose!");
		crystalsGame.restart();

		console.log("total score: " + crystalsGame.scoreCount)
		console.log("main number: " + crystalsGame.mainNumber)
	} else if(crystalsGame.scoreCount === crystalsGame.mainNumber){
		
		$("#wins").html(crystalsGame.wins + 1);	
		$("#win-or-lose").text("You win!");
		crystalsGame.restart();

}

	}

	// stuck on how to reset game when win or loss happens




	


///if total score is equal to random number

		//message says "you win"

		//wins score goes up by one

		//total score is reset to 0

		//random number is regenerated

		//each gem regenerates random numbers
