var currentQuestionNo = 0;
var counter = 0;
var rightAnswerPoints = 1;
var currentQuestion;

var questions = [
  {
    "id":"1",
    "question" : "Wie heißt die Roboterart, die mit Menschen interagiert?",
    "answers" : {
      "A":"Coopbot",
      "B":"Robot",
      "C":"Cobot",
      "D":"Servebot"
    }, 
    "right":"C"
  },{
    "id":"2",
    "question" : "Was teilen sich Cobot und Mensch?",
    "answers" : {
      "A":"Arbeitsraum",
      "B":"Werkzeug",
      "C":"Essen",
      "D":"Sitzplatz"
    }, 
    "right":"A"
  },{
    "id":"3",
    "question" : "Wie überwacht ein Cobot Kollision?",
    "answers" : {
      "A":"Widerstandssensor",
      "B":"Beschleunigungssensor",
      "C":"Drucksensor",
      "D":"Drehmomentsensor"
    }, 
    "right":"D"
  },{
    "id":"4",
    "question" : "Was ist ein eigenständig arbeitender Roboter?",
    "answers" : {
      "A":"effizient",
      "B":"autonom",
      "C":"praktisch",
      "D":"automatisch"
    }, 
    "right":"B"
  },{
    "id":"5",
    "question" : "Worüber bedient man einen Roboter?",
    "answers" : {
      "A":"Rechenschieber",
      "B":"Handy",
      "C":"Tablet",
      "D":"Computer"
    }, 
    "right":"C"
  },{
    "id":"6",
    "question" : "Über welche Kabelart verbindet man eine Kamera mit dem Roboter?",
    "answers" : {
      "A":"DVI",
      "B":"IO-Link",
      "C":"USB",
      "D":"Ethernet"
    }, 
    "right":"D"
  },{
    "id":"7",
    "question" : "Wie heißt der Fachbegriff für das Werkzeug des Roboters?",
    "answers" : {
      "A":"Werkzeug",
      "B":"Effektor",
      "C":"Greifer",
      "D":"Zeiger"
    }, 
    "right":"B"
  },{
    "id":"8",
    "question" : "Wie nennt man den vordersten Punkt des Roboterarms?",
    "answers" : {
      "A":"ICE",
      "B":"ICP",
      "C":"TCP",
      "D":"UCP"
    }, 
    "right":"C"
  },{
    "id":"9",
    "question" : "Wie berechnet man den TCP?",
    "answers" : {
      "A":"Vorwärtstransformation",
      "B":"Transformationsmatrix",
      "C":"Rückwärtstransformation",
      "D":"Rotationsmatrix"
    }, 
    "right":"A"
  },{
    "id":"10",
    "question" : "Was besagt das 1. Asimov-Gesetz?",
    "answers" : {
      "A":"Der Roboter darf Mensch nicht verletzen",
      "B":"Der Roboter muss sich selbst schützen",
      "C":"Der Roboter muss Menschen gehorchen",
      "D":"Der Roboter darf nicht bremsen"
    }, 
    "right":"A"
  },{
    "id":"11",
    "question" : "Wie nennt man es, wenn der TCP nicht direkt über den Wegpunkt fährt?",
    "answers" : {
      "A":"Halbschleifen",
      "B":"Unterschleifen",
      "C":"Schleifung",
      "D":"Überschleifen"
    }, 
    "right":"D"
  },{
    "id":"12",
    "question" : "Welche Bewegung macht der TCP beim Überschleifen?",
    "answers" : {
      "A":"eine Gerade",
      "B":"eine Ellipse",
      "C":"eine Kreisbahn",
      "D":"eine Tangente"
    }, 
    "right":"C"
  },{
    "id":"13",
    "question" : "Wofür wird Überschleifen verwendet?",
    "answers" : {
      "A":"Fehlerbehebung",
      "B":"Prozessoptimierung",
      "C":"Kollisionsverhinderung",
      "D":""
    }, 
    "right":"B"
  },{
    "id":"14",
    "question" : "Das Wort 'Roboter' kommt aus dem Tschechischen - robota - Was heißt es?",
    "answers" : {
      "A":"Erleichterung",
      "B":"Hilfe",
      "C":"Arbeit",
      "D":"Sklave"
    }, 
    "right":"C"
  }
];


function showNextQuestion() {
  $(".answer").removeClass("btn-primary btn-danger btn-success btn-default");
  $(".answer").addClass("btn-default");
  if (currentQuestionNo >= questions.length) {
    showEnd();
    currentQuestionNo = 0;
  }
  console.log("Loading Question:" + currentQuestionNo);
  currentQuestion = questions[currentQuestionNo];

  <!-- jquery mittels IDs abfrage und setzen (startnummer ist 0!) -->
  $("#qno").text(currentQuestionNo + 1);
  $("#question_text").text(currentQuestion.question);
  $("#answer_a").text(currentQuestion.answers.A);
  $("#answer_b").text(currentQuestion.answers.B);
  $("#answer_c").text(currentQuestion.answers.C);
  $("#answer_d").text(currentQuestion.answers.D); 
}

<!-- richtigkeitsabfrage -->
function getRightAnswer() {
  return currentQuestion.right;
}