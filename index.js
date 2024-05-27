const Values = [1, 2, 3, 1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9, 9, 8, 10, 10];

const res = Values.filter((x, val) => {
  return Values.indexOf(x) === val;
});

console.log(res); // output - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function removeDuplicate(str) {
  let newValue = [];

  str.forEach((val) => {
    if (!newValue.includes(val)) {
      newValue.push(val);
    }
  });
  return newValue;
}
console.log(removeDuplicate(Values)); // output - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let res1 = [...new Set(Values)]

console.log(res1);   // output - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

