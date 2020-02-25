//- fetch characters from localstorage
localStorage.setItem("firstValue", characterOne, "secondValue", characterTwo);
//- use character info to style the tokens by adding classes
//- create a board using flexbox or css grid
//- the dice(s) is a button that uses math.random to roll a random number 
var scores, roundScore, activePlayer, gamePlaying;

function initialization() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;


document.getElementById('rollDice').style.display = 'none';
document.querySelector('.rollDice').addEventListener('click', function () {

  //    1. Check if the game is playing or not.
      if (gamePlaying) {
  
          //    2. Generate Two random numbers and store them in variables
          var dice1 = Math.floor(Math.random() * 6) + 1; 
          var dice2 = Math.floor(Math.random() * 6) + 1; 
  
          //    3. Display the result on the page
          document.getElementById('rollDice').style.display = 'block';
          document.getElementById('rollDice').style.display = 'block';
          document.getElementById('rollDice').src = 'images/dice' + dice1 + '.png';
          document.getElementById('rollDice').src = 'images/dice' + dice2 + '.png';
  
  
          //    4. Update the round score if both the dice values are not 1
          if (dice1 !== 1 && dice2 !== 1) {
              // Add Score
              roundScore += dice1 + dice2;
              document.querySelector('#current-' + activePlayer).textContent = roundScore;
  
          } else {
              // Switch Player
              nextPlayer();
          }
  
      }
  
  });
}
//const board = [];
//let position = 1;
//let x = 4;
//let y = 0;
/*var rollDice() {
  return (int)(6.0 * Math.random() + 1);
}

function computerRoll() { 

  do { 
      int die = roll();
      System.out.println("Roll:"+ die);
      computerScore += die;
   } while (computerScore <= 20 && die >=2 && die <=6 );
   if (computerScore >=20)
       computerHold();

   if (die == 1)
       switchTurn();
}*/
//- have a variable that stores the score
//- every time the dice is rolled add to the score
//- every square has an id or data attribute
//- get the id/data attribute that matches the score
//- use addElement or innerHTML to add the token to the square
//- if the score is equal or greater than the last square store the winner in local storage and move to the winners page

// /*Window.rollDice = ()=> {
//   const max = 6;
//   const roll = Math.ceil(Math.random() * max);
//   console.log("You rolled", roll);
// }
// const width = 8;
// const height = 8;
// const board = [];

// for (var y = 0; y < height; y++) {
//   let row = [];
//   board.push(row);
//   for (var x = 0; x < width; x++) {
//     row.push({x,y,occupied:null})
//   }
// }

// console.log(board)
// const boardSizeConst = 50;
// const renderBoard = ()=>{
//   let boardHTML = "";
//   board.forEach(row=>{
//     row.forEach(square=>{
//       boardHTML += 
//         "<div class=square style='top:${square.y * boardSizeConst}px; left:${square.x * boardSizeConst}px'>   </div>"
//     });
//   })
//   document.getElementById("board").innerHTML = boardHTML;
//   console.log("Render Board!");
// }

// renderBoard();