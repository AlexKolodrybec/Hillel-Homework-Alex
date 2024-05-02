function generateCode(n) {
    let randomNumbers = ''; 
    
    for (let num = 0; num < n; num++) {
        randomNumbers += Math.floor(Math.random() * 10); 
    }
    
    return randomNumbers;
}

var randomNumbers = generateCode(6);

console.log(randomNumbers);
