/**
 * 배열에 요소 추가/제거하기 - push, pop, unshift, shift 메서드
 */
const arr = [1, 2, 3, 4];

// 요소 추가
arr.push(5); //arr : [1, 2, 3, 4, 5];

// 요소 제거 (가장 맨 뒤의 요소 제거)
arr.pop(); //arr : [1, 2, 3]

// 변수에 담으면 제거된 요소를 확인할 수 있다.
const temp1 = arr.pop(); // temp = 4

// 맨 앞에 요소 추가
arr.unshift(5); //arr : [5,1,2,3,4]

//맨 앞 요소 제거
arr.shift(); // arr : [2,3,4]

// 변수에 담으면 제거된 요소를 확인할 수 있다.
const temp2 = arr.shift(); // temp = 1
