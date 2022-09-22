let questions = [
    {
        "question":"What is the name of the founder of HTML?", 
        "answer_1":"Bruce Lee",
        "answer_2":"James T. Kirk",
        "answer_3":"Tim Berners-Lee",
        "answer_4":"Justin Bieber",
        "rightAnswer":3,
    },
    {
        "question":"What is the name of the founder of CSS?", 
        "answer_1":"Brain Kernighan",
        "answer_2":"Bjarne Stroustrup",
        "answer_3":"Håkon Wium Lie",
        "answer_4":"Chris Lattner",
        "rightAnswer":3,
    },
    {
        "question":"What is the name of the founder of JavaScript?", 
        "answer_1":"Brendan Eich",
        "answer_2":"Guido van Rossum",
        "answer_3":"Dennis Ritchie",
        "answer_4":"Bjarne Stroustrup",
        "rightAnswer":1,
    },
    {
        "question":"What is the name of the founder of Python?",
        "answer_1":"Guido van Rossum",
        "answer_2":"Bjarne Stroustrup",
        "answer_3":"Dennis Ritchie",
        "answer_4":"Brendan Eich",
        "rightAnswer":1,
    },
];

function init() {
    document.getElementById("all-questions").innerHTML = questions.length;
}