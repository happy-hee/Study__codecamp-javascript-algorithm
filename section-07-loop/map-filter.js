/**
 * 반복문 (map, filter)
 */

// 1. map (배열의 반복문)
// 배열.map(함수);

const week = ["월", "화", "수", "목", "금"];

// 월화수목금 이 day에 들어옴
const result = week.map((day) => day + "요일");
console.log(result);
// [ '월요일', '화요일', '수요일', '목요일', '금요일' ]

// 사용 요도 : 새로운 배열을 만들 때, 반복해서 실행할 로직을 적어서 활용

// 2. filter
// 배열.filter(함수);
// 주어진 테스트를 통과하는 것들만 걸러서 새로운 배열로 만들어줌

const numList = [1, 2, 3, 4, 5];
const result2 = numList.filter((num) => num % 2 === 0);
console.log(result2);
// [2,4]
