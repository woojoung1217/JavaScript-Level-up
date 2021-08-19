// Js 데이터

// String : "" , ' ' , ` ` 
// Number 
// Boolean : true , false 
//undefinded 
// null
// Array : []
// object : {}

 //객체 내용 안에서 indexOf 를 사용해 특정 문자열 을 찾을 수 있다.
    // 반환은 찾고자 하는 문자열의 첫번쨰 위치의 숫자를 반환 해준다. 없을 경우 -1 반환

const result = 'Hello world!'.indexOf('world')
console.log(result)


const str = '0123'

console.log(str.length) //length property 로 문자열의 길이를 알아낼 수 있음.
console.log('2334211114'.length) //문자열 자체로도 가능

const string = 'Hello world!'

console.log(string.indexOf('woojoung') !== -1) //문자열에 내용이 없으면 false 를 반환 
console.log(string.slice(0 ,3))   //문자 자르기 0 ~3 까지의 문자를 잘라 사용 
console.log(string.slice(6,11))

console.log(string.replace('world','woojoung'))  //문자열의 내용을 재배치 (바꾸는내용 , 새로 배치될 내용)
console.log(string.replace(' world!', '')) //문자열 삭제

const datastr = 'ywj981217@naver.com'

console.log(datastr.match(/.+(?=@)/)[0]) //정규표현식으로 문자열 매치 시킨다. 

