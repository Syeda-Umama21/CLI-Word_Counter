#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const userAns = await inquirer.prompt([
    {
        name: "sentance",
        type: "input",
        message: chalk.bold.magenta("Enter your sentance to count the word:")
    }
]);
const words = userAns.sentance.trim().split(" ");
console.log(words);
console.log(chalk.bold.yellow(`Your sentance word count is ${words.length}`));
