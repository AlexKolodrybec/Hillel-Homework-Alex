let userNumber = prompt("Введіть ціле число:");

if (userNumber) {
    let num = 1;

    while (num * num <= userNumber && num <= 100) {
        console.log(num * num);
        num++;
    }
 
}

