'use strict';

// console.log('Welcome in everybody! Or as we say in Texas, y\'all');

// ask a few questions and use if statements (conditional statements) or switch statement to reply with a unique alert

// 1=='1': - truthy
// 1 === '1' - falesy

// ask a question

let userName = prompt('Welcome to THE About Me Guessing Game! Could you please help me with your name so we can get things started?');
// console.log(userName);

// problem!! I want to allow different letter cases and maybe I want to allow a y or a no

let snowBoardOrig = prompt('Alright ' + userName + ', let\'s get this exciting game started! Please answer the following questions with a simple yes or no. Question 1: Do you think I have ever been snowboarding?');
// console.log(snowBoardOrig);

let snowBoard = snowBoardOrig.toLowerCase();
// we try to not change thge users original input
// console.log(snowBoard);

// if the person says yes, I want to congratulate them, if they say no, I will say sorry for your loss, if they say anything else, I'll say, I didn't understand, hope you get to go soon

if (snowBoard === 'yes'|| snowBoard === 'y') {
  alert('Wow ' + userName + '! You know you\'re stuff! Snowboarding rocks! Skiing is cool..');
} else if (snowBoard === 'no' || snowBoard === 'n') {
  alert('Oh. My. Gosh. ' + userName + ' I guess I didn\'t make myself clear in my intro at the beginning of class. Snowboarding is pure serenity.');
} else {
  alert('W..wh..wha..what? Maybe next time I\'ll need to reword my instructions for you. Do not pass Go. Do not collect $200 :P');
}

let numBoard = prompt(userName + ', we all start at one point or another. But let me ask you this: Question 2: If given the opportuinty to try snowboarding, would you take the offer?');
// console.log(numBoard);

if (numBoard === 'yes'|| numBoard === 'y') {
  alert('Ding ding ding! We have a winner! I like your mentality ' + userName + '! ');
} else if (numBoard === 'no' || numBoard === 'n') {
  alert('Oh. My. Gosh. We gotta get you out on the slopes! It\'s pure serenity. Anyways, let\'s move forward..');
} else {
  alert('Seriously ' +userName + '!? Again!? Please answer with a simple yes or no. Do not pass Go. Do not collect $200 :P');
}

let johnnyTsunami = prompt('Now ' + userName + ', to get a good grasp of who I am, do you think I like the movie Johnny Tsunami?');
// console.log(johnnyTsunami);

if (johnnyTsunami === 'yes'|| johnnyTsunami === 'y') {
  alert(userName + ', you are borderline genius! YES! I love Johnny Tsunami and that movie is the exact reason I fell in love with snowbaording.');
} else if (johnnyTsunami === 'no' || johnnyTsunami === 'n') {
  alert('Welp ' + userName + '.. I thought we were getting to know one another better, but it appears not. I LOVE the movie Johnny Tsunami! Next!');
} else {
  alert('We\'ve been through this before.. Do not pass Go. Do not collect $200 :P');
}

// let's make a switch statement for multiple/lots of options
// 1 iff, 2 else if's, 1 else - max amount before switching to switch statement

// let's ask a questions
let funLevel = prompt('On a scale from 1-3, with 3 being the most fun, how fun was this About Me Guessing Game?');

// console.log(typeof funLevel);

let funLevelNumber = parseInt(funLevel);
// make a default if they don't give us a letFunLevelNumber

// let funLevelNumber = Number(funLevel) is a method that converts strings to numbers

// isNaN ()

// debugger;

switch (funLevelNumber) {
case 1:
  alert('yeah..I\'m not the biggest fan of prompts on webpages either');
  break; //break out of the block here!
case 2:
  alert('Well hey! It could be worse. You could be watching the United States men\'s basketball team get embarrassed on international TV..');
  break;
case 3:
  alert('Nice! It took a lot of work to get this up and running, so thank you for enjoying! Now.. time to learn more about me!');
  break;
default:
  alert('Let\'s get together and plan a trip so you can learn to work the slope!');
}
