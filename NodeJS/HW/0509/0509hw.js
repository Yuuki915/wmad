const mySum = (...nums) => {
  let sum = 0;
  for (let num of nums) sum += num;
  return sum;
};

console.log(mySum(3, 5, 7));

//
// -----
//

const myArr = [3, 5, 7, 2, 5];

const result = () => {
  console.log(...myArr);
};
result();

//
// -----
//

const mySecondArr = myArr.map((arr) => arr * 2);
console.log(mySecondArr);

//
// -----
//

const avr = () => {
  const total = mySecondArr.reduce((x, y) => x + y);
  return total / mySecondArr.length;
};

console.log(avr());

//
// -----
//

setTimeout(() => {
  console.log("Goodbye");
}, 3000);

//
// -----
//

class Employee {
  constructor(name, email, department, startDate) {
    (this.name = name),
      (this.email = email),
      (this.department = department),
      (this.startDate = startDate);
  }

  sayHi() {
    console.log(`Hi I'm ${this.name}, send me a message here! ${this.email}`);
  }
}

const Person = new Employee("Yuuki", "yuuki@mail.com");
Person.sayHi();
