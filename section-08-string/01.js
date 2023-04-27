/**
 *  split, join - 우 to the 영 to the 우
 *  https://dingco.notion.site/to-the-to-the-9724a8d5b6774bd8bc5e6555ee94dc1b
 */

function solution(word) {
  // split : string을 배열로 만들어줌
  // reverse() : 배열 순서를 뒤집는 메서드
  // join() : 괄호 안에 있는 글자로 배열들을 이어서 string으로 연결
  const reverseWord = word.split("").reverse().join("");
  // if(word === reverseWord) {
  //   return true
  // }
  // return false
  return word === reverseWord;
}

solution("역삼역"); // true
solution("고양이"); // false
