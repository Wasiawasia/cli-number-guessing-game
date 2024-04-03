#! /usr/bin/env node
import inquirer from "inquirer";
//1)computer will generate a random number
//2)user input for guessing number
//3)compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number:",
    }
]);
console.log(answers);
if (answers.userGuessNumber === randomNumber) {
    console.log("congratulations!You guessed right number,");
}
else {
    console.log("you guessed wrong number");
}
