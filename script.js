/*variable for the questions*/
let questions = [
    {
        "question":"What is the name of the founder of HTML?", 
        "answer_1":"Bruce Lee",
        "answer_2":"James T. Kirk",
        "answer_3":"Tim Berners-Lee",
        "answer_4":"Justin Bieber",
        "rightAnswer":"answer_3",
    },
    {
        "question":"What is the name of the founder of CSS?", 
        "answer_1":"Brain Kernighan",
        "answer_2":"Bjarne Stroustrup",
        "answer_3":"Håkon Wium Lie",
        "answer_4":"Chris Lattner",
        "rightAnswer":"answer_3",
    },
    {
        "question":"What is the name of the founder of JavaScript?", 
        "answer_1":"Brendan Eich",
        "answer_2":"Guido van Rossum",
        "answer_3":"Dennis Ritchie",
        "answer_4":"Bjarne Stroustrup",
        "rightAnswer":"answer_1",
    },
    {
        "question":"What is the name of the founder of Python?",
        "answer_1":"Guido van Rossum",
        "answer_2":"Bjarne Stroustrup",
        "answer_3":"Dennis Ritchie",
        "answer_4":"Brendan Eich",
        "rightAnswer":"answer_1",
    },
];
/*variable for the current question*/
let currentQuestion = 0;


/*function for load the question*/
function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();

}


/*function for show the question*/
function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];/*show the question*/
    document.getElementById('answer_1').innerHTML = question['answer_1'];/*show the answer 1*/
    document.getElementById('answer_2').innerHTML = question['answer_2'];/*show the answer 2*/
    document.getElementById('answer_3').innerHTML = question['answer_3'];/*show the answer 3*/
    document.getElementById('answer_4').innerHTML = question['answer_4'];/*show the answer 4*/
}


/*function for select the answer*/
function answer(selection) {
    let question = questions[currentQuestion];
    console.log('Correct answer is ', question['rightAnswer']);

    let idOfRightAnswer = question['rightAnswer'];

    if (selection == question['rightAnswer']) {
        console.log('Correct answer');
        document.getElementById(selection).parentElement.classList.add('bg-success');
        document.getElementById(selection).parentElement.classList.remove('bg-danger');
    } else {
        console.log('Wrong answer');
        document.getElementById(selection).parentElement.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentElement.classList.add('bg-success');
    }

    document.getElementById('next').disabled = false;


    
  /*  if (selectedQuestionNumber == question['rightAnswer']) {
        console.log('Correct answer');
    } else {
        console.log('Wrong answer');
    }*/
}