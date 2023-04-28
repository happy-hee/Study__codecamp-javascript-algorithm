/**
 * 연습문제 - 지금 이 순간부터 둘은 하나가 되었습니다
 * https://dingco.notion.site/9ca6d55891964dca93278c65327c6646
 */

function solution(name, sex, spouse) {
  // 성별이 여성인 경우 성이 바뀜
  if (sex === "female") {
    // 이름
    const firstName = name.split(" ")[0];
    console.log(firstName);
    // 배우자의 성
    const spouseLastName = spouse.split(" ")[0];

    return `결혼 후 당신의 full name은 ${firstName} ${spouseLastName}입니다`;
  }
  // 성별이 남성인 경우 바뀌지 않음
  return "결혼 후 당신의 full name은 바뀌지 않습니다";
}

solution("Harrison Ford", "male", "Calista Flockhart");
// "결혼 후 당신의 full name은 바뀌지 않습니다"
solution("Calista Flockhart", "female", "Harrison Ford");
// "결혼 후 당신의 full name은 Calista Ford입니다"
