function power(base, exponent){
    console.log(`Raising the base ${base} to the power of ${exponent}`)
    let result = 0;
    if(exponent === 0) return result
    if(exponent === 1 ) return base
   return  base *  power(base, exponent-1);
}
console.log(power(2,3))
2*2
2*2*2 