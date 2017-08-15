/*
Click to start (removes div)

Start timer, display question and answers

On click or timeout, highlight correct answer green
If clicked answer is incorrect, highlight red
log wins/losses
wait 5 seconds
New question

If no more questions, show score screen, click to play again

*/ 
var questionArray = [
	{
		name: 'sample',
		question: 'Which number is greatest?',
		answers: ['4', '10', '7', '2'],
		correctAnswer: '#answer-2' //answers-2
	},
	{
		name: 'sample2',
		question: 'this is the question too?',
		answers: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
		correctAnswer: '#answer 3'
	}

]
var questionCounter = 0;

var secondsLeft = 5;

var stop = function(){
	 clearInterval(intervalId);
}



var setQuestion = function(){
	$('.question').text(questionArray[questionCounter].question);
	$('#answer-1').text(questionArray[questionCounter].answers[0]);
	$('#answer-2').text(questionArray[questionCounter].answers[1]);
	$('#answer-3').text(questionArray[questionCounter].answers[2]);
	$('#answer-4').text(questionArray[questionCounter].answers[3]);
}

var questionTimer = function(){
	console.log('!')
	secondsLeft = 5;
	console.log(secondsLeft);
	intervalId = setInterval(decrementThirty, 1000);
}

//end game function

var runGame = function(){
	setQuestion();
	questionTimer();
	//start taking input
}

var postTimer = function(){
	secondsLeft = 5;
	intervalId = setInterval(decrementFive, 1000);
}

var decrementThirty = function(){
	secondsLeft--; 

	$('.timer').text(secondsLeft);

	if(secondsLeft === 0){
		stop();
		$('.timer').text('Outta Time!');
		//stop taking input
		postTimer();

	}
}

var decrementFive = function(){
	secondsLeft--;


	if(secondsLeft === 0){
		stop();
		questionCounter++;
		if((questionCounter - 1) === questionArray.length){
			//end game
			$(questionArray.correctAnswer)
		}
		runGame();
	}
}



$('#splash').on('click', function(){ // Removes splash screen, runs startGame function
	$('#splash').addClass('hidden');
	$('.main-content').removeClass('hidden');
	runGame();
})

$('.answer').on('click', function(){

	//highlight correct answer
	//stop taking input
	for(var i = 0; i < questionArray[questionCounter].answers.length; i++){
		if(questionArray[questionCounter].answers[i] === questionArray[questionCounter].correctAnswer){
			//??
		}
	}

	if (this.innerHTML !== questionArray[questionCounter].correctAnswer){
		$(this).addClass('wrong-answer');
	
	}
	$(questionArray[questionCounter].correctAnswer).addClass('right-answer').removeClass('wrong-answer');
})