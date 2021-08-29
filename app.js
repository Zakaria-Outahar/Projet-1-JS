const form = document.querySelector('.form-quizz');
let tableResults = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    tableResults = [];
    for(i = 1; i < 6; i++){
        tableResults.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }
    console.log(tableResults);
})