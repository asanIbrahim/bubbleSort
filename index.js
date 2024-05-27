const RolloNO = [12, 13, 5, 7, 2, 1, 6, 8, 9, 11, 3, 4, 54, 45, 33, 23, 18];

function bubbleSort(str) {
  for (i = 0; i < str.length; i++) {
    for (j = 0; j < str.length; j++) {
      if (str[j] > str[j + 1]) {
        let tem = str[j];
        str[j] = str[j + 1];
        str[j + 1] = tem;
      }
    }
  }
  return str;
}

console.log(bubbleSort(RolloNO));

// output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 18, 23, 33, 45, 54]
