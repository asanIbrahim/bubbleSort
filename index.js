const value = [1,2,3,4,5,6,7]
let nums = [-1,-100,3,99]
let water = [6,5,4,1,2,3]
let k =3;

const roateArray = (num,k) => {
  k = k % num.length
 num.unshift(...num.splice(num.length -k ,k))
 return num
}

console.log(roateArray(water,k));
//outputs
//[1, 2, 3, 6, 5, 4] output for roateArray
//[3, 99, -1, -100] output
///console.log(roateArray(value,k))
//output[5, 6, 7, 1, 2, 3, 4]