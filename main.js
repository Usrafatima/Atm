#!usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //$
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "Q1",
        message: "Enter your pin",
        type: "number",
    },
]);
if (pinAnswer.Q1 === myPin) {
    console.log("Correct pin code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["Fast cash", "withdraw", "Check balance"],
        },
    ]);
    if (operationAns.operation === "Fast cash") {
        let fastcash = await inquirer.prompt([
            {
                name: "withdrawalAmount",
                message: "Please select the withdrawal amount",
                type: "list",
                choices: ["1000", "2000", "5000", "7000"],
            },
        ]);
        myBalance -= (fastcash.withdrawalAmount);
        console.log("Your remaining balance is: " + `${myBalance}`);
    }
    else if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is: " + `${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log("Your balance is: " + `${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
