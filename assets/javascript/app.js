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
		correctAnswer: '10'
	},
	{
		name: 'sample2',
		question: 'this is the question too?',
		answers: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
		correctAnswer: 'answer 3'
	}

]
var questionCounter = 0;

var secondsLeft = 5;

var setQuestion = function(){
	$('.question').text(questionArray[questionCounter].question);
	$('#answer-1').text(questionArray[questionCounter].answers[0]);
	$('#answer-2').text(questionArray[questionCounter].answers[1]);
	$('#answer-3').text(questionArray[questionCounter].answers[2]);
	$('#answer-4').text(questionArray[questionCounter].answers[3]);
}

var questionTimer = function(){
	console.log('!')
	secondsleft = 5;
	intervalId = setInterval(decrementThirty, 1000);
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
		postTimer();

	}
}

var decrementFive = function(){
	secondsLeft--;


	if(secondsLeft === 0){
		stop();
		questionCounter++;
		runGame();
	}
}

var stop = function(){
	 clearInterval(intervalId);
}

var runGame = function(){
	setQuestion();
	questionTimer();
}

$('#splash').on('click', function(){ // Removes splash screen, runs startGame function
	$('#splash').addClass('hidden');
	$('.main-content').removeClass('hidden');
	runGame();
})

$('.answer').on('click', function(){
	if (this.innerHTML === questionArray[questionCounter].correctAnswer){
		$(this).addClass('right-answer');
	}
})