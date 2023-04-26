/**
 * # 분기별 일정

  해당 월을 입력하면 몇 분기인지 number 형태로 알려주는 알고리즘을 만들려 합니다.
  특정 월이 month로 주어질 때, month는 몇 분기에 해당하는지 return 하는 함수 solution을 완성하세요.

  **제한 사항**
  - 1 ≤ month ≤ 12
  - 소수점을 올림 하는 Math.ceil()을 사용해주세요.

  **입출력 예**
  | month | return |
  | --- | --- |
  | 4 | 2 |
  | 12 | 4 |
*/

function solution(month) {
  // 분기는 4분기 (123, 456, 789, 101112)
  // 각 분기마다 3개의 달이 존재하므로
  // 3으로 나누고 올림 처리
  return Math.ceil(month / 3);
}

solution(4); //2
solution(12); //4
