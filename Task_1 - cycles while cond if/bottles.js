
document.write('99 bottles song look in console');
let word = 'bottles'; 
let count = 99;
// виконується умова циклу, поки каунт більше 0, вивести в консоль текст.
while (count > 0) {
    console.log(count + '' + word + ' of beer on the wall');
    console.log(count + '' + word + ' of beer');
    console.log('Take one down, pass it around,');
    // каунт стає меншим на одиницю
    count = count - 1;
    // якщо виконується умова іф, вивести в консоль текст. Так як умова іф - тру, повертаємось на початок циклу
    if (count > 0) {
        console.log (count + '' + word + ' of beer on the wall')
    } else {
        console.log('No more ' + word + ' of beer on the wall')
    }
}
