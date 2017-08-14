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
		question: 'this is the question?',
		answers: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
		correctAnswer: 'answer 2'
	},
	{
		name: 'sample2',
		question: 'this is the question too?',
		answers: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
		correctAnswer: 'answer 3'
	}

]
var secondsLeft = 0;
var intervalId;

var run = function(){
	intervalId = setInterval(decrement, 1000);
}

var decrement = function(){
	$('.timer').text(secondsLeft);

	if(secondsLeft === 0){
		stop();
	}
	secondsLeft--;
}

var stop = function(){
	clearInterval(intervalId);
}

var startGame = function(){
	for(var i=0; i < questionArray.length; i++){
		//remove highlight classes
		$('.question').text(questionArray[i].question);
		$('.answer-1').text(questionArray[i].answers[0]);
		$('.answer-2').text(questionArray[i].answers[1]);
		$('.answer-3').text(questionArray[i].answers[2]);
		$('.answer-4').text(questionArray[i].answers[3]);
		secondsLeft = 10;
		run();
		
		$('.answer-1').on('click', function(){
			if(this.text === questionArray[i].correctAnswer.text){
				//highlight green
				//wins++
				//set interval for 5 seconds
					//newQuestion
			}
		})

		if(secondsLeft === 0){
			$('.timer').text('test');
			//Show right answer
			//Show no answer selected
			//Wait 5 seconds
		}
	}
	//show score sreen
}

$('#splash').on('click', function(){ // Removes splash screen, runs startGame function
	$('#splash').addClass('hidden');
	$('.main-content').removeClass('hidden');
	startGame();
})