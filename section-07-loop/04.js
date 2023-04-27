/**
 * # map - 가족같은 회사님의 초대에 수락하시겠습니까?
 * https://dingco.notion.site/bac95a670aad40488985cb41aadc1b05
 */

function solution(nameList) {
  const newNameList = nameList.map((name) => `${name}님`);
  return newNameList;
}

solution(["병건", "호민", "풍"]);
// ["병건님", "호민님", "풍님"]
