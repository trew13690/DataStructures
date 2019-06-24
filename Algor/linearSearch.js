// To find a element in a array one way is to check each element in the array;
// This is O(n)
//  If you have sorted data there is a better approach 
// =============================
// Linear Search 
// ==============================
//
function linearSearch(num, arr ){
    
    for(let i =0; i < arr.length; i++){
        if(arr[i] === num )return i
    }
    return -1;


}

console.log(linearSearch(15, [10,15,20,25,30]))