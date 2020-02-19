//- fetch characters from localstorage
//- use character info to style the tokens by adding classes
//- create a board using flexbox or css grid
//- the dice(s) is a button that uses math.random to roll a random number 
//- have a variable that stores the score
//- every time the dice is rolled add to the score
//- every square has an id or data attribute
//- get the id/data attribute that matches the score
//- use addElement or innerHTML to add the token to the square
//- if the score is equal or greater than the last square store the winner in local storage and move to the winners page

/*Window.rollDice = ()=> {
  const max = 6;
  const roll = Math.ceil(Math.random() * max);
  console.log("You rolled", roll);
}
const width = 8;
const height = 8;
const board = [];

for (var y = 0; y < height; y++) {
  let row = [];
  board.push(row);
  for (var x = 0; x < width; x++) {
    row.push({x,y,occupied:null})
  }
}

console.log(board)
const boardSizeConst = 50;
const renderBoard = ()=>{
  let boardHTML = "";
  board.forEach(row=>{
    row.forEach(square=>{
      boardHTML += 
        "<div class=square style='top:${square.y * boardSizeConst}px; left:${square.x * boardSizeConst}px'>   </div>"
    });
  })
  document.getElementById("board").innerHTML = boardHTML;
  console.log("Render Board!");
}

renderBoard();*/