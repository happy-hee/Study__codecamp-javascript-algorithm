/**
 * # 점메추

  선배에게 받은 추천 메뉴 recommend가 매개변수로 주어질 때, 
  해당 추천 메뉴를 menu 상수에 선언 및 할당하여 return하는 함수 solution을 완성하세요.

  **제한 사항**
  - recommend는 2글자 이상 20글자 이하의 문자열 타입입니다.
  - return 값으로 사용되는 menu 변수명은 변경되어선 안 됩니다.
  - menu 상수의 최종값은 recommend 매개변수가 담겨야 합니다.

  **입출력 예**
  | recommend | return |
  | --- | --- |
  | “부대찌개” | “부대찌개” |
  | “파스타” | “파스타” |
 */

function solution(recommend) {
  const menu = recommend;
  return menu;
}

console.log(solution("부대찌개")); //부대찌개
console.log(solution("파스타")); //파스타
