'use strict';

console.log('Welcome in everybody! Or as we say in Texas, y\'all');

// ask a few questions and use if statements (conditional statements) or switch statement to reply with a unique alert

// 1=='1': - truthy
// 1 === '1' - falesy

// ask a question
let userName = prompt('Welcome to THE About Me Guessing Game! Could you please help me with your name so we can get things started?');
console.log(userName);
// problem!! I want to allow different letter cases and maybe I want to allow a y or a no

let snowBoardOrig = prompt('Alright ' + userName + ', let\'s get this exciting game started! Please answer the following questions with a simple yes or no. Question 1: Have you ever been snowboarding or skiing?');
console.log(snowBoardOrig);

let snowBoard = snowBoardOrig.toLowerCase();
// we try to not change thge users original input
console.log(snowBoard);

// if the person says yes, I want to congratulate them, if they say no, I will say sorry for your loss, if they say anything else, I'll say, I didn't understand, hope you get to go soon

if (snowBoard === 'yes'|| snowBoard === 'y') {
  alert('Wow! You\'re so cool! Snowboarding rocks! Skiing is cool..')
} else if (snowBoard === 'no' || snowBoard === 'n') {
  alert('Oh. My. Gosh. We gotta get you out on the slopes! It\'s pure serenity.');
  } else {
    alert('W..wh..wha..what? Maybe next time I\'ll need to reword my instructions for you. Do not pass Go. Do not collect $200 :P');
  }

  // let's make a switch statement for multiple/lots of options
  // 1 iff, 2 else if's, 1 else - max amount before switching to switch statement

// let's ask a questions
let funLevel = prompt('On a scale from 1-3, with 3 being the most fun, how fun was disneyLand when you went?');

console.log(typeof funLevel);

let funLevelNumber = parseInt(funLevel);
// make a default if they don't gwive us a letFunLevelNumber

// let funLevelNumber = Number(funLevel) is a method that converts strings to numbers

// isNaN ()

// debugger;

switch (funLevelNumber) {
  case 1:
    alert('you need to try again');
    break; //break out of the block here!
  case 2:
    alert('should not have had the turkey leg!')
    break;
  case 3:
    alert('That is wonderful, we should go together.')
    break;
  case 'banana': // not working, try to figure out
    alert('You silly monkey')
    break;
  default:
    alert('Let me help you plan your next trip');
}
