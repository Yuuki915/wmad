const students = {
  name: ["John", "Bob", "Nick", "Alex"],
  score1: [47, 23, 40, 44],
  score2: [46, 24, 35, 45],
};
const pass = [91, 81, 71, 61, 51];
let degrees;

for (let i = 0; i < 4; i++) {
  const total = students.score1[i] + students.score2[i];

  if (total >= pass[0]) {
    degrees = "A";
  } else if (total >= pass[1]) {
    degrees = "B";
  } else if (total >= pass[2]) {
    degrees = "C";
  } else if (total >= pass[3]) {
    degrees = "D";
  } else if (total >= pass[4]) {
    degrees = "E";
  } else {
    degrees = "FAILED";
  }
  console.log(
    ` Name: ${students.name[i]} \n Total Score: ${total} \n Degrees: ${degrees}`
  );
}
