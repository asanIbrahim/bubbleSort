const value = [5,2,3,1,15,21,12,9,8,6,11,7]


function bubbleSort(str){

  for(i =0 ; i < str.length; i++){
    for(j=0 ; j< str.length ; j++){
      if(str[j] > str[j+1]){
        let tem = str[j]
        str[j] = str[j+1]
        str[j+1] = tem
      }
    }
  }

  return str
}

console.log(bubbleSort(value));