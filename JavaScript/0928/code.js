// function inception(){
//     inception();
// }
// inception();


function countDown(num){

    // base case
    if(num <= 0) {
        console.log("Done!");
        return;
    }

    console.log(num);
    num--;
    countDown(num);
}
countDown(10);

// ----------

function addUpTo(num){

    // base case
    if(num === 1) return 1

    return num + addUpTo(num - 1) // 100 + addUpTo(99)
}
// sumRange(100);


// fibo

function fib(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
}
fib(4);

function fiboIterative(n) {
    let arr = [0, 1];

    for(let i = 2; i <= n; i++){
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[n];
}

function fiboRecursive(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fiboRecursive(n-1) + fiboRecursive(n-2);
}

console.log(fiboIterative(4));
console.log(fiboRecursive(4));



// factorial
// 5! = 5 * 4 * 3 * 2 * 1

function factorialIterative(n){

    let product = 1;
    
    for(let i =2; i<= n; i++){
        product *= i;
    }

    return product;
}


function factorialRecursive(n){
    if(n === 2) return 2;

    return n * factorialRecursive(n-1);
}


console.log(factorialIterative(5));
console.log(factorialRecursive(5));
