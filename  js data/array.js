// Array 

const numbers = [1,2,3,4]  //숫자형 배열

const fruits = ['apple','banna','cherry',] //문자열 배열 


//.length  => 배열의 길이를 확인 하는 메소드 

console.log(numbers.length) // 배열의 길이를 확인
console.log(fruits.length) 

// .concat() => 배열의 합치는 메소드
 // * concat 는 원본의 배열데이터는 손상되지 않음 

console.log(numbers.concat(fruits)) 
console.log(numbers)
console.log(fruits)

// .forEach() 반복
 
fruits.forEach(function(element , index){
  console.log(element,index)
})

//.map() 

const a = fruits.forEach(function(fruit,index){
  console.log(`${fruit}-${index}`)
})
console.log(a)

const b = fruits.map(function(fruit ,index ){
  return {
    id: index,
    name: fruit
  }
})
console.log(b)

