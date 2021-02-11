const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = ("Sally Ride");
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question(question);
  
  candidateAnswer = input.question(`\n${i + 1}. ${questions[i]}`);
  


}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  console.log(`Your Answer: ${candidateAnswer}`);
  console.log(`Correct Answer: ${correctAnswers[i]}`);

 
  let grade = 0;
  
  if (candidateAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
    candidateAnswers.push(candidateAnswer);
  }
//  console.log(candidateAnswers)
//console.log([i]);
//console.log(correctAnswers.length);
//console.log(grade);
  if ([i] == correctAnswers.length - 1) {
  //  console.log(candidateAnswers);
  //  console.log(candidateAnswers.length);
    grade = (candidateAnswers.length/correctAnswers.length * 100);
    console.log(`\n\n>>> Overall Grade: ${grade}% \(${candidateAnswers.length} of ${correctAnswers.length} responses correct) <<<`);
  if (grade >= 80) {
   console.log(">>> Status: PASS <<<");
  } else {
    console.log(">>> Status: FAIL <<<");
  }
  }

  //for (i = 0; i = question.length; i++) {
  //  if (candidateAnswers[i].toLowerCase === correctAnswer[i].toLowerCase) {
  //    grade = 1 + grade
  //    }
  //  }
  //}
  //if(candidateAnswer === correctAnswer) {
  //  grade = 1;
  //  console.log("Your answer is correct.")
  //}
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Welcome, ${candidateName}!`);
  for (i = 0; i < questions.length; i++){
  askQuestion();
  gradeQuiz(this.candidateAnswers);
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