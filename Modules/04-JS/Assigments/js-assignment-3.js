function factorial(anyNumber){  
    let product = 1;    
    for (let i = anyNumber; i > 0; i--) {           
    product *= i;        
    }   
    return product;
    }

console.log(factorial(5) === 120)
console.log(factorial(4) === 24)
console.log(factorial(1) === 1)