$(function() {
  //Hauptfunktion
});

<!-- fadeIn fadeOut für übergang -->
<!-- ID-Aufruf durch "#name" -->
<!-- element-klassenaufruf durch ".name" -->
<!-- einfache fehlerabfrage durch console.log("...") -->
<!-- callback mit function(){..} für smoothen fadeout -->


<!-- start der einzelnen kapitel durch klick! -->
$(".startquiz").click(function() {
  $(".start_screen").fadeOut(function() {
    startQuiz();
  });
});
$(".chapter1_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter1();
  });
});
$(".chapter2_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter2();
  });
});
$(".chapter3_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter3();
  });
});
$(".chapter4_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter4();
  });
});
$(".chapter5_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter5();
  });
});
$(".chapter6_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter6();
  });
});
$(".chapter7_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter7();
  });
});
$(".chapter8_btn").click(function() {
  $(".start_screen").fadeOut(function() {
    startChapter8();
  });
});


function startChapter1(){
  $(".chapter_1").fadeIn();
}
function startChapter2(){
	$(".chapter_2").fadeIn();
}
function startChapter3(){
	$(".chapter_3").fadeIn();
}
function startChapter4(){
	$(".chapter_4").fadeIn();
}
function startChapter5(){
	$(".chapter_5").fadeIn();
}
function startChapter6(){
	$(".chapter_6").fadeIn();
}
function startChapter7(){
	$(".chapter_7").fadeIn();
}
function startChapter8(){
	$(".chapter_8").fadeIn();
}


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
  $(".quiz_end").fadeOut(function(){
  $(".start_screen").fadeIn();
  });
  counter = 0;
});

$(".restartchapter").click(function() {
  $(".startChapter1").fadeOut();
  $(".startChapter2").fadeOut();
  $(".startChapter3").fadeOut();
  $("#output_coord").fadeOut();
  $(".startChapter4").fadeOut();
  $(".startChapter5").fadeOut();
  $(".startChapter6").fadeOut();
  $(".startChapter7").fadeOut();
  $(".startChapter8").fadeOut();
  $(".chapter_8").fadeOut(function() {
  $(".chapter_4").fadeOut(function() {
	  $(".chapter_5").fadeOut(function() {
		  $(".chapter_6").fadeOut(function() {
			  $(".chapter_7").fadeOut(function() {
				$(".chapter_3").fadeOut(function() {
					$(".chapter_2").fadeOut(function() {
						$(".chapter_1").fadeOut(function() {
						$(".start_screen").fadeIn();
   });
 });
 });
  });
 });
});
 });
 });
});
