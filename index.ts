#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

type Questions = {
  question: string;
  options: string[];
  answer: string;
};

const dataQuestions: Questions[] = [
  {
    question: "What is TypeScript?",
    options: [
      "A) A type of coffee",
      "B) A superset of JavaScript",
      "C) A style of programming",
      "D) A markup language",
    ],
    answer: "B) A superset of JavaScript",
  },
  {
    question: "What is TypeScript primarily used for?",
    options: [
      "A) Server-side scripting",
      "B) Styling web pages",
      "C) Writing strongly-typed JavaScript code",
      "D) Database management",
    ],
    answer: "C) Writing strongly-typed JavaScript code",
  },
  {
    question: "Which company developed TypeScript?",
    options: ["A) Google", "B) Microsoft", "C) Facebook", "D) Apple"],
    answer: "B) Microsoft",
  },
  {
    question: "What is the file extension for TypeScript files?",
    options: ["A) .java", "B) .ts", "C) .py", "D) .js"],
    answer: "B) .ts",
  },
  {
    question: "Which of the following is a basic data type in TypeScript?",
    options: ["A) Component", "B) Module", "C) String", "D) Class"],
    answer: "C) String",
  },
  {
    question:
      "Which of the following can be used to compile TypeScript into JavaScript?",
    options: [
      "A) Node.js",
      "B) Babel",
      "C) TypeScript Compiler (tsc)",
      "D) Webpack",
    ],
    answer: "C) TypeScript Compiler (tsc)",
  },
  {
    question: "What is the purpose of using interfaces in TypeScript?",
    options: [
      "A) To define the structure of an object",
      "B) To compile code",
      "C) To style HTML elements",
      "D) To manage database connections",
    ],
    answer: "A) To define the structure of an object",
  },
  {
    question: "What keyword is used to create a class in TypeScript?",
    options: ["A) function", "B) interface", "C) class", "D) constructor"],
    answer: "C) class",
  },
  {
    question:
      "Which of the following TypeScript features is not available in JavaScript?",
    options: [
      "A) Classes",
      "B) Interfaces",
      "C) Arrow functions",
      "D) Promises",
    ],
    answer: "B) Interfaces",
  },
  {
    question:
      "Which keyword in TypeScript allows for creating a read-only property?",
    options: ["A) static", "B) readonly", "C) constant", "D) immutable"],
    answer: "B) readonly",
  },
];

async function quizQuestions() {
  let correctAnswers = 0;
  let wrongAnswers = 0;

  console.log(chalk.green("\n Welcome to Typescript Quiz \n"));

  await new Promise((resolve) => setTimeout(resolve, 2000));

  for (let i of dataQuestions) {
    let answers = await inquirer.prompt([
      {
        name: "result",
        type: "list",
        message: i.question,
        choices: i.options,
      },
    ]);

    if (answers.result === i.answer) {
      console.log(chalk.green("CORRECT \n"));
      correctAnswers++;
    } else {
      console.log(chalk.red(`WRONG... Correct answer is ${i.answer}\n`));
      wrongAnswers++;
    }
  }

  console.log(chalk.blue("\nTotal Questions ="), chalk.yellow("10"));
  console.log(
    chalk.blue("Correct Answers ="),
    chalk.yellow(`${correctAnswers}`)
  );
  console.log(chalk.blue("Wrong Answers ="), chalk.yellow(`${wrongAnswers}`));
}

quizQuestions();
