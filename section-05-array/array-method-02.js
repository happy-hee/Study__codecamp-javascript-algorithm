/**
 * 배열 자르기 - splice, slice 메서드
 */

const arr = [0, 1, 2, 3, 4];

// arr.splice(시작인덱스, 자를 개수);
arr.splice(1, 2); //인덱스 1부터 2개를 제거하겠다. -> 1, 2를 제거
// arr : [0, 3, 4] ****** 원본배열을 건드려서 수정함 ******

// 변수에 담으면 제거된 요소를 확인할 수 있다.
const 자른거1 = arr.splice(1, 2);
// 자른거1 : [1,2]

//arr.slice(시작인덱스, 끝인덱스);
arr.slice(1, 3); //인덱스 1부터 인덱스 3'전'까지 가져옴
// arr: [0, 1, 2, 3, 4] ****** 원본배열은 건드리지 않음 ******

const 자른거2 = arr.slice(1, 3);
//자른거2 : [1,2]

//만약 끝 인덱스를 지정하지 않으면 시작 인덱스 ~ 배열의 끝까지를 담은 배열을 결과로 돌려준다.