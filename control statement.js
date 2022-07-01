// if문 (if statement)
let temperature = 1;
if (temperature <= 0) {
  console.log("물이 업니다."); //만약 조건부분이 충족되면 동작 부분을수행해라
} else {
  console.log("물이 얼지 않습니다.");
}

//else if문
//if문이 중첩될 때 else다음 if문이 바로 이어지는 경우에는 else if문이라는걸 활용할수 있다 또한 else if문을 사용함으로써 가독성 또한 높일수있다
let temperature = 140;

if (temperature <= 0) {
  console.log("물이 업니다.");
} else {
  if (temperature < 100) {
    console.log("물이 얼지도 끓지도 않습니다.");
  } else {
    if (temperature < 150) {
      console.log("물이 끓습니다.");
    } else {
      console.log("물이 모두 수중기가 되었습니다.");
    }
  }
}

if (temperature <= 0) {
  console.log("물이 업니다.");
} else if (temperature < 100) {
  console.log("물이 얼지도 끓지도 않습니다.");
} else if (temperature < 150) {
  console.log("물이 끓습니다.");
} else {
  console.log("물이 모두 수중기가 되었습니다.");
}

//서열정리
// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = "male";

// 호칭을 담은 변수
let callOlderBrother = "형";
let callOlderSister = "누나";
let callFriend = "친구";
let callYoungerSister = "여동생";
let callYoungerBrother = "남동생";

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
function whatShouldICallYou(yourAge, yourGender) {
  // 여기에 코드를 작성해 주세요.
  if (myAge === yourAge) {
    // 나와 나이가 같은 경우
    return callFriend;
  } else if (myAge > yourAge) {
    // 상대방이 나이가 더 적은 경우
    if (yourGender === "male") {
      // 상대방 성별이 남성인 경우
      return callYoungerBrother;
    } else if (yourGender === "female") {
      // 상대방 성별이 여성인 경우
      return callYoungerSister;
    }
  } else {
    // 상대방이 나이가 더 많은 경우
    if (yourGender === "male") {
      // 상대방 성별이 남성인 경우
      return callOlderBrother;
    } else if (yourGender === "female") {
      // 상대방 성별이 여성인 경우
      return callOlderSister;
    }
  }
}
// 테스트 코드
let result1 = whatShouldICallYou(25, "female");
let result2 = whatShouldICallYou(20, "male");
let result3 = whatShouldICallYou(26, "female");
let result4 = whatShouldICallYou(30, "male");
let result5 = whatShouldICallYou(31, "female");

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

// switch문 (swith statement) 어떤 값을 입력했는지에 따라 다르게 동작하는 문법
switch (비교할_값) {
  case 조건값_1:
    동작부분;
    break;
  case 조건값_2:
    동작부분;
    break;
  default: //else문과 비슷한 역할
    동작부분;
}
//swich문 어떤 대상과 조건값이 일치하는지를 확인하고 그결과에 따라 다른동작이 필요할때는 swith문을 활용할수 있다
let myChoice = 2;
switch (myChoice) {
  case 1:
    console.log("토끼를 선택한 당신, ...");
    break;
  case 2:
    console.log("고양이를 선택한 당신, ...");
    break;
  case 3:
    console.log("코알라를 선택한 당신, ...");
    break;
  case 4:
    console.log("강아지를 선택한 당신, ...");
    break;
  default: //else문과 비슷한 역할
    console.log("1에서 4사이의 숫자를 선택해 주세요.");
}

//for문 (for statement)
for (let i = 1; i <= 10; i++) {
  //(초기화부분; 조건부분; 추가동작부분)
  console.log(`${i}코드잇 최고!`); //동작 부분
}

//for문 연습하기
function printTriangle(height) {
  // 여기에 코드를 작성해 주세요.
  let message = "";
  for (let i = 0; i < height; i++) {
    message += "*";
    console.log(message);
  }
}

// 테스트 코드
console.log("높이: 1");
printTriangle(1);

console.log("높이: 3");
printTriangle(3);

console.log("높이: 5");
printTriangle(5);
//이렇게 파라미터의 숫자 값에 따라 '*'을 출력하는 코드를 완성했다면 이제 반복할 때마다 '*'의 개수를 증가시켜주어야 하는데요. 그러기 위해서, 콘솔에 '*'을 바로 출력하는 게 아니라 for문이 반복되기 전에 message라는 변수를 만든 다음 for문이 반복될 때마다 message에 '*'을 하나씩 추가하면서 콘솔에 message를 출력한다면

//while문 (while statement)
while (조건부분) {
  동작부분;
}
//while문 (while statement)
let i = 30;

while (i % 7 !== 0) {
  i++;
}

console.log(i);

//break와 continuec차이
//break는 반복문에 조건 부분과 상관없이 반복이 실행되는 도중에 빠져나갈 수 있다
//continue는 동작 부분을 한번 건너뛰는 것이다 다시말해 continue를 만나게 되면 그 아래 코드들은 실행 되지 않고 바로 다음단계로 넘어가는것이다
let i = 1;

while (i <= 20) {
  console.log(i);
  if (i == 7) {
    break;
  }
  i++;
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
// 구구단 만들기
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

//피보나치 수열
let current = 1;
let previous = 0;

for (let i = 1; i <= 50; i++) {
  console.log(current);
  let temp = previous; // previous를 임시 보관소 temp에 저장
  previous = current;
  current = current + temp; // temp에는 기존 previous 값이 저장돼 있음
}
