// keys => 객체데이터 내의 '키'값에 접근 하는 전역객체

const user = { 
  name : 'woojoung',
  age : 24,
  email : 'ywj981217@naver.com'
}

//새로운 변수에 object.keys로 (객체데이터)를 할당함
const keys = Object.keys(user)
  
console.log(keys)
//  결과 => ['name' , 'age' ,'email']

console.log(user['email'])  // =>ywj981217@naver.com

// 속성 값도 접근하여 콘솔에 출력할 수 있음

const value =Object.values(user)

console.log(value)

const values = keys.map(key => user[key])  //callbackfunction 
console.log(values)

