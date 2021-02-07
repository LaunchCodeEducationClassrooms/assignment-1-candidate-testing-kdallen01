const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ""; //I added name
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? "; //I added question
let correctAnswer = "Sally Ride"; //I added answer
let candidateAnswer = ""; //I added answer
let questions= ["Who was the first American woman in space?", "True or false: 5000 meters = 5 kilometers.", "(5 + 3)/2 * 10 =?", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?","What is the minimum crew size for the International Space Station (ISS)?"];  //I added array
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];  //I added array
let candidateAnswers = [];  //I added array


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please enter your name: "); //I added line
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//candidateAnswer = input.question(question); //I added line
for (i = 0; i < questions.Length; i++) {  //I added line
console.log(questions[i]);
candidateAnswer = input.question(questions[i]);  //I added line
candidateAnswers.push(candidateAnswer);  //I added line
}  //I added line

console.log(candidateAnswers);  //I added line
}  //I added line

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 
 if (candidateAnswer === correctAnswer) {  //I added line
   console.log("Correct!");  //I added line
 } else {  //I added line
   console.log("Incorrect.");  //I added line
 } //I added line

  let grade;


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Welcome, ${candidateName}!`) //I addd line
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};