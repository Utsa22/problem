var numb = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const check = (array) => {
  let newArray = [];
  
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) == array.lastIndexOf(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const result = check(numb);
console.log(result);
