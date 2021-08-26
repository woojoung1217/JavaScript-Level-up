// 데이터 불변성 (Immutability)

// 원시데이터 : String , Number , Boolean , undefinend , null
// 참조형데이터 : Object , Array , Function 

let a = {k:1}
let b = {k:1}

console.log(a,b , a === b) // 1:4 false 
a.k = 7
b = a                      // a:1 b:1 
console.log(a,b , a === b)  // 1:1 true
a.k= 2
console.log(a,b, a === b) // a: 7 b: 1 false
let c = b
console.log(b,c, b === c) // b: 1 c: 1 true 

