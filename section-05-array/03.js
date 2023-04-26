/**
 * # 좋은 질문? 지적? 아무튼 감사합니다~

  개발자 원두가 속한 개발팀에서는 매주 돌아가면서 공부한 것을 발표하는 스터디가 있습니다.
  발표 순서를 정하는 규칙은 아래와 같습니다.

  - 지난 발표에서 첫 번째로 발표한 사람은 마지막 순서로 발표
  - 새로 참여하는 사람은 첫 번째로 발표
  - 나머지 사람들의 발표 순서는 동일

  지난번 발표한 사람들의 닉네임이 순서대로 담긴 배열 prev와 
  새로 참여한 사람의 닉네임이 문자열 join으로 주어질 때
  이번 스터디의 발표 순서가 담긴 배열을 return하는 함수 solution을 완성해주세요.

  **제한사항**
  - join은 길이 1 이상 10 이하인 문자열입니다.
  - 배열 prev의 길이는 2 이상 10 이하입니다.

  **입출력 예**
  | prev | join | return |
  | --- | --- | --- |
  | ["sudo", "임금"] | "라떼" | ["라떼", "임금", "sudo"] |
  | ["아버", "광어", "안드로이드", "siri"] | "피카츄" | ["피카츄", "광어", "안드로이드", "siri", "아버"] |
 */

function solution(prev, join) {
  // [join, 나머지, 지난번 처음 발표자]

  // 1. 내가 했던 방법
  // // 지난번 처음 발표자
  // const prev_presentation = prev.shift();
  // // 지난번 처음 발표자를 가장 마지막으로 보냄
  // prev.push(prev_presentation);
  // // 새로 참여한 사람
  // prev.unshift(join);
  // return prev

  // 2. 인강에서 한 방법
  // 지난번 처음 발표자
  const prev_presentation = prev.shift();
  // spread 연산자 사용
  return [join, ...prev, prev_presentation];
}

solution(["sudo", "임금"], "라떼");
// ["라떼", "임금", "sudo"];
solution(["아버", "광어", "안드로이드", "siri"], "피카츄");
// ["피카츄", "광어", "안드로이드", "siri", "아버"];
