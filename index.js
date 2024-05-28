const Values = [
  { id: 1, Employee: "Asan", Mark: 100 },

  { id: 1, Employee: "Asan", Mark: 100 },

  { id: 2, Employee: "Shami", Mark: 110 },

  { id: 2, Employee: "Shami", Mark: 110 },

  { id: 3, Employee: "Faheem", Mark: 105 },

  { id: 3, Employee: "Faheem", Mark: 105 },
];


const res = Values.filter((x,val) => {
  return Values.findIndex((Obj) => x.id === Obj.id && x.Employee === Obj.Employee && x.Mark === Obj.Mark) === val
})

console.log(res);