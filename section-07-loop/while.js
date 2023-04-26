/**
 * 반복문 (while)
 */

let age = 16;

// 조건이 false가 될 때까지 반복
while (age < 20) {
  console.log(age, "입장불가");
  age = age + 1;
}
console.log("끝");

// continue 를 사용한 조건문
while (age < 20) {
  age = age + 1;
  // continue : 조건문이 true일 경우 아래가 실행되지 않고 다시 while문의 조건으로 넘어감(skip 느낌)
  // 나이가 19가 되는 경우 넘어감 ***
  if (age === 19) continue;
  console.log(age, "입장불가");
}
console.log("끝");

// break 를 사용한 조건문
while (age < 20) {
  age = age + 1;
  // break : 조건문이 true일 경우 while문 자체가 종료
  // 나이가 19가 되는 경우 while문 종료 ***
  if (age === 19) break;
  console.log(age, "입장불가");
}
console.log("끝");
