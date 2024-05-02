function numbersSum() {
    let counter = 0; 
    
    return function(num) {
        counter += num;
        return counter;
    };
}


const sum = numbersSum();

console.log(sum(10)); 
console.log(sum(60)); 
console.log(sum(100)); 
console.log(sum(73));