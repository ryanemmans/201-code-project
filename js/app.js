'use strict';

// console.log('Welcome in everybody! Or as we say in Texas, y\'all');

// ask a few questions and use if statements (conditional statements) or switch statement to reply with a unique alert

// 1 == '1' - truthy
// 1 === '1' - falesy

// ask a question

let userName = prompt('Welcome to THE About Me Guessing Game! My name is Christopher. Could you please help me with your name so we can get things started?');
console.log(userName);
alert('Welcome ' + userName);

alert('Let\'s answer some questions with yes/no or y/n answers. You can do this!');

// problem!! I want to allow different letter cases and maybe I want to allow a y or a no

// ------------------------------------------------------------------------------------------

let quesOne = prompt('Alright ' + userName + ', let\'s get this exciting game started! Remember, please answer all of the following questions with a simple yes/no or y/n. Question 1: Do you think I have ever been snowboarding?');
console.log(quesOne);
let snowBoard = quesOne.toLowerCase();
// we try to not change thge users original input
// if the person says yes, I want to congratulate them, if they say no, I will say sorry for your loss, if they say anything else, I'll say, I didn't understand, hope you get to go soon
if (snowBoard === 'yes' || snowBoard === 'y') {
  alert('Wow ' + userName + '! You know you\'re stuff! Snowboarding rocks! Skiing is cool..');
} else if (snowBoard === 'no' || snowBoard === 'n') {
  alert('Oh. My. Gosh. ' + userName + ' I guess I didn\'t make myself clear in my intro at the beginning of class. Snowboarding is pure serenity.');
} else {
  alert('W..wh..wha..what? Maybe next time I\'ll need to reword my instructions for you. Do not pass Go. Do not collect $200 :P');
}
console.log(snowBoard);

// --------------------------------------------------------------------------------------------

let quesTwo = prompt(userName + ', we all start at one point or another. But let me ask you this: Question 2: If given the opportuinty to try snowboarding, would you take the offer?');
console.log(quesTwo);
let snowGo = quesTwo.toLowerCase();
if (snowGo === 'yes' || snowGo === 'y') {
  alert('Ding ding ding! We have a winner! I like your mentality ' + userName + '! ');
} else if (snowGo === 'no' || snowGo === 'n') {
  alert('Oh. My. Gosh. We gotta get you out on the slopes! It\'s pure serenity. Anyways, let\'s move forward..');
} else {
  alert('Seriously ' + userName + '!? Again!? Please answer with a simple yes or no. Do not pass Go. Do not collect $200 :P');
}
console.log(snowGo);

// --------------------------------------------------------------------------------------------

let quesThree = prompt('Now ' + userName + ', time for Question 3. To get a good grasp of who I am, is the movie Johnny Tsunami the reason I fell in love with snowbaording?');
console.log(quesThree);
let jTsunami = quesThree.toLowerCase();
if (jTsunami === 'yes' || jTsunami === 'y') {
  alert(userName + ', you are borderline genius! YES! I love Johnny Tsunami and that movie is the exact reason I fell in love with snowbaording.');
} else if (jTsunami === 'no' || jTsunami === 'n') {
  alert('Welp ' + userName + '.. I thought we were getting to know one another better, but it appears not. I LOVE the movie Johnny Tsunami! Gotta work the hill baby!');
} else {
  alert('We\'ve been through this before.. Do not pass Go. Do not collect $200 :P');
}
console.log(jTsunami);

// --------------------------------------------------------------------------------------------

let quesFour = prompt(userName + ', we all have different hobbies in life but I highly encourage you to try out snowboarding! Now, let\'s change gears and see if you can guess another aspect of my life. Question 4: From what you have gathered in our time together, do you think that I have traveled to the country of Germany?');
console.log(quesFour);
let toGerm = quesFour.toLowerCase();
if (toGerm === 'yes' || toGerm === 'y') {
  alert('Ba-da-boom ba-ba-ding! ' + userName + ', Germany is an amazing place and you should go at least once in your lifetime. Good job!');
} else if (toGerm === 'no' || toGerm === 'n') {
  alert('Snowboarding, international travel and exploring our own backyard. I\'ve said these words at least 3 times in our short time together. C\'mon ' + userName + '!');
} else {
  alert('Seriously ' + userName + '!? Again!? Please answer with a simple yes or no or even y or n. Do not pass Go. Do not collect $200 :P');
}
console.log(toGerm);

// --------------------------------------------------------------------------------------------

let quesFive = prompt(userName + ', time for some thought and history! Question 5: Do you, ' + userName + ', think that I want to travel to the historical country of Jordan?');
console.log(quesFive);
let thinkJordan = quesFive.toLowerCase();
if (thinkJordan === 'yes' || thinkJordan === 'y') {
  alert('Absofreakinglutely! I implore you ' + userName + ' to search up the ancient city of Petra and you\'ll see exactly why I want to travel there! Plus, for a ME country, it\'s relatively safe for everyone.');
} else if (thinkJordan === 'no' || thinkJordan === 'n') {
  alert('Ye of little faith. ' + userName + ', I highly suggest you to search up the ancient city of Petra and you\'ll see exactly why I want to travel there! Plus, Jordan is relatively safe for where it\'s at in the world.');
} else {
  alert('Seriously ' + userName + '!? Again!? Please answer with a simple yes or no. Do not pass Go. Do not collect $200 :P');
}
console.log(thinkJordan);

// ----------------------------------------------------------------------------------------------------------------

// The below code is where I started, the code that follows, is where I ended up.

// Guess a number between 1 and 10
// let correctNumberAnswer = 7;
// let count = 4;
// let userNumberGuess = prompt('Are you able to guess what my favorite number is? Hint, it is between 1 and 10.');
// let intUserNumber = parseInt(userNumberGuess);
// console.log('User Guess: ' + intUserNumber);
// while (userNumberGuess <= 0 || userNumberGuess > 10) {
//   userNumberGuess = prompt('The number is between 1 and 10!');
// }

// while (userNumberGuess !== correctNumberAnswer) {
//   if (userNumberGuess < correctNumberAnswer) {
//     alert('Maybe think of a higher number!');
//   }
//   if (userNumberGuess > correctNumberAnswer) {
//     alert('Maybe think of a lower number..');
//   }
//   if (intUserNumber === correctNumberAnswer) {
//     alert('You got it!');
//     break;
//   }
//   count--;
//   if (count > 0)
//     alert('Too bad, the answer was 7! The perfect number!');
//   break;
// }

let correctNumberAnswer = 7;
let numberGuesses = 4;
// let userNumberGuess = prompt('Are you able to guess what my favorite number is? Hint, it is between 1 and 10.');
// let intUserNumber = parseInt(userNumberGuess);
// console.log('User Guess: ' + intUserNumber);
for (let i = 0; i < numberGuesses; i++) {
  console.log(i);
  let userAnswer = prompt('Are you able to guess what my favorite number is? Hint, it is between 1 and 10. This is guess ' + (i + 1) + ' of 4 guesses');
  while (userAnswer <= 0 || userAnswer > 10) {
    userAnswer = prompt('My favorite number is between 1 and 10!');
    console.log('User guess: ' + userAnswer);
  }

  if (userAnswer == correctNumberAnswer) {
    alert('Bam! You are almost, like me! As in essence, like me! Good job!');
    break;
  } else if (userAnswer < correctNumberAnswer) {
    alert('Incorrect, think higher, taller, reach for the sky..');
  } else if (userAnswer > correctNumberAnswer) {
    alert(':( sorry, the number isn\'t that special. Think lower, shorter, but not the basement.');
  } else {
    alert('It would be nice if someone..' + userName + ' could follow sinple direction. Enter a number between 1 and 10 this time');
  }
}

// return;
// if (!intUserNumber) {
//   alert('C\'mon, you know that\'s not a number!');
// }
// if (intUserNumber !== correctNumberAnswer && count === 3) {
//   alert('Sorry my friend, you did not get it. My favorite number is ' + correctNumberAnswer + '.');
// }
// guesses--;

// figure out how to decrement count
// once couint is at 0, we are out of guesses, tell them what the right answer is, then break
// add alert that says
// look at how a while loop works

// --------------------------------------------------------------------------------------------------------------------------

// let's make a switch statement for multiple/lots of options
// 1 iff, 2 else if's, 1 else - max amount before switching to switch statement

// let's ask a questions
let funLevel = prompt('Cool ' + userName + ', on a scale from 1-3, with 3 being the most fun, how fun was this About Me Guessing Game?');
// console.log(typeof funLevel);
let funLevelNumber = parseInt(funLevel);
// make a default if they don't give us a letFunLevelNumber
// let funLevelNumber = Number(funLevel) is a method that converts strings to numbers
// isNaN ()
// debugger;
switch (funLevelNumber) {
case 1:
  alert('yeah..I\'m not the biggest fan of prompts on webpages either.. Now, time for even more guessing! ROFL!');
  break; //break out of the block here!
case 2:
  alert('Well hey! It could be worse. You could be watching the United States men\'s basketball team get embarrassed on international TV.. Now, time for even more guessing! ROFL!');
  break;
case 3:
  alert('Nice! It took a lot of work to get this up and running, so thank you for enjoying! Now, time for even more guessing! ROFL!');
  break;
default:
  alert('We seriously need to teach some basic command responses. Maybe next time, you\'ll enter a number between 1 and 3, like the number 2. Now, time for even more guessing! ROFL!');
}

// --------------------------------------------------------------------------------------------------------------------------

// let's pretend I'm making a list of my favorite movies and I am going to let the user guess one of them. I will give them 5 guesses. If they get it right. Let them know! alert with 'you got it right' and have them stop guessing. If wrong, give feedback, let them know they got it wrong and how many guesses they have left. If on the last guess and still wrong, tell them the correct answers.

// array of movies
const fruitArray = ['plum', 'peach', 'kiwi', 'apple', 'mango'];

// prompt user for guess
// wrap in a while loop
// checking for correct guess, looping through a loop, best for while loop, to check 2 conditions, # of guesses and correct answer
// inner loop is a for loop

// establish a count for my guesses
let guesses = 4;
// never go below 1
// set up a flag to indicate if they got the correct answer
let correctFruit = false;

// while (correctMovie === && guesses > 0){ }

while (!correctFruit && guesses > 0) {
  // gets me started into the loop with my present values
  // prompt user for guess
  let userGuess = prompt('Can you guess one of my favorite fruits? You have a total of ' + guesses + ' attempts remaining.');
  let userGuessLower = userGuess.toLowerCase();
  // check if user guess matches ANY of the movies
  for (let i = 0; i < fruitArray.length; i++) {
    // check if userGuess matches each single movie
    if (userGuessLower === fruitArray[i]) {
      alert('You got one correct! Amazing job!');
      correctFruit = true;
      break;
    }
  }
  if (correctFruit) {
    alert('Nice work! All of my favorite fruit choices are ' + fruitArray);
  }
  // else {
  //  alert('Sorry you didn\'t quite hit the mark, please guess againm')
  // }
  // if they got it wrong, and are on guess #5-#2, we'll tell them to try again.
  if (!correctFruit && guesses <= 4 && guesses > 1) {
    alert('Sorry, you\'re not as sweet as my favorite fruits! Please guess again.');
  }
  // If they are wrong on last guess, then we will tell them the answers
  if (!correctFruit && guesses === 1) {
    alert('Sorry, you are incorrect. All of my favorite fruits are ' + fruitArray);
  }
  guesses--;
  // this is to break the loop by decrementing the loop
}

// -----------------------------------------------------------------------------------------------------------

