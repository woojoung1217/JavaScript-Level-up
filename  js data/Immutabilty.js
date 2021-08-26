// 데이터 불변성 (Immutability)

// 원시데이터 : String , Number , Boolean , undefinend , null
// 참조형데이터 : Object , Array , Function 

let a = 1
let b = 4

console.log(a,b , a === b) // 1:4 false 
b = a                      // a:1 b:1 
console.log(a,b , a === b)  // 1:1 true
a = 7
console.log(a,b, a === b) // a: 7 b: 1 false
let c = 1
console.log(b,c, b === c) // b: 1 c: 1 true 

