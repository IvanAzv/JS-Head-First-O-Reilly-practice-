function bake(degrees) {
    let message;
    if (degrees>500) {
        message = "I'm not a nuclear reacrtor!";
    } else if (degrees < 100) {
        message = "I'm not a refrigerator!";
    } else {
        message = "That's a very comfortable temperture for me!";
    }
    return message;
}

let statut = bake(350);
console.log(statut);
console.log(bake(99));