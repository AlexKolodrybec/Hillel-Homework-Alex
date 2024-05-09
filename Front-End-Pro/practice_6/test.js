function NumbersFunction(num = 6) {
    this.n = num; 

    this.validNumbers = function() {
        if (this.n < 0) { 
            console.log('Error');
            return false;
        }
        return true;
    };

    this.naturalNumbers = function(num = this.n) {
        if (!this.validNumbers()) return; 
        
        if (num === 1) {
            return 1;
        } else {
            return num + this.naturalNumbers(num - 1); 
        }
    };

    this.factorial = function(num = this.n) {
        if (!this.validNumbers()) return; 

        if (num === 0) {
            return 1;
        } else {
            return num * this.factorial(num - 1);
        }
    };

    this.numberDegree = function(m) { 
        if (!this.validNumbers()) return; 

        if (this.n < 0) { 
            console.log('Error');
            return;
        }
        let result = 1;
        for (let i = 0; i < m; i++) {
            result *= this.n; 
        }
        return result;
    }

    this.fibonacci = function(num = this.n) { 
        if (!this.validNumbers()) return; 
        
        if (num < 0) {
            console.log('Error');
            return;
        }
        if (num <= 1) {
            return num;
        } else {
            return this.fibonacci(num - 1) + this.fibonacci(num - 2);
        }
    };

}

let number = new NumbersFunction(6);

console.log(number.naturalNumbers()); 
console.log(number.factorial());
console.log(number.numberDegree(3));
console.log(number.fibonacci());



