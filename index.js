let  values = [20,12,18,15,1,5,8,2,9,4,3,11,17]

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
//outputs-[1, 2, 3, 4, 5, 8, 9, 11, 12, 15, 17, 18, 20]
console.log(buubleSort(values))