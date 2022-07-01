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
