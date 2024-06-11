#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "Question_1",
        type: "list",
        message: "Q1. What is the correct way to check if two values are not equal in TypeScript?",
        choices: ["a == b", "a === b", "a = b", "a !== b"]
    },
    {
        name: "Question_2",
        type: "list",
        message: "Q2. Which of the following characters is commonly allowed in variable names in TypeScript?",
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "Question_3",
        type: "list",
        message: "Q3. Which operator is commonly used for string concatination in TypeScript?",
        choices: [" + ", " - ", " * ", " / "]
    },
    {
        name: "Question_4",
        type: "list",
        message: "Q4. In TypeScript, which symbol is commonly used to terminate statement?",
        choices: [" . ", " : ", " ; ", " , "]
    },
    {
        name: "Question_5",
        type: "list",
        message: "Q5. Which method of inquirer.js is used to start the prompt interface and recieve user input?",
        choices: ["start()", "prompt()", "init()", "run()"]
    }
]);
let score = 0;
switch (quiz.Question_1) {
    case "a !== b":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect");
}
switch (quiz.Question_2) {
    case "$":
        console.log("2. Correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect");
}
switch (quiz.Question_3) {
    case " + ":
        console.log("3. Correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect");
}
switch (quiz.Question_4) {
    case " ; ":
        console.log("4. Correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect");
}
switch (quiz.Question_5) {
    case "prompt()":
        console.log("5. Correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect");
}
console.log(`score: ${score}`);
