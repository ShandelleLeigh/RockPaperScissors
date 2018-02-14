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

compyChoice = ['compyRock', 'compyPaper', 'compyScissors']

function startGame(e) {
  var choice = e.target.id
  console.log(choice)
}

var choices = document.getElementsByClassName('choice')
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch(err) {
    //First load
  }
}
