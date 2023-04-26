/**
 * # 벌레 퇴치

  개발자 원두는 새로운 기능을 개발하는 중입니다.
  작성한 코드 중에 버그를 찾아 제거하세요. 

  배열 feature에는 문자열 ‘code’ 또는 ‘bug’가 담겨있습니다. 
  feature에 ‘bug’가 있다면 제거한 배열을 return하는 함수 solution을 완성해주세요.

  **제한사항**
  - 배열 feature 안에 있는 ‘bug’의 개수는 0개 또는 1개입니다.
  - 배열 feature의 길이는 1 이상 10 이하입니다.

  **입출력 예**
  | feature | return |
  | --- | --- |
  | ["code", "bug", "code"] | ["code", "code"] |
  | ["code", "code"] | ["code", "code"] |
 */

function solution(feature) {
  // 1. 배열의 버그의 위치 찾기
  const bug_index = feature.indexOf("bug");
  // 버그가 없을 경우는 기존 배열 return
  if (bug_index === -1) {
    return feature;
  }

  // 2. 그 버그를 제거한 배열 구하기
  // 2-1) splice 사용
  // feature.splice(bug_index, 1);
  // return feature;

  // 2-2) Slice 사용
  // 버그의 인덱스 전까지의 요소들
  const arr1 = feature.slice(0, bug_index);
  // 버그의 인덱스 이후부터 끝까지의 요소들
  const arr2 = feature.slice(bug_index + 1);

  // return arr1.concat(arr2);
  return [...arr1, ...arr2];
}

solution(["code", "bug", "code"]); // ["code", "code"]
solution(["code", "code"]); // ["code", "code"]
