/**
 * # 경마장 용지

  경마장 사이트를 방문했습니다.
  사이트의 경고 문구에 ‘5장까지 구매가 불가합니다.’라고 적힌 걸 발견했습니다.

  호기심이 많은 원두는 진짜 5장이 넘으면 구매하지 못하도록 개발되었는지 확인하기 위해
  수량을 올리는 버튼을 6번 클릭했습니다.

  하지만 예상과는 다르게 5장보다 많이 구매할 수 있었고, 사이트의 오류를 발견한 원두는 디버깅을 시작했습니다.

  디버깅 결과, 수량을 카운팅할 때 숫자가 아닌 문자열 “1”로 입력이 되어 
  덧셈했을 때 “1”+”1”+”1”로 연산이 되고 있음을 눈치챘습니다.

  원두는 제대로 된 연산을 위해 입력값을 무조건 숫자로 바꿔 출력되도록 함수를 만들어보기로 합니다.

  입력값이 input으로 주어질 때, 숫자로 변환해 return 해주는 함수 solution을 완성해주세요.

  **제한 사항**
  - input은 1 이상 100 이하의 문자열 또는 숫자입니다.

  **입출력 예**
  | input | return |
  | --- | --- |
  | 1 | 1 |
  | “2” | 2 |
 */
function solution(input) {
  return Number(input);
}

solution(1); // 1
solution("2"); // 2
