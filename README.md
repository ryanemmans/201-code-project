# 201-code-project

Code 201 - Project

Ran into an issue under Console where my linked css pages and js page was 404: not found. I learned that was the case as the linked .css pages were under a different folder or path, and in my HTML code, I needed to reference where that file was in relation to the folder it was in.

I used information from this site to fix this issue I was having.

- <https://devpractical.com/html-css-not-linking-properly/#:~:text=When%20your%20HTML%20and%20CSS,to%20the%20link%20href%20value>.

Having an issue with my code on Chrome and it appears that it could be a known issue to GitHub. The warning and subsequent error messages I am getting is as follows:

- Error with Permissions-Policy header: Unrecognized feature: 'interest-cohort'.
- cburk2019.github.io/:8 GET <https://cburk2019.github.io/css/style.css> net::ERR_ABORTED 404
- cburk2019.github.io/:7 GET <https://cburk2019.github.io/css/reset.css> net::ERR_ABORTED 404
- cburk2019.github.io/:9 GET <https://cburk2019.github.io/js/app.js> net::ERR_ABORTED 404
- cburk2019.github.io/:15 GET <https://cburk2019.github.io/img/cbukeystone1.jpeg> 404

Class-03 Lab is building off previous lab.

## *Step 1*

- I'm adding a top ten list in HTML, top 10 places I've visited.
- converting work experience and education summary into an `<ul>` in HTML

## *Step 2*

- Add a 6th question to the guessing game, guessing a number.
  - if the number is too low or too high, alert the user
  - give user only 4 chances to get it correct
  - after all guesses have been exhausted, tell user correct answer, use a loop!

## *Step 3*

- Add a 7th question that has multiple possible correct answers that are stored in an array.
- Give the user 6 attempts to guess the correct answer.
- The guesses will end once the user guesses a correct answer or they run out of attempts.
- Display all the possible correct answers to the user, use a loop!

## *Step 4*

- Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.
