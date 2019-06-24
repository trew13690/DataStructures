
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
      return false;
    }
    let freCounter = {}
    let freCounter2 = {}
  
    for(let val of arr1){
      freCounter[val] = (freCounter[val] || 0) +1
     }
     for(let val of arr2){
       freCounter2[val] = (freCounter2[val] || 0) +1
     }
    console.log(freCounter);
    console.log(freCounter2);
    for(let key in freCounter){
      if(!(key **2 in freCounter2)){
        return false
      }
      if(freCounter2[key ** 2] !== freCounter[key]){
        return false;
      }
    }
  
    return true;
    }
  same([1,2,3,2,5], [1,4,9,4,25]);