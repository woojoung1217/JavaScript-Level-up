// 데이터 불변성 (Immutability)

// 원시데이터 : String , Number , Boolean , undefinend , null
// 참조형데이터 : Object , Array , Function 

  // let a = {k:1}
  // let b = {k:1}

  // console.log(a,b , a === b) // 1:4 false 
  // a.k = 7
  // b = a                      // a:1 b:1 
  // console.log(a,b , a === b)  // 1:1 true
  // a.k= 2
  // console.log(a,b, a === b) // a: 7 b: 1 false
  // let c = b
  // console.log(b,c, b === c) // b: 1 c: 1 true 

// 복사의 개념 = 1. 얕은복사   2. 깊은복사 

const user = {
  name : 'woojoung',
  age:24,
  emails : ['ywj981217@naver.com']
}

// // object assing 방식의 복사 
// const copyUser = Object.assign({}, user) 
// console.log(copyUser === user)

// user.age = 22 
// console.log(user)
// console.log('copyuser',copyUser)

// console.log('------')
// console.log('------')

// 전개연산자 방식의 복사 
const copyUser = {...user} 
console.log(copyUser === user)

user.age = 22 
console.log(user)
console.log('copyuser',copyUser)

console.log('------')
console.log('------')

// 배열의 object.assgin 방식 
const array = [1,2,3,4,5]

const newarray = Object.assign([],array)

console.log(array[1]= 3)

console.log(array)

console.log(newarray)




