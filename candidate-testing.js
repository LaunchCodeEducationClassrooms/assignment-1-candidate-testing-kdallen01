const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions= ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//for (i = 0; i < questions.length; i++) {
  candidateAnswer = input.question(`\n${i + 1}. ${questions[i]}`);
//  console.log(`Your answer: ${candidateAnswer}`);
//  console.log(`Correct answer: ${correctAnswers[i]}`);

//  if(candidateAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
//    candidateAnswers.push(candidateAnswer);
//    } 
// }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

 
//  let grade;
//console.log(candidateAnswers);
  let grade = (candidateAnswers.length/correctAnswers.length * 100); 
  //  console.log(`\n\n>>> Overall Grade: ${grade}% \(${candidateAnswers.length} of ${correctAnswers.length} responses correct) <<<`);
  //if (grade >= 80) {
  //  console.log(">>> Status: PASS <<<");
  //} else {
  //  console.log(">>> Status: FAIL <<<");
  //}
// console.log(grade);
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Welcome, ${candidateName}!`);
  for (i = 0; i < questions.length; i++) {
  askQuestion();
  console.log(`Your answer: ${candidateAnswer}`);
  console.log(`Correct answer: ${correctAnswers[i]}`);
//  console.log(candidateAnswer);
  if(candidateAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
//    console.log("YES");
    candidateAnswers.push(candidateAnswer);
  }
  //console.log(candidateAnswers);
  }
  
  gradeQuiz(this.candidateAnswers);
  console.log(`\n\n>>> Overall Grade: ${gradeQuiz(this.candidateAnswers)}% \(${candidateAnswers.length} of ${correctAnswers.length} responses correct) <<<`);  if (gradeQuiz(this.candidateAnswers) >= 80) {
  console.log(">>> Status: PASS <<<");
  } else {
    console.log(">>> Status: FAIL <<<");
  }
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