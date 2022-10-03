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

let currentQuestion = 0;



function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();

}



function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}



function answer(selection) {
    let questionon = questions[currentQuestion];
    console.log('Selection answer is ', selection)
    const selectedQuestionNumber = selection.split(-1);
    console.log('Selected question number is ', selectedQuestionNumber)
    console.log('Correct question is ', questionon['rightAnswer']);
    
    let idOfSelectedQuestion = 'aswer_${questionon['rightAnswer']}';

    if (selectedQuestionNumber == questionon['rightAnswer']) {
        console.log('Correct answer');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        console.log('Wrong answer');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfSelectedQuestion).parentNode.classList.add('bg-success');
    }
}