const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['c','a','b','a','c'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
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

    questions.forEach(item => {
        item.addEventListener('click', () => {
            item.style.background = 'white';
        })
    })
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

    afficherResultats(verifTableau);
    couleursFonction(verifTableau);
}

function afficherResultats(tabCheck){
    const nbDeBonnesReponses = tabCheck.filter(el => el === true).length; 
    noteResultat.innerText = `Note : ${nbDeBonnesReponses}/5`;
    switch(nbDeBonnesReponses){
        case 5 : titreResultat.innerText = "✔️ Bravo, c'est un sans faute ! ✔️";
        aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
        break;

        case 4 : titreResultat.innerText = "✨ Vous y êtes presque ! ✨";
        aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
        break;

        case 3 : titreResultat.innerText = "✨ Encore un effort ... 👀";
        aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
        break;

        case 2 : titreResultat.innerText = "👀 Il reste quelques erreurs. 😭";
        aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
        break;

        case 1 : titreResultat.innerText = "😭 Tu peux mieux faire ! 😭";
        aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
        break;

        case 0 : titreResultat.innerText = "👎 Tu peux mieux faire ! 👎";
        aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
        break;

        default:
            "Erreur, cas innatendu";
    }
}

function couleursFonction(tableau){
    for(let i=0; i < tableau.length; i++){
        if(tableau[i]){
            questions[i].style.background = 'lightgreen';
        } else{
            questions[i].style.background = '#ffb8b8';
            questions[i].classList.add('echec');
            setTimeout(() => {
                questions[i].classList.remove('echec');
            }, 500)
        }
    }
}

