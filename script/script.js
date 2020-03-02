//  ---    1 Have an array of objects that have the character details
var characters = [
    {Name: "Jon Snow", Culture: "Valyrian", img: "targaryan.png"},
    {Name: "Stannis Baratheon", Culture: "Northmen", img: "baratheon.png"},
    {Name: "Sansa Stark", Culture: "Northmen", img: "stark.png"},
    {Name: "Daenarys Targaryan", Culture: "Valyrian", img: "targaryan.png"},
    {Name: "Tyrion Lannister", Culture: "Westerman", img: "lannister.png"},
    {Name: "Cercei Lannister", Culture: "Westerman", img: "lannister.png"},
    {Name: "Gregor Clegane", Culture: "-", img: "clegane.png"},
    {Name: "Jorah Mormont", Culture: "Northmen", img: "mormont.png"},
    {Name: "Arya Stark", Culture: "Northmen", img: "stark.png"},
    {Name: "Brandon Stark", Culture: "Northmen", img: "stark.png"}, 
]

// 2 Loop through the array to create the character cards
// 3 have two variables, one for each character
let characterOne = null;
let characterTwo = null;

function selectCharacter(index) {
    let chosenCharacter = characters[index];

    if (characterOne == null)
    {
        characterOne = chosenCharacter;
        document.getElementById("playerOne").innerHTML += chosenCharacter.Name + "<img src='images/"+chosenCharacter.img+"'></img>";
    }
    else{
        characterTwo = chosenCharacter;
        document.getElementById("playerTwo").innerHTML = chosenCharacter.Name + "<img src='images/"+chosenCharacter.img+"'></img>";
    }
}

function removeCharacters(){
    characterOne = null;
    characterTwo = null;
    document.getElementById("playerOne").innerHTML = "";
    document.getElementById("playerTwo").innerHTML = "";
}

let createCards = 10;

/*When it says it is number 1, that should increment by the number that it is in the loop.*/   
for (let i = 0; i < createCards; i++) {
    let cardString;
    let character = characters[i];

    cardString = 
        "<a onclick='selectCharacter("+i+")'>" +
            "<div>" +
                "<img class='character' src='images/"+character.img+"' alt=''>" +
                "<br/>" +
                "<input name='"+character.Name+"' id='character' type='submit' value='"+character.Name+"'>" +
                "<h6>" + character.Culture + "</h6>" +
            "</div>" +
        "</a>";
    
    document.getElementById(i % 2 == 0 ? "characterOneContainer" : "characterTwoContainer").innerHTML += cardString;
}

let cards = document.querySelectorAll("div.card");
for (let i = 0; i < cards.length; i++){
    console.log(cards[i].dataset.number);
}

// 4 when the user clicks a card, store the character in a variable


// 5 store both variables in localStorage
function passValue() {
    if (characterOne == null || characterTwo == null)
    {
        alert("You have to choose two characters");
        return false;
    } else
    {
        localStorage.setItem("playerOneName", characterOne.Name);
        localStorage.setItem("playerOneImg", characterOne.img);
        localStorage.setItem("playerOneCulture", characterOne.Culture);
        localStorage.setItem("playerTwoName", characterTwo.Name);
        localStorage.setItem("playerTwoImg", characterTwo.img);
        localStorage.setItem("playerTwoCulture", characterTwo.Culture);
        return true;
    }
}

