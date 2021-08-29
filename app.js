const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['c','a','b','a','c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector('.resultats h2');
const texteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const questions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    tableauResultats = [];
    for(let i = 1; i < 6; i++){
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }
    verifFunc(tableauResultats);
})

function verifFunc(tabResultats){
    verifTableau = [];
    for(let a = 0; a < tabResultats.length; a++){
        if(tabResultats[a] === reponses[a]){
            verifTableau.push(true);
        } else{
            verifTableau.push(false);
        }
    }
    console.log(verifTableau);

}

