function Calc(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    
    this.getPlus = function() {
        return this.num1 + this.num2;
    };

    this.getMinus = function() {
        return this.num1 - this.num2;
    };
}

let calc1 = new Calc(7, 2);
let calc2 = new Calc(5, 7);

console.log("Додавання:", calc1.getPlus());
console.log("Віднімання", calc2.getMinus());