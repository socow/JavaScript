// 할당 연산자 (Assignment operators)
let name = "코드잇";
let x = 5;
//javascript에서는 이 등호를 ()=)할당 연산자 라고 부른다 오른쪽에 있는 피연산자를 왼쪽에 있는 피연산자에 할당(지정,정했다,대입했다)한다라는 의미이다
x = x - 2;
console.log(x);

//할당 연산자와 결합해서 자주 쓰이는 표현을 더 간략하게 쓸 수 있게 해주는 연산자를 복합 할당 연산자이다
// 다음 두 줄은 같습니다
x = x + 1;
x += 1;

// 다음 두 줄은 같습니다
x = x + 2;
x += 2;

// 다음 두 줄은 같습니다
x = x * 2;
x *= 2;

// 다음 두 줄은 같습니다
x = x - 3;
x -= 3;

// 다음 두 줄은 같습니다
x = x / 2;
x /= 2;

// 다음 두 줄은 같습니다
x = x % 7;
x %= 7;

// 증가 감소 연산자
/*변수의 값을 1씩 증가시키거나 감소시킬 때는 복합 할당 연산자보다 더 간략하게 쓸 수 있는 증가연산자, 감소연산자를 사용할 수도 있습니다.
더하기 기호를 연달아 쓰거나(++), 빼기 기호를 연달아 쓰면 된다(—).*/
// 다음 세 줄은 같은 의미입니다.
x = x + 1;
x += 1;
x++;

// 다음 세 줄은 같은 의미입니다.
x = x - 1;
x -= 1;
x--;

//함수의 실행순서
function spauare(n) {
  return n * n;
}
console.log("함수 호출 전");
console.log(spauare(3) + spauare(4));
console.log("함수 호출 후");

function expressMultiplication(x, y) {
  console.log(`${x} * ${y} = ${x * y}`);
}

expressMultiplication(3, 4);
expressMultiplication(3, 2);
expressMultiplication(7, 5);
expressMultiplication(8, 9);
expressMultiplication(5, 5);
expressMultiplication(9, 9);

//return문 제대로 이해하기
function square(x) {
  console.log("return 전");
  return x * x;
  console.log("return 후"); //DeaD code
}
console.log("함수 호출 전");
console.log(square(3));
console.log("함수 호출 후");

//retuen과 console.log의 차이
function printSqiare(x) {
  console.log(x * x);
}

function getSquare(x) {
  return x * x;
}

console.log(printSqiare(3));

//옵셔널 파라미터  '스프라이트'라는 기본값을 가지는 옵셔널 파라미터로 만들어 줘야 합니다.
function orderSetMenu(sandwich, drink = "스프라이트") {
  console.log(`주문하신 ${sandwich}, ${drink} 세트메뉴 나왔습니다!`);
}

orderSetMenu("코드웨잇 클럽");
orderSetMenu("터키베이컨 아보카도", "코카콜라");
orderSetMenu("코드웨잇 멜트");
orderSetMenu("이탈리안 비엠티", "닥터페퍼");
orderSetMenu("에그마요", "환타 오렌지");

//변수의 scope: 범위, 영역
let p = 3; // 글로벌 변수, 전역변수 로컬 변수와는 반대로 이렇게 블록문 밖에서 선언한 변수는 블록문 안에서도 사용가능하다

function myFunction() {
  //블록문
  let p = 5; // 로컬 변수, 지역변수 로컬변수는 블록문 내에서만 사용할 수 잇는 변수이다
  console.log(p); //블록문 내에서 변수를 사용하게 되면 가장 먼저 로컬변수가 있는지 확인한 다음 없을경우에는 글로벌변수를 확인한다
}
myFunction();
console.log(p);

//상수(constant) 상수는 이름을 지을때 대문자와 밑줄로 작성하는 암묵적인 규칙이있다
let pi = 3.14; //원주율
let radius = 0; //반지름
//일정한 값을 유지하는 것들은 상수로 표현하는것이 좋다 변수를 선언 할때 let을 대신에 const라는 키워드를 사용
const MY_NAMER = 3,14;
/*변수가 들어갈 자료형이 아직 결정되지 않았거나 일정하지않을 경우에는 null값을 할당하는게 좋지만
빈 값을 표현하면서 여기 있는 이변수에 일정하게 들어갈 값의 자료형도 간접적으로 표현하고 싶을때는
뮨자열일경우에 빈문자열을 '' 숫자의 경우에는 0 을 할당해 주는 방법이있다*/
