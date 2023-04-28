/**
 * toLowerCase, toUpperCase - 아빠가 내 일기장 몰래 훔쳐봤지?!?!
 * https://dingco.notion.site/5239ddadbad949f282f8024e58ff3eb8
 */

// 참고 1. 문자열도 배열처럼 index 로 접근할 수 있다.
// 참고 2. 문자열도 length, indexOf를 사용할 수 있다.
// 참고 3. 공백인 경우, 그대로 사용 ( " " -> " ")
// 참고 4. 소문자인 경우 어순을 거꾸로한 문자를 찾는다.

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

function solution(str) {
  let 해석본 = "";

  // 가져온 str 길이만큼 반복문
  for (let i = 0; i < str.length; i++) {
    /* 1. 가져온게 공백인 경우 */
    if (str[i] === " ") {
      해석본 += " ";
      //공백인 경우 다음 반복으로 넘어감
      continue;
    }

    /* 2. 대문자인 경우 */
    // 2 - 1) 대문자인지 확인
    // indexOf : 존재한다면 해당 index, 존재하지 않는다면 -1을 반환
    const 인덱스 = ALPHABET.indexOf(str[i]);
    // 해당 글자가 대문자인 경우
    if (인덱스 === -1) {
      // 2 - 2) 대문자인 경우 소문자로 변환
      const 대문자인덱스 = ALPHABET.indexOf(str[i].toLowerCase());
      // 2 - 3) 알파벳의 끝인덱스 -1 - 대문자인덱스
      // ==> ALPHABET.length - 1 : 끝인덱스 (알파벳 길이 - 1), 거기서 대문자 인덱스 순서만큼 빼면 뭐였는지 알 수 있음.
      // 2 - 4) 소문자로 바꿨던 값을 대문자로 변환
      해석본 += ALPHABET[ALPHABET.length - 1 - 대문자인덱스].toUpperCase();
    } else {
      /* 3. 소문자인 경우 */
      const 소문자인덱스 = ALPHABET.indexOf(str[i]);
      해석본 += ALPHABET[ALPHABET.length - 1 - 소문자인덱스];
    }
  }

  return 해석본;
}
solution("R dzmg gl vzg ggvlpylppr");
// "I want to eat tteokbokki"
solution("Xzgh ziv xfgv");
// "Cats are cute"
