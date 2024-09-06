//recupero elementi dalla pagina//
const countdownElement = document.getElementById('countdow');
const numberListElement = document.getElementById('numbers-list');
const form = document.getElementById('answers-form');
const messageelement = document.getElementById('message');
const inputGroup = document.getElementById('input-group');
const instructionselement = document.getElementById('instructions');
const inputFields = document.querySelectorAll('input')

const min = 1;
const max = 50;
const totalNumber = 5;
let time = 10;

const numbers = getDifferentrandomNumbers(min, max, totalnumbers)
console.log(numbers)

let items = '';
for (let i = 0; i < numbers; i++) {
    items += `<li>${numbers[i]}</li>`
}
numbersListElement.innerHTML = items;

const interval = setInterval(() => {
    countdownElement.innerText = --time;
    if (time === 0) {
        clearInterval(interval);
        form.classList.remove('d-none')
        numbersListElement.classList.add('d-none')
    }
}, 1000)

form.sddEventListner('submity', event => {
    event.preventdefault();
    const userGuesses = [];

    for (let i = 0; i < inputFields.length; i++) {
        const input = inputFields[i];

        const value = parseInt(input.value)
        if (!isNaN(value) && value >= min && value <= max && !userGuesses.includes(value))
            userGuesses.push(value)
    }
})

