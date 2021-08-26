
// 전개 연산자 (Spread)

const fruits = ['Apple','Banana','Cherry','orange'] //array data 생성 
  
console.log(fruits)  // 출력 

console.log(...fruits)  // array 안의 인덱스 요소의 데이터만 출력 
 // 출력 결과 : Apple , Banana , Cherry  => 문자데이터만 출력됨 

const toObject = (a,b,...c)=> ({ a, b ,c}) //배열데이터를 인수로 받아서 전개 연산자를 통해 출력 

console.log(toObject(...fruits))
 // 전개 연산자를 사용하면 함수내 매개변수가 지정되어 있지 않아도 ...전개 연산을 사용하면 나머지로 모두 할당 된다.
