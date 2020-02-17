//  ---    1 Have an array of objects that have the character details

// fetch("https://anapioficeandfire.com/api/houses/378")
// .then(response => {
//     var newRequest = new XMLHttpRequest();
//     newRequest.onreadystatechange = function() {
//         if (newRequest.readyState === 4) {
//             if (newRequest.status === 200) {
//                 var data = JSON.parse(newRequest.responseText);
//                 if (amiibo) {
//                     amiibo(data);
//                 }
//             }
//         }
//     };
//     newRequest.open("GET", URL);
//     newRequest.send();
// });

 function hero(apiUrl){
     var newRequest = new XMLHttpRequest();
     newRequest.onreadystatechange = function() {
         if (newRequest.readyState === 4) {
             if (newRequest.status === 200) {
                 var data = JSON.parse(newRequest.responseText);
                 console.log(data.responseText);
             }
         }
     };
     newRequest.open("GET", URL);
     newRequest.send();
 }
 //hero("https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/houses/378/");

//function hero(URL, amiibo) {
//  var newRequest = new XMLHttpRequest();
//       newRequest.onreadystatechange = function() {
//           if (newRequest.readyState === 4) {
//                if (newRequest.status === 200) {
//                   var data = JSON.parse(newRequest.responseText);
//                    if (amiibo) {
//                        amiibo(data);
//                    }
//                }
//           }
//    };
//    newRequest.open("GET", URL);
//    newRequest.send();
//}

let houses = new Array();
//      3       Console log your output.
hero("https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/houses/378", function(data){
    houses.push([data.name, data.region, data.coatOfArms, data.titles]);
    // console.log(data.name);
    // console.log(data.region);
    // console.log(data.coatOfArms);
    console.log.houses[0].name
});




// 2 Loop through the array to create the character cards
//for (let i = 0; i < houses.lenght; i++) {
 //   console.log(houses[i].dataset)}

// 3 have two variables, one for each character


// 4 when the user clicks a card store the character in a variable


// 5 store both variables in localStorage
function passValue() {
    var firstPlayer=document.getElementById("nextPage").value;
    var secondPlayer=document.getElementById("nextPage").value;
    localStorage.setItem("firstValue", firstPlayer, "secondValue", secondPlayer);
    return false;
}


