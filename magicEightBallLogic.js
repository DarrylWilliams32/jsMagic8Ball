let userName = '';
let userQuestion = '';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

userName ? console.log(userName) : console.log('Hello!');

userQuestion ? console.log(userQuestion) 
: console.log('You did not ask me a question!');

eightBall = randomNumber;

switch (eightBall) {
  case 0:
    console.log('You rolled snake eyes on this one');
    break;
  case 1:
    console.log('It is certain');
    break;
  case 2:
    console.log('It is decidedly so');
    break;
  case 3:
    console.log('Reply hazy, try again later');
    break;
  case 4:
    console.log('Cannot predict now');
    break;
  case 5:
    console.log("Don't count on it, Woody");
    break;
  case 6:
    console.log('My sources say no');
    break;
  case 7:
    console.log('Outlook not soo good');
    break;
  case 8:
    console.log('Signs point to yes');
    break;
}