

const user = {
  name : 'woojoung',
  age : 24,
  email : 'ywj9812187@naver.com'
}

// 구조 분해 할당이란 지정된 객체 데이터 안에서 내가 원하는 객체요소만 꺼내서 사용할 수 있는 것을 말한다.

const { name, age, email , address} = user  //선언 [구조분해]

// example 

console.log(`사용자의 이름은 ${name} 입니다.`)  // user 객체의 선언 된 내용이 호출됨 
console.log(`${name}의 나이는 ${age}세 입니다.`)
console.log(`${name}의 이메일 주소는${email} 입니다.`)


//example 2

const fruits = ['Apple','Banana', 'Cheery'] // 배열데이터의 경우

const [a,b,c,d] = fruits

console.log(a,b,c,d)  
