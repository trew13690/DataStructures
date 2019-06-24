const vals = {1: 1, 2: 1}
function fib(n)
{
    if(vals[n] !== undefined ) return vals[n]

    console.log(`Calculating Fibonacci sequence ${n} and the sum is ${(n-1) + (n-2)}`)
    vals[n] = fib(n-1) + fib(n-2); 
    return vals[n];

 }
 console.log(fib(50));

