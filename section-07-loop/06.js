/**
 * 연습문제 - 삑 그리고 다음
 * https://dingco.notion.site/72e5e2d71c364b6eac7725160a4dddc4
 */

function solution(barcode) {
  // 내가 해봤던 방법
  // const result = [];
  // const newBarcode1 = barcode.map((code) => {
  //   if(code !== 0) {
  //     result.push(code);
  //   }
  // });
  // const newBarcode2 = barcode.map((code) => {
  //   if(code === 0) {
  //     result.push(code);
  //   }
  // })
  // return result;

  //풀이 방법
  const codeZero = [];
  const codeOtherNum = [];

  barcode.map((num) => {
    if (num === 0) {
      codeZero.push(num);
    } else {
      codeOtherNum.push(num);
    }
  });

  return [...codeOtherNum, ...codeZero];
}

solution([8, 8, 0, 1, 2, 3, 4, 5, 6, 0, 1, 0, 5]);
// [8, 8, 1, 2, 3, 4, 5, 6, 1, 5, 0, 0, 0]
solution([0, 7, 6, 0, 0, 4, 6, 9, 0, 2, 5, 0, 1]);
// [7, 6, 4, 6, 9, 2, 5, 1, 0, 0, 0, 0, 0]
