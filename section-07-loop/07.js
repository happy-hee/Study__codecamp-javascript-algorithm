/**
 * 연습문제 - 선배~ 밥 사주세요~!
 * https://dingco.notion.site/24d1cf87d82e4cfbacd087c35af7608f
 */

function solution(map) {
  // map의 length만큼 반복
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      // map[i] 중 1이 포함되어 있는 것을 찾음
      if (map[i][j] === 1) {
        return `선배님은 ${i + 1}번째 방, ${j + 1}번 자리에 있습니다.`;
      }
    }
  }
  return "선배님을 찾을 수가 없습니다.";
}

solution([[0, 0], [0], [0, 1, 0], [0, 0]]);
// “선배님은 3번째 방, 2번 자리에 있습니다.”
solution([[0], [0, 0], [0], [0, 0], [0, 0]]);
// “선배님을 찾을 수가 없습니다.”
