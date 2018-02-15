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


//Declare variables



//Functions

// $(document).ready( function() {

  var options = ['rock', 'paper', 'scissors'];
  var compyChoice = computerChoice;
  var user = []


  // function computerChoice() {
  //   var index = Math.floor(Math.random() * options.length)
  //   return options[index];
  //   console.log(compyChoice);
  // }
  // console.log(compyChoice);




  function computerChoice() {
    var index = Math.floor(Math.random() * 3)
    console.log(index);
    console.log(options[index]);
    return options[index];
    // console.log(coptions[index]);
    // console.log(computerChoice);
  }






  function compareChoices() {}

  function displayResult() {}

  function calculateTallies() {}

  function recordResults() {}

  function startGame(e) {
    user = e.target.id;
    stats[user]++
    computerChoice();
    compare();
    printResults();
    calcTotals();
    // console.log(compyChoice);
  }

  $('.choice').on('click',startGame, function() {
    var userChoice = $(this).attr("value")
    computerChoice();
    console.log(userChoice);
    console.log(user);
  })

// })
