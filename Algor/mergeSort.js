function merge(arr, arr2){
    let result = [];
    let i = 0;
    let j = 0;
    while(i <  arr.length && j < arr2.length){
        console.log(`I: ${i} and J: ${j}`)
        if(arr2[j] > arr[i])
        {
            result.push((arr[i]))
            i++;
            console.log(`Comparing in second array ${arr2[j]} to ${arr[i-1]}`)
            console.log(`${result} \n`)

        }else{
            result.push(arr2[j])
            j++;
            console.log(`Second array element ${arr2[j-1]} is smaller then array element ${arr[i]}`)
            console.log(`${result} \n`)
        }
    }
    while(i < arr.length ){
        console.log(`Comparing remaining in array ${arr[i]}`)
        result.push(arr[i])
        i++
    }
    while(j < arr2.length ){
        result.push(arr2[j])
        j++;
    }

    return result;
}
// console.log(merge([100,3,7], [1,2,5,6]))

function mergeSort(arr){

    if(arr.length <=1) return arr;
    let midpoint = Math.floor((arr.length/2))
    let left = mergeSort(arr.slice(0,midpoint));
    let right = mergeSort(arr.slice(midpoint));
    return  merge(left,right);

}

console.log(mergeSort([10,24,76,73]))