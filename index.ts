#! usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "Enter your first number", type: "number", name: "firstnumber"},
{message: "Enter  your second number", type: "number", name: "secondnumber"},
{
    message: "Select one of the operator to perform operations",
    type: "list",
    name: "operator",
    choices: ["Addition", "Multiplication", "Division", "Substraction"],
}
])

// Conditional statement:
if
(answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if
(answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if(answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else if(answer.operator === "Substraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}

else{console.log("Please input valid operator")}