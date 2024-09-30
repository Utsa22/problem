var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const friend=(array) => {
    let bigName = array[4];

    for(let i=0;i<array.length;i++){
        const element=array[i];
        if(array[i].length == bigName.length){
            bigName = element;
        }
    }
    return bigName;
}

const result = friend(friends)
console.log(result);