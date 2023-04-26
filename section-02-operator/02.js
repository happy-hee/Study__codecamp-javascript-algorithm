/**
 * # 운수 좋은 날

  현재 자신이 가진 돈 6,000원과 출근길에 주운 돈 n원을 합쳐
  팀원들의 커피를 사주려 합니다.
  4,100원짜리 아메리카노를 주문하기로 했습니다.

  출근길에 주운 돈 n이 매개변수로 주어지고, 팀원의 수가 members로 주어질 경우
  원두에게 남은 돈이 얼마인지 return하는 함수 solution을 완성하세요.

  **제한 사항**
  - n과 members는 number타입으로 제공됩니다.
  - 0 < n ≤ 1,000,000
  - 0 < members ≤ 20
  - 거스름돈은 항상 0 이상의 정수입니다.
 */

function solution(n, members) {
  // // 내가 가진 돈
  // const my_money = n + 6000;
  // // 음료 값
  // const americano = 4100;
  // // 낼 돈
  // const give_money = members * americano;
  // //남은 돈
  // const left_money = my_money - give_money;
  // return left_money;

  // 위 코드를 더 간결하게 코드 작성
  return n + 6000 - members * 4100;
}

solution(50000, 12); //6800
solution(35000, 9); //4100
