// let boxes = document.querySelectorAll('.box');
// let result = document.querySelector('.result');

// function generateRandom() {
//     let randomNumbers = [];
//     let nbRandom;
//     for (let i = 0; randomNumbers.length < 9; i++) {
//         nbRandom = Math.floor((Math.random() * (9 - 1 + 1)) + 1);
//         if (!randomNumbers.includes(nbRandom)) {
//              randomNumbers.push(nbRandom);        
//         } 
//     }
//         for (let b = 0; b < boxes.length; b++) {
//             boxes[b].innerHTML = randomNumbers[b];  
//         }
//     }

// generateRandom();

// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].addEventListener('click', function getNumbers() {
//         result.innerHTML += boxes[i].innerHTML;
//         if (result.innerHTML === '1234') {
//             result.style.background = 'green';
//         }
//         else if (result.innerHTML != '1234' && result.innerHTML.length === 4) {
//             result.style.background = 'red';
//         }
//         else if(result.innerHTML.length === 5){
//             result.innerHTML = '';
//             result.style.background = "#593f62"
//         }
//         generateRandom();
//     }) 
       
// }




let tableau;
    let numberTab;
    let nbRandom;
// Fonction de mélange aléatoire
function melangerTableau() {
    tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numberTab = [];
    for (let i = 0; i < 9; i++) {
        nbRandom = Math.floor(Math.random() * tableau.length);
        numberTab.push(tableau[nbRandom]);
        tableau.splice(nbRandom, 1);
       
    }
   
}

let boxes = document.querySelectorAll('.box');
let result = document.querySelector('.result');

function generateRandom() {
        melangerTableau()
        for (let b = 0; b < boxes.length; b++) {
            boxes[b].innerHTML = numberTab[b];  
        }
    }

generateRandom();

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function getNumbers() {
        result.innerHTML += boxes[i].innerHTML;
        if (result.innerHTML === '1234') {
            result.style.background = 'green';
        }
        else if (result.innerHTML != '1234' && result.innerHTML.length === 4) {
            result.style.background = 'red';
        }
        else if(result.innerHTML.length === 5){
            result.innerHTML = '';
            result.style.background = "#593f62"
        }
        generateRandom();
    }) 
       
}