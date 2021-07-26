const question = document.getElementById("question");

const choices = Array.from(document.getElementsByClassName('choice-text'));

console.log(choices);

let currentQuestion = ();
let acceptingOption = ();
let score = 0;
let questionCounter = 0;
let availableQuestions = ();