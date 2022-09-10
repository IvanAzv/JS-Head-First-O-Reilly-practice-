// Оголошуємо змінні для положення судна
let location1 = 3;
let location2 = 4;
let location3 = 5;
// змінні для дій користувача
let guess;
let hits = 0;
let guesses = 0;
// змінна для повідомлення, потоплений корабель чи ні
let isSunk = false;

// починається цикл
while (isSunk == false) {
    guess = prompt('Ready, aim, fire!', 'enter a number from 0-6');
    if (guess<0 && guess>6) {
        alert ('Please enter a valid cell number!')
    } else {
        guesses = guesses + 1;
        console.log(guesses)

        if (guess == location1 || guess == location2 || guess == location3) {
            alert('HIT!');
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert('You sank my battleship!');
            }
        } else
            alert('Miss:(');
    }
}
let stats = 'You took ' + guesses + ' guesses to sink the battleship, ' + 'wich means your shooting accuracy was ' + (3 / guesses);
alert(stats);


