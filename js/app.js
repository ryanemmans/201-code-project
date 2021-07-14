'use strict';

console.log('Welcome in everybody!');

// ask a few questions and use if statements (conditional statements) or switch statement to reply with a unique alert

// 1=='1': - truthy
// 1 === '1' - falesy

// ask a question
let disneyLandOrig = prompt('Have you ever been to disneyland?');
console.log(disneyLandOrig);
// problem!! I want to allow different letter cases and maybe I want to allow a y or a no

let disneyLand = disneyLandOrig.toLowerCase();
// we try to not change thge users original input
console.log(disneyLand);

// if the person says yes, I want to congratulate them, if they say no, I will say sorry for your loss, if they say anything else, I'll say, I didn't understand, hope you get to go soon

if (disneyLand === 'yes'|| disneyLand === 'y') {
  alert('Congratulations! It really is the happioest place on earth!')
} else if (disneyLand === 'no' || disneyLand === 'n') {
  alert('bummer, you should go!');
  } else {
    alert('I did not get that, but I hope you go soon');
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
