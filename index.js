const value = [1,2,3,4,5,6,7]
let nums = [-1,-100,3,99]
let k =2

function roateArray(num,k){
  k = k % num.length
 num.unshift(...num.splice(num.length -k ,k))
 return num
}

console.log(roateArray(nums,k));
// output [3, 99, -1, -100]
// console.log(roateArray(value,k));

//output [5, 6, 7, 1, 2, 3, 4]