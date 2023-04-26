/**
 * # 막내야 도넛 좀 사 와라

  인원이 n으로 주어지고,
  한 상자에 들어 있는 도넛의 개수가 donuts로 주어질 경우,
  모든 인원이 도넛 하나씩을 받을 수 있게 구매하려면
  몇 박스의 도넛을 구매해야 하는지 return하는 함수 solution을 완성하세요.

  **제한 사항**
  - n과 donuts는 number 타입으로 제공됩니다.
  - n과 donuts는 1 이상 250 이하 입니다.
  - 도넛은 항상 참여 인원의 수로 나누어떨어집니다.

  **입출력 예**
  | n | donuts | return |
  | --- | --- | --- |
  | 120 | 12 | 10 |
  | 40 | 8 | 5 |
 */

function solution(n, donuts) {
  return n / donuts;
}

solution(120, 12); //10
solution(40, 8); //5
