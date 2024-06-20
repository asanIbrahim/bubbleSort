let  value = [20,12,18,15,1,5,8,2,9,4,3,11,17]

function buubleSort(val){
  for(i=0; i<val.length ; i++){
    for(j=0; j<val.length ; j++){
      if(val[j] > val[j+1]){
        let tem = val[j]
        val[j] = val[j+1]
        val[j+1] = tem
      }
    }
  }
  return val
}

console.log(buubleSort(value));