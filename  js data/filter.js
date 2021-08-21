// .filter ()

const numbers = [1,2,3,4]

const fruits = ['Apple','Banana','Blue','Cherry']

// // .map() 에서 배열안의 아이템을 순차적으로 매개변수로 받아서 새로운 배열을 만들어 불린데이터로 리턴해준다.
// const newNumbers = numbers.map(number => number < 3)
// console.log(newNumbers) //결과출력 => 화살표 함수 


// //filer 의 경우 map 가 다르게 특정 기준에 의해 필터링 해준다. 

// const b = numbers.filter(number=> {
//   return number < 3   //true 인 경우에만 값을 return 해줌 
// })
// console.log(b) //결과 출력

// console.log(numbers) // 원본 배열 출력

// find () , findIndex () 배열안의 원하는 요소를 정규표현식으로 찾을 수 있다
 // item 을 찾는 find 
const a = fruits.find(fruit => {
  return /^C/.test(fruit)
})
console.log(a)

// index를 찾는 findIndex 

const b = fruits.findIndex(fruit => /^C/.test(fruit))
console.log(b)


//.includes ()  // 배열내 포함된 요소 찾기 불린값 리턴 

const check = numbers.includes(3) //numbers 안에 숫자 3이 있는지 

console.log(check)

const srtcheck = fruits.includes('woojoung') // fruits 안에 'woojoung' 이라는 문자열이 있는지 

console.log(srtcheck)

// .push() .unshitf() ** 원본이 수정 될 수 있는 메소드 

numbers.push(5,6,7)  //원본 배열에 특정 인수 밀어 넣는다  맨 뒤.

console.log(numbers) 

numbers.unshift(0)

console.log(numbers)  // 원본 배열에 특정 인수를 '맨 앞 ' 에 밀어 넣는다.

// .reverse()

numbers.reverse()

console.log(numbers)

fruits.reverse()
console.log(fruits)
console.log(fruits)

// .splice() : 특정한 인덱스 요소를 삭제하는데도 쓰이지만 특정한 인덱스 사이에 끼어넣을 수도 있음

const testnumbers = [1,2,3,4]
testnumbers.splice(2,0 ,999)  
console.log(testnumbers)