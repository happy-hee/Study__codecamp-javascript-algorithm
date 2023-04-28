/**
 * slice, startsWith - siri야 연관 검색어 보여줘~
 * https://dingco.notion.site/siri-2736803d83f14e88aeb015e65903002d
 */

/**
 * 사용자가 작성하려고 하는 검색어를 의미하는 문자열 **search**와
   추천해줄 검색어 목록을 의미하는 배열 **recommends**가 주어질 때
   검색어 목록에 전부 해당하는 가장 긴 문자열을 return하는 함수 solution을 완성하세요.
 */
function solution(search, recommends) {
  // search.slice(자르기를 시작할 인덱스, 자르기를 종료할 인덱스)
  for (let i = search.length; i > 0; i--) {
    // console.log(search.slice(0, i));
    const 검색어 = search.slice(0, i);
    for (let j = 0; j < recommends.length; j++) {
      const 단어 = recommends[j];
      // 각각의 단어가 검색어로 시작하는지 확인
      if (단어.startsWith(검색어) === false) {
        break;
      }

      if (j === recommends.length - 1) {
        return 검색어;
      }
    }
  }
  return "";
}
