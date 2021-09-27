const chalk = require("chalk");
var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question(chalk.magenta("what is your name?"));
console.log(chalk.green("Hey", userName, "welcome to, Are you really a fan of Prison break? "));

function play(question, answer) {
    var userAnswer = readlineSync.question(chalk.cyan(question));
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log(chalk.green("right!"));
        score = score + 1;
    } else {
        console.log(chalk.red("wrong:("));
    }
    console.log("current score", score);
    console.log("------");
}
var questions = [{
    question: "what is the name of the jail in Prison break?",
    answer: "FOX STATE"
}, {
    question: "what was the job of michael before he went to jail? ",
    answer: "STRUCTURAL ENGINEER"
}, {
    question: "what is the name of the female lead in Prison Break? ",
    answer: "SARAH TANCREDI"
}, {
    question: "what is the name of the organisation that tries to kill lincoln burrows? ",
    answer: "THE COMPANY"
}, {
    question: "what was the name of the device they were looking for? ",
    answer: "SCYLLA"
}, {
    question: "what was the job of Sarah tancredi? ",
    answer: "DOCTOR"
}, {
    question: "whose hand did lincoln cut while escaping from prison? ",
    answer: "T-BAG"
}, {
    question: "who sacrifies himself by entering into a tunnel while trying to get SCYLLA? ",
    answer: "BRAD BELLICK"
}];
for (i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
}
console.log(chalk.yellow("YAY,your score is", score));