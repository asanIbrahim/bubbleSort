const value = [1,2,3,4,5,6,7]
let k =3

function roateArray(num,k){
  k = k % num.length
 num.unshift(...num.splice(num.length -k ,k))
 return num
}

console.log(roateArray(value,k));

//output [5, 6, 7, 1, 2, 3, 4]