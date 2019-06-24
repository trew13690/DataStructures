function pivot(arr, start=0, end= arr.length+1){
    console.log(arr)
    function swap(array, i, j){
        var temp = array[i];
        array[i] = array[j];
        array[j]= temp;
    }
     let currentPivot = arr[start];
     let swapIndex = start;
     console.log(`Current Pivot is ${currentPivot}`)
     for(let i = start+1 ; i < arr.length; i ++){
            if(currentPivot > arr[i]){
           
                swapIndex++;
                swap(arr, swapIndex, i)
                console.log(arr)
            }
        
     }
     swap(arr, start, swapIndex);
     console.log(arr)
     return swapIndex;
}
// console.log(pivot([4,8,2,1,5,7,6,3])) //3

function quickSort(arr, left=0, right=arr.length-1){
   if(left< right){
    let pivotIndex = pivot(arr, left, right);
    //left 
    quickSort(arr, left, pivotIndex-1);
    //right
    quickSort(arr, pivotIndex+1, right);
   }
return arr;
}
console.log(quickSort([4,6,9,1,2,5,3]))