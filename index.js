// Given an integer x, return true if x is a palindrome,and false otherwise.

let input = -121;

function isPalindrome(str){
 let convertString = str.toString()
 let convertWord = convertString.split(' ').reverse().join('')
 return convertString === convertWord
}
 
console.log(isPalindrome(input));


function isPalindrome2(x){
  return x < 0 ? false: x=== +x.toString().split('').reverse().join('')
}

console.log(isPalindrome2(input));