function sum(array) {
    let sum = 0;
    for(let x of array) {
        sum+=x
    }
    document.body.innerHTML = '<h1>Working with' + sum + 'sum of array </h1>';
}

