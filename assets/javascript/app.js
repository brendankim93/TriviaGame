$("#start").on('click', function(){
	game.start();
})

$(document).on('click', '#end', function(){
	game.done();
})

var questions = [{
	question: "What is the name of the male hero in Moana?",
	answers: ["Kawai","Oahu","Maui","Maho"],
	correctAnswer: "Maui"
}, {
	question: "How many children are in the family The Incredibles?",
	answers: ["2","3","4","5"],
	correctAnswer: "3"
}, {
	question: "What is the name of the baby Sea Turtle in Finding Nemo?",
	answers: ["Kurt","Squirt","Karl","Artie"],
	correctAnswer: "Squirt"
}, {
	question: "In IceAge, what kind of animal is Sid?",
	answers: ["Squirrel","Possum","Racoon","Sloth"],
	correctAnswer: "Sloth"
}, {
	question: "In Wreck it Ralph, what is the name of Ralph's opponent his video game?",
	answers: ["Felix","Adam","Isaac","Ralo"],
	correctAnswer: "Felix"
}, {
	question: "In Toy Story 3, what is the name of the bad guy?",
	answers: ["Lonzo","Lotso","Thotso","Fonso"],
	correctAnswer: "Lotso"
}, {
	question: "In UP, where does the grandpa and Russell fly the house to?",
	answers: ["Bahamas","Radiator Springs","Paradise Falls","Grand Canyon"],
	correctAnswer: "Paradise Falls"
}];


var  game = {
	  correct: 0,
	  incorrect: 0,
	  counter: 70,
	  countdown: function(){
	 	game.counter--;
	 	$("#counter").html(game.counter);
	 	if(game.counter<=0){
	 		console.log("Time is up!");
	 		game.done();
	 	}
	 },
	 start: function(){
	 timer = setInterval(game.countdown,1000);
	 $("#subwrapper").prepend('<h2>Time Remaining: <span id="counter">70</span> Seconds</h2>');
	 $("#start").remove();
		for(var i=0;i<questions.length;i++){
			$("#subwrapper").append('<h2>' + questions[i].question + '</h2>');
			for(var j=0;j<questions[i].answers.length;j++){
				$("#subwrapper").append("<input type='radio' name= 'question-"+i+"' value='"+questions[i].answers[j]+"'>" + questions[i].answers[j])
				}
			}
		$("#subwrapper").append('<br><br><button id="end">Finish</button>')
	 },
	 done: function(){
	 	$.each($("input[name='question-0']:checked"),function(){
	 		if($(this).val()==questions[0].correctAnswer){
	 			game.correct++;
	 		}
	 		else {
	 			game.incorrect++;
	 		}
	 	});	 
	 	$.each($("input[name='question-1']:checked"),function(){
	 		if($(this).val()==questions[1].correctAnswer){
	 			game.correct++;
	 		}
	 		else {
	 			game.incorrect++;
	 		}
	 	});	 
	 	$.each($("input[name='question-2']:checked"),function(){
	 		if($(this).val()==questions[2].correctAnswer){
	 			game.correct++;
	 		}
	 		else {
	 			game.incorrect++;
	 		}
	 	});	 
	 	$.each($("input[name='question-3']:checked"),function(){
	 		if($(this).val()==questions[3].correctAnswer){
	 			game.correct++;
	 		}	 
	 		else {
	 			game.incorrect++;
	 		}
	 	});	 
	 	$.each($("input[name='question-4']:checked"),function(){
	 		if($(this).val()==questions[4].correctAnswer){
	 			game.correct++;
	 		}
	 		else {
	 			game.incorrect++;
	 		}
	 	});	 
	 	$.each($("input[name='question-5']:checked"),function(){
	 		if($(this).val()==questions[5].correctAnswer){
	 			game.correct++;
	 		}
	 		else {
	 			game.incorrect++;
	 		}
	 	});	 
	 	$.each($("input[name='question-6']:checked"),function(){
	 		if($(this).val()==questions[6].correctAnswer){
	 			game.correct++;
	 		}
	 		else {
	 			game.incorrect++;
	 		}
	 	});
	 		this.result();	 	
	 	},
	 	result: function(){
	 		clearInterval(timer);
	 		$("#subwrapper h2").remove();
	 		$("#subwrapper").html("<h2>All Done</h2>");
	 		$("#subwrapper").append("<h3>Correct Answers: " + this.correct+ "</h3");
	 		$("#subwrapper").append("<h3>Incorrect Answers: " + this.incorrect+ "</h3");
	 		$("#subwrapper").append("<h3>Unanswered: " + (questions.length - (this.incorrect+this.correct))+"</h3>");
	 	}
	 }

