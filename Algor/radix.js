function getDigit(num, place){
    return Math.floor(Math.abs(num)/ Math.pow(10,place)) % 10;
}
// console.log(getdigit(12345, 4)) // 5

function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) +1;

}
// console.log(digitCount(25)) // 2

function mostDigits(nums){

    let maxDigits = 0;
    for(let i =0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount((nums[i])))
    }
    return maxDigits; 
}

function radixSort(nums){
    console.log(nums);
    let maxDigitCount = mostDigits(nums)
    console.log(`Max Digit ${maxDigitCount}`);
    for(let k=0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i =0; i< nums.length; i++){
            digitBuckets[getDigit(nums[i], k)].push(nums[i]);

        }
        nums = [].concat(...digitBuckets);
        console.log(`Digit Buckets on digit loop ${k}: ${digitBuckets.map((i, pos)=>`Postion ${pos} and bucket contents as  ${i} \n` )}`); 
    }
    
    return nums;
}
console.log(radixSort([453,45444,1,5,403,54959,34]))