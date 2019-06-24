function bubbleSort(arr){
    var noSwaps;
    var swaps =0;
 for(let i =arr.length; i > 0; i-- ){
    noSwaps = true;
     for(let j=0; j < i -1; j++){
        console.log(arr, arr[j], arr[j+1])
         if(arr[j] > arr[j+1]){
             let temp = arr[j];
             arr[j] = arr[j+1];
             arr[j+1] = temp;
             noSwaps = false;
            swaps++
         }
     }
     if(noSwaps) break;
    
 }
 console.log(`swaped : ${swaps}` );
 return arr;
}
console.log(bubbleSort([37,45,29,8,12,100,2020,3333,1111,23,1]))