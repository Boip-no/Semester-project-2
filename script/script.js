//  ---    1 Have an array of objects that have the character details
var characters = [
    {Name: "Jon Snow", Culture: "Valyrian", img: "targaryanFlag.jpg"},
    {Name: "Stannis Baratheon", Culture: "Northmen", img: "baratheonFlag.jpg"},
    {Name: "Sansa Stark", Culture: "Northmen", img: "starkFlag.jpg"},
    {Name: "Daenarys Targaryan", Culture: "Valyrian", img: "targaryanFlag.jpg"},
    {Name: "Tyrion Lannister", Culture: "Westerman", img: "lannisterFlag.jpg"},
    {Name: "Cercei Lannister", Culture: "Westerman", img: "lannisterFlag.jpg"},
    {Name: "Gregor Clegane", Culture: "-", img: "cleganeFlag.jpg"},
    {Name: "Jorah Mormont", Culture: "Northmen", img: "mormontFlag.jpg"},
    {Name: "Arya Stark", Culture: "Northmen", img: "starkFlag.jpg"},
    {Name: "Brandon Stark", Culture: "Northmen", img: "starkFlag.jpg"},
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
                "<input name='"+character.Name+"' id='character' type='submit' value='"+character.Name+"'>" +
                "<br/>" +
                "<img class='character' src='images/"+character.img+"' alt=''>" +
                "<h6>" +
                    character.Culture + 
                "</h6>" +
            "</div>" +
        "</a>";
        // "<div id='carouselExampleControls' class='carousel slide' data-ride='carousel'>"
        //     "<div class='carousel-inner'>" +
        //         "<div class='carousel-item active'>" +
        //             "<a onclick='selectCharacter("+i+")'>" +
        //                 "<div>" +
        //                     "<input name='"+character.Name+"' id='character' type='submit' value='"+character.Name+"'>" +
        //                     "<br/>" +
        //                     "<img class='character' src='images/"+character.img+"' alt=''>" +
        //                     "<h6>" +
        //                         character.Culture + 
        //                     "</h6>" +
        //                 "</div>" +
        //             "</a>" +
        //     "</div>" +
        //     "<a class='carousel-control-prev' href='#carouselExampleControls' role='button' data-slide='prev'>" +
        //         "<span class='carousel-control-prev-icon' aria-hidden='true'>" + "</span>" +
        //         "<span class='sr-only'>" + "Previous" + "</span>" +
        //     "</a>" +
        //     "<a class='carousel-control-next' href='#carouselExampleControls' role='button' data-slide='next'>" +
        //         "<span class='carousel-control-next-icon' aria-hidden='true'>"+ "</span>" +
        //         "<span class='sr-only'>" + "Next" + "</span>" +
        //     "</a>" +
        // "</div>";
    
    document.getElementById(i % 2 == 0 ? "characterOneContainer" : "characterTwoContainer").innerHTML += cardString;
}

let cards = document.querySelectorAll("div.card");
for (let i = 0; i < cards.length; i++){
    console.log(cards[i].dataset.number);
}

// 4 when the user clicks a card store the character in a variable


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

