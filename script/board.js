/* Variables */
var scores, activePlayer, playerOne, playerTwo;

function initialization() {
    scores = [0, 0];
    activePlayer = 0;
// - fetch characters from localstorage
    localStorage.getItem("playerOne", playerOne);
    localStorage.getItem("playerTwo", playerTwo);

    document.getElementById("dice-1").style.display = "none";

    //  Set Cards Info
    //  Set Names
    
    playerOne = {
        Name: localStorage.getItem("playerOneName"),
        img: localStorage.getItem("playerOneImg"),
        Culture:localStorage.getItem("playerOneCulture")
    }
    playerTwo = {
        Name: localStorage.getItem("playerTwoName"),
        img: localStorage.getItem("playerTwoImg"),
        Culture:localStorage.getItem("playerTwoCulture")
    }

    console.log(playerOne.Name + " is fighting " + playerTwo.Name);

    if (playerOne.Culture != "-"){
        document.getElementById("culture-0").innerHTML = playerOne.Culture;
    }
    if (playerTwo.Culture != "-"){
        document.getElementById("culture-1").innerHTML = playerTwo.Culture;
    }

    document.getElementById("img-0").src = "images/"+playerOne.img;
    document.getElementById("img-1").src = "images/"+playerTwo.img;

    // Set Active player
    document.getElementById("activePlayer-0").backgroundColor = "green";
    document.getElementById("activePlayer-1").backgroundColor = "black";

    document.getElementById("name-0").innerHTML = playerOne.Name;
    document.getElementById("name-1").innerHTML = playerTwo.Name;

    // Show tokens
    document.getElementById("token-0").src = "images/token"+playerOne.img;
    document.getElementById("token-1").src = "images/token"+playerTwo.img;

    document.getElementById("token-0").style.display = "block";
    document.getElementById("token-1").style.display = "block";
}

document.querySelector(".btn-roll").addEventListener("click", function(){

    //    1. Generate a random number from 1 to 6 by using Math.random
    var dice = Math.floor(Math.random() * 6) + 1;

    //    3. Display the result on the page
    document.getElementById("dice-"+(activePlayer == 1 ? 0 : 1)).style.display = "none";
    document.getElementById("dice-"+activePlayer).style.display = "block";
    document.getElementById("dice-"+activePlayer).src = "images/dice" + dice + ".png";

    //    4. Update the score for active player
    // Add Score
    
    if (scores[activePlayer] + dice <= 29){
        scores[activePlayer] += dice;
        updatePosition(activePlayer, scores[activePlayer]);
    }

    // Custom events
    if(scores[activePlayer] == 6) {
        alert((activePlayer == 0 ? playerOne.Name : playerTwo.Name) + ", Daenarys's dragons blocks the way! Move back 5 tiles!");
        scores[activePlayer] -= 5;
        updatePosition(activePlayer, scores[activePlayer]);
    }
    else if(scores[activePlayer] == 10) {
        alert((activePlayer == 0 ? playerOne.Name : playerTwo.Name) + ", Jamie and Brienne is blocking the way! Move back 2 tiles!");
        scores[activePlayer] -= 2;
        updatePosition(activePlayer, scores[activePlayer]);
    }
    else if(scores[activePlayer] == 15) {
        alert((activePlayer == 0 ? playerOne.Name : playerTwo.Name) + ", you receive reinforcements! Move ahead 2 tiles!");
        scores[activePlayer] += 2;
        updatePosition(activePlayer, scores[activePlayer]);
    }
    else if(scores[activePlayer] == 22){
        alert((activePlayer == 0 ? playerOne.Name : playerTwo.Name) + ", destruction of the Great Sept of Baelor! Move back 2 tiles!");
        scores[activePlayer] -= 2;
        updatePosition(activePlayer, scores[activePlayer]);
    }
    if (scores[activePlayer] == 27) {
        alert((activePlayer == 0 ? playerOne.Name : playerTwo.Name) + ", you've been ambushed! Move back to start!");
        scores[activePlayer] = 0;
        updatePosition(activePlayer, scores[activePlayer]);
    }

    if (scores[activePlayer] == 29){
        // Winner!
        alert((activePlayer == 0 ? playerOne.Name : playerTwo.Name) + ", won the Boardgame of Thrones!");
        // SEND WINNER OVER TO WINNER PAGE AND REDIRECT
            localStorage.setItem("winner", (activePlayer == 0 ? playerOne.Name : playerTwo.Name));
            window.location.replace("winner.html");
        }

    // Switch Player
    
    if (dice < 6){
        nextPlayer();
    }
});

// //- use character info to style the tokens by adding classes

function updatePosition(tokenId, position){
    let start = document.getElementById("tile"+position).getBoundingClientRect();

    document.getElementById("token-"+ tokenId).style.left = start.x  + (tokenId == 1 ? start.height / 16 : 0);
    document.getElementById("token-"+ tokenId).style.top = start.y + (tokenId == 1 ? start.width / 8 : 0);
}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    console.log((activePlayer == 0 ? playerOne.Name : playerTwo.Name) + " has finished their turn. " + (activePlayer == 1 ? playerOne.Name : playerTwo.Name) + " is up next!")
}

initialization();

// Place tokens
updatePosition(0,0);
updatePosition(1,0);