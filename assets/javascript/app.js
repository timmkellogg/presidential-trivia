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
		question: 'Who was the only President to serve more than two terms?',
		answers: ['Franklin D. Roosevelt', 'Ulysses S. Grant', 'George Washington', 'Theodore Roosevelt'],
		answerPosition: '#answer-1',
		correctAnswer: 'Franklin D. Roosevelt',
		funFact: 'Franklin D. Roosevelt served as President for over 12 years, the longest time in office. He is the \
				  only president to serve more than two terms; he died shortly into his fourth term in 1945.'
	},
	{
		question: 'Who was the oldest elected President?',
		answers: ['Dwight D. Eisenhower', 'James Buchanan', 'Donald Trump', 'Ronald Reagan'],
		answerPosition: '#answer-3',
		correctAnswer: 'Donald Trump',
		funFact: 'Donald Trump was 70 years and 7 months old when he was inaugurated on January 20, 2017.'
	},
	{
		question: 'Who was the first President to live in the White House?',
		answers: ['Thomas Jefferson', 'George Washington', 'Andrew Jackson', 'John Adams'],
		answerPosition: '#answer-4',
		correctAnswer: 'John Adams',
		funFact: 'On Saturday, November 1, 1800, John Adams became the first president to take residence in the White House.'
	},
	{
		question: 'Who was the first President born outside the contiguous United States?',
		answers: ['Franklin Pierce', 'Benjamin Harrison', 'Barack Obama', 'William Howard Taft'],
		answerPosition: '#answer-3',
		correctAnswer: 'Barack Obama',
		funFact: 'Barack Obama was born in Honolulu, Hawaii, to Stanley Ann Dunham, an American of predominantly \
				  English descent from Wichita, Kansas, and Barack Obama, Sr., a Luo from Nyang\'oma Kogelo, Nyanza \
				  Providence, Kenya Colony. Obama is the first president to have been born in Hawaii.'
	},
	{
		question: 'Who was the only President to serve two non-consecutive terms?',
		answers: ['Woodrow Wilson', 'Ronald Reagan', 'Theodore Roosevelt', 'Grover Cleveland'],
		answerPosition: '#answer-4',
		correctAnswer: 'Grover Cleveland',
		funFact: 'Grover Cleveland served two non-consecutive terms and is counted chronologically as both the \
				  twenty-second and the twenty-fourth president.'
	},
	{
		question: 'Walt Whitman\'s poem "Oh Captain, My Captain" was written about which President?',
		answers: ['Abraham Lincoln', 'Theodore Roosevelt', 'George Washington', 'Ulysses S. Grant'],
		answerPosition: '#answer-1',
		correctAnswer: 'Abraham Lincoln',
		funFact: '"O Captain! My Captain!" is a poem written in 1865 by Walt Whitman, concerning the death of \
				  American president Abraham Lincoln.'
	},
	{
		question: 'Which U.S. President signed the treaty to purchase Alaska from Russia?',
		answers: ['Andrew Johnson', 'James Buchanan', 'Ulysses S. Grant', 'Andrew Jackson'],
		answerPosition: '#answer-1',
		correctAnswer: 'Andrew Johnson',
		funFact: 'The purchase of Alaska from the Russian Empire in 1867 is considered Andrew Johnson\'s most important foreign \
				  policy action. The idea and implementation is credited to Secretary of State William Seward who dubbed the \
				  purchase Seward\'s Folly.'
	},
	{
		question: 'Who was the first President to appear on TV?',
		answers: ['Harry S. Truman', 'Franklin D. Roosevelt', 'John F. Kennedy', 'Dwight D. Eisenhower'],
		answerPosition: '#answer-2',
		correctAnswer: 'Franklin D. Roosevelt',
		funFact: 'The first President to appear on black and white television was Franklin D. Roosevelt on April 30, 1939 at \
				  the opening ceremonies for the World\'s Fair.'
	},
	{
		question: 'Who was the first President to be impeached?',
		answers: ['Bill Clinton', 'Calvin Coolidge', 'Richard Nixon', 'Andrew Johnson'],
		answerPosition: '#answer-4',
		correctAnswer: 'Andrew Johnson',
		funFact: 'Johnson was impeached on February 24, 1868 in the U.S. House of Representatives on eleven articles of \
				  impeachment detailing his "high crimes and misdemeanors", in accordance with Article Two of the United \
				  States Constitution.'
	},
	{
		question: 'Who was the only unanimously elected President by the Electoral College?',
		answers: ['Ronald Reagan', 'John F. Kennedy', 'George Washington', 'Franklin D Roosevelt'],
		answerPosition: '#answer-3',
		correctAnswer: 'George Washington',
		funFact: 'George Washington was unanimously elected by the Electoral College in 1789, and again in the 1792 \
				  election; he remains the only president to have received 100% of the electoral votes. James Monroe, \
				  the fifth President, received every Electoral College vote except one. A New Hampshire delegate wanted \
				  to preserve the legacy of George Washington.'
	}
]
var questionCounter = 0;
var wins = 0;
var losses = 0;
var notAnswered = 0;

var endGame = function(){
	$('.wins').text(wins);
	$('.losses').text(losses);
	$('.not-answered').text(notAnswered);
	$('.main-content').addClass('hidden');
	$('.scorescreen').removeClass('hidden');
}

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
	secondsLeft = 31;
	intervalId = setInterval(decrementThirty, 1000);
}

var runGame = function(){
	setQuestion();
	questionTimer();
	
	$('.funFact').text("");
	$('.answer').removeClass('right-answer').removeClass('wrong-answer');
	$('.answer').prop('disabled', false); 
}

var postTimer = function(){
	secondsLeft = 6;
	intervalId = setInterval(decrementFive, 1000);
}

var decrementThirty = function(){
	secondsLeft--; 

	$('.timer').text(secondsLeft);
	if(secondsLeft === 0){
		stop();
		notAnswered++;
		
		$(questionArray[questionCounter].answerPosition).addClass('right-answer').removeClass('wrong-answer');

		$('.answer').prop('disabled', true);

		$('.timer').text('Outta Time!');
		postTimer();
	}
}

var decrementFive = function(){
	secondsLeft--;

	$('.timer').text(secondsLeft);
	if(secondsLeft === 0){
		stop();

		questionCounter++;
		if((questionCounter + 1) > questionArray.length){
			endGame();
		}

		else{
			runGame();
		}
	}
}

// Removes splash screen, runs startGame function
$('#splash').on('click', function(){
	$('#splash').addClass('hidden');
	$('.main-content').removeClass('hidden');
	runGame();
})

//Adds to wins/losses based on selected answer.
$('.answer').on('click', function(){
	$('.answer').prop('disabled', true);
	stop();
	postTimer();

	if (this.innerHTML !== questionArray[questionCounter].correctAnswer){
		$(this).addClass('wrong-answer');
		losses++;
	}

	if (this.innerHTML === questionArray[questionCounter].correctAnswer){
		wins++;
	}

	$(questionArray[questionCounter].answerPosition).addClass('right-answer').removeClass('wrong-answer');

	$('.funFact').text(questionArray[questionCounter].funFact);
})

//Resets values and restarts game
$('.replay').on('click', function(){  
	questionCounter = 0;
	wins = 0;
	losses = 0;
	notAnswered = 0;

	$('.scorescreen').addClass('hidden');
	$('.main-content').removeClass('hidden');
	runGame();
})