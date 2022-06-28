// 덧셈
console.log(1 + 8);

// 뺄셈
console.log(6 - 7);

// 곱셈
console.log(3 * 3 * 3);

// 나눗셈
console.log(5 / 2);

// 나머지
console.log(7 % 3);

//거듭제곱
console.log(3 ** 3);


//문자열 문자열은 ("") ('')로 감싸주어야한다
'소재현'
"소재현"
console.log('hello');
console.log("I'm Iron man");
//문자열 안에 작은따옴표도 있고 큰따옴표도 있을땐 \역슬래시를 활용하면된다
console.log("He said \"I'm Iron man\"")
//역슬래시가 읽기 불편하다면 가독성을 높여주는 방법으로는 양끝을 감싸는 따옴표를 따옴표가 아니라 백틱(`)으로 감싸주는 것이다
console.log(`He said "I'm Iron man"`)
//문자열도 더하기가 가능하다
console.log('hello' + 'world')

//불대수
// and 연산은 두 명제가 모두 참인지를 확인하는 것이다
// or 연산은 두명제 중 하나라도 참이 있는지를 확인하는것이다
// not 연산은 그냥 반대로 뒤집어 주는 역할을 한다

//불린형
console.log(2 > 1);
console.log(2 < 1);
console.log(3 >= 2);
//3은 2보다 크거나 같다
console.log(3 <= 3); //등호를 항상 부등호 뒤에 써야한다
//3은 3보다 작거나 같다
console.log(3 === 3);
//값이 서로 일치한다란 의미
console.log(3 !== 3);
//값이 서로 일치하지않는다

console.log('codeit' === 'codeit');
console.log('codeit' !== 'codeit');

//and 연산자 && shift+7=&
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//or 연산자 || shift+\=|
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//Not연산자 !
console.log(!true);
console.log(!false);
//반대의 반대 !!
console.log(!!true);
console.log(!!false);

//typeof 연산자 우리가 사용하는 값이 어떤 자료형인지 확인할 수 있다
console.log(typeof 101);
console.log(typeof 'Codeit');
console.log(typeof 'true');

//형 변환(type conversion)
// String, Number, Boolean
console.log(Number('10') + Number('5'));
console.log(String(10) +String(5));
//숫자 -> 문자
let x =123;
console.log(x);
console.log(String(x));
console.log(typeof x);
console.log(typeof String(x));

console.log('');

//불린 -> 문자
let y =true;
console.log(y);
console.log(String(y));
console.log(typeof y);
console.log(typeof String(y));

//문자 -> 숫자 
let z ='123';
console.log(z);
console.log(Number(z));
console.log(typeof z);
console.log(typeof Number(z));

//불린 -> 숫자
let b = true;
console.log(b);
console.log(Number(b));
console.log(typeof b);
console.log(typeof Number(b));

//문자 -> 불린
let c ='문자';
console.log(c);
console.log(Boolean(c));
console.log(typeof c);
console.log(typeof Boolean(c));

//숫자 -> 불린
let a =0;
console.log(a);
console.log(Boolean(a));
console.log(typeof a);
console.log(typeof Boolean(a));

//형 변환 (Type Conversion)
console.log('4' - true)

//템프릿  문자열 (template strings)
//template: 일정한 틀, 형식
let year = 2022;
let month = 3;
let day = 11;

console.log('생년월일은 ' + year + '년 ' + month + '월 ' + day + '일 입니다')
console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`)

 let myNumber = 3;

 function getTwice(d) {
    return d * 2;
 }
 console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}입니다.`)

 /*null과 undefined 코드를 작성할때 선언만 하고 아무런 것도 지정하지 않은 것인지 
 혹은 값이없음을 의도적으로 표현한 것인지가 이 둘을 구분하는 가장큰 차이점이다*/
 let codeit;
 console.log(codeit);
 codeit = null;
 console.log(codeit);