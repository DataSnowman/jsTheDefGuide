let primes = [2,3,5,7,11];

function sum(array) {
    let sum = 0;
    for(let x of array) {
        sum+=x
    }
    return sum;
}

answer = sum(primes);

//document.body.innerHTML = '<h1>Working with' + answer + 'sum of array </h1>';
console.log("The Sum of the numbers in the Array are: " + answer);