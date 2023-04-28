/**
 * replaceAll - 야 넌 마춤뻡 하나 못 맞추냐
 * https://dingco.notion.site/c46f8261ca724aba8d8b266f2aba6229
 */

// 1. a 가 전부 q로 작성됨
// 2. a와 q를 함께 쓰고있는 문장은 없음.
// 3. 오타가 있을시 수정된 문장, 오타가 없다면 -1 return
// 참고 : 대/소문자를 구분해야 한다.

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
function solution(str) {
  // 문장에 q도 Q도 포함되지 않는 경우 -1 return
  if (str.includes("q") === false && str.includes("Q") === false) {
    return -1;
  }

  // str.replaceAll(찾을문자, 바꿀문자)
  // ==> 이 메소드는 "원본 메소드를 바꾸지 않고", 결과만 주는 메서드라서
  // 변수에 담거나 바로 return을 해줘야 한다.
  const newStr = str.replaceAll("q", "a").replaceAll("Q", "A");
  return newStr;
}

solution("It works, I don't know why.");
// -1
solution(
  "Qre you sleeping? Yes, now shut up. I know how to fix thqt bug on line 255."
);
// Are you sleeping? Yes, now shut up. I know how to fix that bug on line 255.
