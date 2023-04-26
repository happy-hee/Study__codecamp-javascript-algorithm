/**
 * # 계산기가 이상해

  입력값이 num1과 num2로 주어질 때 입력된 값이
  각각 어떤 타입인지를 return하는 함수 solution을 만들어주세요.

  **제한 사항**
  - num1, num2의 길이는 1 이상 100 이하입니다.
  - num1, num2는 문자열 또는 숫자로 표기된 숫자입니다.

  **입출력 예**
  | num1 | num2 | return |
  | --- | --- | --- |
  | “9” | 10 | string number |
  | 19 | 1 | number number |
  | “2” | “14” | string string |
 */

function solution(num1, num2) {
  return typeof num1 + " " + typeof num2;
}

solution("9", 10); // string number
solution(19, 1); // number number
solution("2", "14"); // string string
