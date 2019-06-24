// O(n^2) really bad!!!!

// function fib(n){
//     if(n <= 2) return 1;
 
//     return fib(n-1) + fib(n-2);
// }

// console.log(fib(50))

function fib2(n, memo=[]){
    if(memo[n] !== undefined) return memo[n]
    if(n <=2) return 1;
    var res = fib2(n-1, memo) + fib2(n-2, memo);
    memo[n] = res;
    return res;
}
console.log(fib2())