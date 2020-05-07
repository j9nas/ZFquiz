$(function() {
  //Hauptfunktion
});

<!-- fadeIn fadeOut für smoothen übergang -->
<!-- ID-Aufruf durch "#name" -->
<!-- element-klassenaufruf durch ".name" -->
<!--  -->
<!-- einfache fehlerabfrage durch console.log("...") -->

<!-- callback mit function(){..} in fadeout -->

$(".start").click(function() {
  console.log( "Start" );
  $(".quiz_start").fadeOut(function() {
    startQuiz();
  });
});


function startQuiz() {
  showNextQuestion();
  $("#question").fadeIn();
  $("#continue_btn").hide();
}

<!-- elemente hinzufügen und rausnehmen -->
function selectAnswer(id) {
  $(id).addClass("btn-primary");
  $(id).removeClass("btn-default");
}

function deselectAnswer(id) {
  $(id).addClass("btn-default");
  $(id).removeClass("btn-primary");
}



<!-- bei click antwort highlighten! -->
$("#answer_a_btn").click(function() {
  selectAnswer("#answer_a_btn");
  deselectAnswer("#answer_b_btn");
  deselectAnswer("#answer_c_btn");
  deselectAnswer("#answer_d_btn");
});

$("#answer_b_btn").click(function() {
  selectAnswer("#answer_b_btn");
  deselectAnswer("#answer_a_btn");
  deselectAnswer("#answer_c_btn");
  deselectAnswer("#answer_d_btn");
});

$("#answer_c_btn").click(function() {
  selectAnswer("#answer_c_btn");
  deselectAnswer("#answer_b_btn");
  deselectAnswer("#answer_a_btn");
  deselectAnswer("#answer_d_btn");
});

$("#answer_d_btn").click(function() {
  selectAnswer("#answer_d_btn");
  deselectAnswer("#answer_b_btn");
  deselectAnswer("#answer_c_btn");
  deselectAnswer("#answer_a_btn");
});




$("#answer_commit_btn").click(function() {
  validateAnswer();
});


function validateAnswer() {
  $("#answer_commit_btn").hide();
  var rightAnswer = getRightAnswer();
  var selectedAnswerId = $(".answer.btn-primary").attr("id");
  var selectedAnswer = $(".answer.btn-primary").text()[0];
  //var rightAnswerCheck = $(".answer.right").attr("id"); 

  $(".answer.btn-primary").removeClass("btn-primary");
  $(".answer.btn-default").removeClass("btn-default");

	<!-- richtige success grün und falsche danger rot antwort -->
  if (selectedAnswer == rightAnswer) {
     counter += rightAnswerPoints;
     $("#"+selectedAnswerId).addClass("btn-success");
  } else {
     $("#"+selectedAnswerId).addClass("btn-danger");
     if (rightAnswer == "A"){
	$("#answer_a_btn").addClass("btn-success");
     }else if (rightAnswer == "B"){
	$("#answer_b_btn").addClass("btn-success");
     }else if (rightAnswer == "C"){
	$("#answer_c_btn").addClass("btn-success");
     }else if (rightAnswer == "D"){
	$("#answer_d_btn").addClass("btn-success");
     }
 }
	<!-- weiterbutton einblenden -->
  $("#continue_btn").show();
}


	<!-- weiterbuttonCLICK nächste frage, button anzeige ändern -->
$("#continue_btn").click(function() {
  currentQuestionNo++;
  showNextQuestion();
  $("#continue_btn").hide();
  $("#answer_commit_btn").show();
});

	<!-- Ende anzeigen -->
function showEnd() {
    $("#endpoints").text(counter);
    $("#possiblepoints").text(rightAnswerPoints * questions.length);
    $("#question").fadeOut(function() {
    	$(".quiz_end").fadeIn();
  });
}

	<!-- element restart auf click startet das quiz wieder am start -->
$(".restart").click(function() {
  $(".quiz_end").fadeOut(function() {
    startQuiz();
  });
  counter = 0;
});
