#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollars
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code");
    let operationAns = await inquirer.prompt([
        {
            name: "operator",
            message: "Select one of the operator",
            type: "list",
            choices: ["Withdraw", "Check Balance"],
        },
    ]);
    if (operationAns.operator === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (myBalance >= amountAns.amount) {
            console.log(`Your remaining balance is : ${(myBalance -= amountAns.amount)}`);
        }
        else {
            console.log("Your maximum amount is 10000");
        }
    }
    else if (operationAns.operator === "Check Balance") {
        console.log(`Your balance is : ${myBalance}`);
    }
}
else {
    console.log("Incorrect Correct Pin");
}
