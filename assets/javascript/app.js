


var score = 0;
var timerRunning = false;
var timeLeft;
var questionTime;
var incorrect = 0;
var i = 0;
var intervalId;







function startquiz() {
	console.log(i);

	//hide start button
	$("#startbtn").hide();
	$("#right").hide();
	$("#wrong").hide();



	//render question and show quizform
	$("#mainbody").show();

	//show and run timer
	// $("#timer").text("Time Remaining: " + timer.timeLeft + " Seconds");

	// timer.runTimer();

	renderQuestion();
	time();


	if (i >= 6) {

		clearInterval(intervalId);
		$("#startbtn").hide();
		$("#right").hide();
		$("#wrong").hide();
		$("#mainbody").hide();
		$("#results").show();
		results();
	}


}

function renderQuestion() {


	if (i >= 6) {

		clearInterval(intervalId);
		$("#startbtn").hide();
		$("#right").hide();
		$("#wrong").hide();
		$("#mainbody").hide();
		$("#results").show();
		results();

	}

	console.log(i);

	$("#question").text(quizArray[i].q);
	$("#answer1").text(quizArray[i].a[0]);
	$("#answer2").text(quizArray[i].b[0]);
	$("#answer3").text(quizArray[i].c[0]);
	$("#answer4").text(quizArray[i].d[0]);
	console.log(timer.timeLeft);

}

function time() {
	timer.timeLeft = 10;
	timer.runTimer();
}





//my timer object
var timer = {

	// timeLeft: 10,


	runTimer: function () {

		clearInterval(intervalId);
		intervalId = setInterval(timer.count, 1000);

	},

	count: function () {

		//   decrease time by 1, remember we cant use "this" here.
		timer.timeLeft--;
		// document.getElementById("timer").innerHTML = "Time Remaining: " + timer.timeLeft + " Seconds";
		$("#timer").text("Time Remaining: " + timer.timeLeft + " Seconds");

		// console.log(timer.timeLeft);


		if (timer.timeLeft == 0) {
			// alert("out of time");
			clearInterval(intervalId);
			wrong();
			return;
		}

	}

}



function checkSolution1() {
	if (quizArray[i].a[1] == true) {

		right();
	} else if (quizArray[i].a[1] == false) {

		wrong();
	}

}

function checkSolution2() {
	if (quizArray[i].b[1] == true) {

		right();

	} else if (quizArray[i].b[1] == false) {

		wrong();

	}

}

function checkSolution3() {
	if (quizArray[i].c[1] == true) {

		right();

	} else if (quizArray[i].c[1] == false) {

		wrong();

	}

}

function checkSolution4() {

	if (quizArray[i].d[1] == true) {

		right();

	} else if (quizArray[i].d[1] == false) {

		wrong();

	}

}








function backtostart() {
	score = 0;
	timerRunning = false;
	timeLeft;
	questionTime;
	incorrect = 0;
	i = 0;
	intervalId;
	$("#mainbody").hide();
	$("#results").hide();
	$("#startbtn").show();
	$("#right").hide();
	$("#wrong").hide();

}


function right() {
	score++;
	$("#mainbody").hide();
	$("#right").show();
	$("#wrong").hide();
	$("#results").hide();
	i++;
	clearInterval(intervalId);

	timer.timeLeft = 10;
	setTimeout(startquiz, 2000);
}

function wrong() {
	incorrect++;
	$("#mainbody").hide();
	$("#wrong").show();
	$("#right").hide();

	$("#results").hide();
	i++;
	clearInterval(intervalId);

	timer.timeLeft = 10;
	setTimeout(startquiz, 2000);



}




function results() {
	$("#score").text("You Answered " + score + " Questions Right!")
	$("#incorrect").text("You Answered " + incorrect + " Questions Wrong!")

}




// trying to input/load my questions and answers as an object so i can make cleaner, reusable code
var quizArray = [{

	q: "Which of the following is a moon of Saturn?",
	a: ["Io", false],
	b: ["Europa", false],
	c: ["Deimos", false],
	d: ["Titan", true]

},

{
	q: "Which of these is not a noble gas?",
	a: ["Hydrogen", true],
	b: ["Helium", false],
	c: ["Neon", false],
	d: ["Radon", false]
},

{
	q: "The colors of the the rainbow can be remembered by which acronym?",
	a: ["SCUBA", false],
	b: ["OMGWTFBBQ", false],
	c: ["ROYGBIV", true],
	d: ["NAFTA", false]
},

{
	q: "The distance between the earth and the sun is called ",
	a: ["parsec", false],
	b: ["light year", false],
	c: ["astronomical unit", true],
	d: ["megaparsec", false]
},

{
	q: "Approximately how long does it take light to travel from the Sun to the Earth?",
	a: ["3 hours", false],
	b: ["10 seconds", false],
	c: ["20 minutes", false],
	d: ["8 minutes", true]
},

{
	q: "Which of the following is not a logarithmic scale?",
	a: ["pH scale", false],
	b: ["Richter scale", false],
	c: ["weight scale", true],
	d: ["decibel scale", false]
}];






