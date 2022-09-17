function calculateArea(r) {
    let area;
    if (r<=0) {
        return 0;
    } else {
        area = Math.PI * r * r;
        return area;
    }
}

userAnswer = prompt('Будь ласка, введіть число', 'від 0 до 99');
console.log(calculateArea(userAnswer)); // для перевірки з алерт
progDecision = calculateArea(userAnswer);
alert('The area is: ' + progDecision);

// let radius = 5.2;
// let theArea = calculateArea(radius);
// console.log('The area is: ' + theArea)

// console.log(calculateArea(5));
// x = +prompt();
// console.log(calculateArea(x))