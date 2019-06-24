function binarySearch(arr, search){
    let left = 0
    let right = arr.length -1;
    let middle = 0;
    console.log(`The left pointer is at ${left} and the pointer to the right is ${right} and the middle pointer is at ${middle}`)
    while(left <= right){
        middle = Math.floor((left+ right)/2)
        if(search === arr[middle]) return middle;
    search > arr[middle] ? left = middle +1 : right = middle -1;

    }
    return -1
}
console.log(binarySearch(['alex','bear', 'cat', 'dog', 'zebra'], 'bear'))