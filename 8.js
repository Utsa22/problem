var num = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const maximum= (array) => {
    let max=array[11];
    for(let i=0;i<=array.lenght;i++){
        if(array[i] > max){
            max=array[i];
        }
    }
    return max;
}
const result=maximum(num);
console.log(result);