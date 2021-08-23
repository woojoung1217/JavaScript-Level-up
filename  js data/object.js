// // object 


// // Object.assign()
//  // 하나 이상의 출처 객체로부터 대상 객체로 속성을 복성 할 떄 사용 여기서는 target이 대상객체 source는 출처객체

  
// const target = { a: 1 , b : 2};  // a = 1  b = 2 
// const sources = { b : 3 , c : 4 , d: 5 , e: 13}  // b = 3  c = 4 


// const returndeTarget = Object.assign(target , source);
//  //새로운 변수안에 Object.assign() 사용하여 인수로 받아온다. * 덮어 씌운다.
// console.log(returndeTarget);

// //2 

const userAge = { 
  name : 'woojoung',
  age : 24
}

const userEmail = {
  name : 'woojoung',
  email : 'ywj981217@naver.com'
}

const newTarget = Object.assign(userAge, userEmail);
  console.log(newTarget)  
  console.log(userAge)
  console.log(userEmail)
  console.log(newTarget===userAge)  //결과 true

  const check = { k:123}
  const check2 = {k:123}
  const ab =Object.assign(check,check2)


  console.log(ab===check)  // 결과 false 