function numberFunction() {
    let userNumber;

    for (let i = 0; i < 10; i++) {
        userNumber = prompt("Введіть число більше 100:");

        userNumber = Number(userNumber);

        if (userNumber > 100) {  
            return userNumber;
        } else {
            console.log("Введіть число більше 100");
        }
    }
}

let number = numberFunction();
console.log(number);