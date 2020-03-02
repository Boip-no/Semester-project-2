//- fetch and display winner from local storage
let winnerName = localStorage.getItem("winner");
document.getElementById("winner").innerHTML = winnerName;
