#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter FirstNumber",
        type: "number",
        name: "FirstNumber",
    },
    {
        message: "Enter SecondNumber",
        type: "number",
        name: "SecondNumber",
    },
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Modulus",
            "Exponential",
        ],
    },
]);
// Conditional Statement
if (answer.operator === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else if (answer.operator === "Modulus") {
    console.log(answer.FirstNumber % answer.SecondNumber);
}
else if (answer.operator === "Exponential") {
    console.log(answer.FirstNumber ** answer.SecondNumber);
}
else {
    console.log("Please select a valid operator");
}
