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
