function startTimer (duration, display){
	var timer=duration,minute,seconds;
	setInterval(function(){
		minutes=parseInt(timer/60,10);
		seconds=parseInt(timer % 60,10);
		minutes = minutes <10? "0" + minutes : minutes;
		seconds = seconds <10? "0" + seconds : seconds;
		display.textContent = minutes + ":" + seconds;
		if (--timer<0){
			timer =duration;
		}
	},1000);
	}
window.onload=function(){
	var fiveMinutes = 60 * 5,
	display = document.querySelector('#time');
	startTimer(fiveMinutes,display);
};

function submitQuiz() {
		console.log('submitted');

	
		function answerScore (qName) {
			var radiosNo = document.getElementsByName(qName);

			for (var i = 0, length = radiosNo.length; i < length; i++) {
   				if (radiosNo[i].checked) {
			
					var answerValue = Number(radiosNo[i].value);
				}
			}
		
			if (isNaN(answerValue)) {
				answerValue = 0;
			}
			return answerValue;
		}

		var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4'));
		console.log("CalcScore: " + calcScore); 


		function correctAnswer (correctStringNo, qNumber) {
			console.log("qNumber: " + qNumber);  
			return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
				(document.getElementById(correctStringNo).innerHTML) + "</strong>");
			}


		if (answerScore('q1') === 0) {
			document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
		}
		if (answerScore('q2') === 0) {
			document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
		}
		if (answerScore('q3') === 0) {
			document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
		}
		if (answerScore('q4') === 0) {
			document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
		}


		var questionCountArray = document.getElementsByClassName('question');

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}


		var showScore = "Your Score: " + calcScore +"/" + questionCounter;
	
		if (calcScore === questionCounter) {
			showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
		};
		document.getElementById('userScore').innerHTML = showScore;
	}

$(document).ready(function() {

	$('#submitButton').click(function() {
		$(this).addClass('hide');
	});

});