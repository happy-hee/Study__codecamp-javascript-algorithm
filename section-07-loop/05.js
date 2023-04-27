/**
 * filter - 그건 제 잔상입니다만?
 * https://dingco.notion.site/1b2b2967bddb4d75a8b6ddb8047924ed
 */

function solution(userList, ip) {
  const notUser = userList.filter((userIp) => userIp !== ip);
  return notUser;
}

solution(
  ["123.123.02", "123.123.02", "432.223.07", "123.173.08"],
  "123.123.02"
);
// ["432.223.07", "123.173.08"]
solution(["228.093.22", "228.093.22", "228.093.22"], "228.093.22");
// []
