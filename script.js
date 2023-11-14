let boxes = document.querySelectorAll('.box');
let result = document.querySelector('.result');

function generateRandom() {
    let randomNumbers = [];
    let nbRandom;
    for (let i = 0; randomNumbers.length < 9; i++) {
        nbRandom = Math.floor((Math.random() * (9 - 1 + 1)) + 1);
        if (!randomNumbers.includes(nbRandom)) {
             randomNumbers.push(nbRandom);        
        } 
    }
        for (let b = 0; b < boxes.length; b++) {
            boxes[b].innerHTML = randomNumbers[b];  
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


//étape 1 : écrire avec un clavier statique dans result
//étape 2 : fond en vert si bon code et rouge sinon
//étape 3 : fonction générer un nombre aléatoire entre 1 et 9
//étape 4 : générer 9 nombres aléatoires différents et les stocker quelque part
//étape 5 : transposer les nombres aléatoires dans le HTML
//étape 6 : faire en sorte que lorsque j'appuie sur un bouton j'appelle à nouveau la fonction qi va les mélanger aléatoirement