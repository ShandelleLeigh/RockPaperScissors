//
// function startGame(e) {
//   var choice = e.target.id
//   console.log(choice)
// }
//
// var choices = document.getElementsByClassName('choice')
// for (var i in choices) {
//   try {
//     choices[i].addEventListener('click', startGame)
//   } catch(err) {
//     //First load
//   }
// }


// on user choice, computer picks randomly from array,
// js compares choices, and determines winner
//once winner is determined, there is an element that shows: you win or lose



function compyChoice() {
  var userChoice = ['compyRock', 'compyPaper', 'compyScissors'];
  var index = Math.floor(Math.random() * 3);
  return userChoice[index];
  // console.log(choices[index])
}

var compChoice = compyChoice();
console.log(compChoice);

function evalUserChoice() {
  switch (true) {
    case (userChoice == 'userRock' && compChoice == 'compyRock'):
      alert('Tie');
      return Tie;
      break;
    case (userChoice == 'userRock' && compChoice == 'compyPaper'):
      return Loss;
      alert('Loss');
      break;
    case (userChoice == 'userRock' && compChoice == 'compyScissors'):
      return Win;
      alert('Win');
      break;
    case (userChoice == 'userPaper' && compChoice == 'compyRock'):
      return Win;
      alert('Win');
      break;
    case (userChoice == 'userPaper' && compChoice == 'compyPaper'):
      alert('Tie');
      return Tie;
      break;
    case (userChoice == 'userPaper' && compChoice == 'compyScissors'):
      return Loss;
      alert('Loss');
      break;
    case (userChoice == 'userScissors' && compChoice == 'compyRock'):
      return Loss;
      alert('Loss');
      break;
    case (userChoice == 'userScissors' && compChoice == 'compyPaper'):
      return Win;
      alert('Win');
      break;
    case (userChoice == 'userScissors' && compChoice == 'compyScissors'):
      return Tie;
      alert('Tie');
      break;
    default:
      console.log('error in evalUserChoice');
      break;
  }
}


function startGame(e) {
  var choice = e.target.id;
  console.log(choice);
  compyChoice();
  evalUserChoice();

}

var userChoice = document.getElementsByClassName('choice')
for (var i in userChoice) {
  try {
    userChoice[i].addEventListener('click', startGame)

  } catch(err) {
    console.log("shit's borked")
  }
}
