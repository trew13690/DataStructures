function countDown(num){
    if(num <= 0){
        console.log("All donw!");
        return ;
    }
    console.log(num);
    num--;
    countDown((num))
}
countDown((3));