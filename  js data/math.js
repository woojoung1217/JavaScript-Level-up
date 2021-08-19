const pi = 3.14159265358979

console.log(pi)

const str = pi.toFixed(2) //to fixed 소수 점  자리수를 입력해 그 뒤 내용을 삭제 

console.log(str) 
console.log(typeof str) 

const integer = parseInt(str)  // parseInt(전역변수) 를 사용해 문자열을 정수형으로 변환 할 수 있다.
const float = parseFloat(str) //  parsefloat 소수점 자리도 구할 수 있음

// math method 

console.log('abs :',Math.abs(-12)) // abs: 절대값

console.log('min:',Math.min(1,2,8,14)) // min : 최소값 

console.log('max:',Math.max(1,2,3,4)) // max : 최대 값

console.log('ceil:',Math.ceil(3.14)) // ceil : 올림 (정수단위로 )

console.log('floor:',Math.floor(3.14)) //floor : 내림(정수단위로)

console.log('round:',Math.round(3.14)) //round : 반올림 

console.log('random:',Math.floor(Math.random()*10))  // random : 난수 생성 