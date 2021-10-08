// 1. Create an array - students, insert four items, which should be objects and have three properties: name, score1, score2, 
//     with the following values:
//     a. John, 47, 46
//     b. Bob, 23, 24
//     c. Nick, 40, 35
//     d. Alex, 44, 45
// 2. Suppose that, students have chance to get different degrees of diploma, like A, B, C, D, E and those degrees are relevant
//     to the following passing limits 91, 81, 71, 61, 51. According to that, create two arrays for passing limits and for degrees
// 3. Create function which will calculate total score (score1 + score2) for each student.
// 4. Create function and use in it for loops, if else statements and whatever you need, in order to figure out, which student 
//     has passed an exam and what kind of degree he has got.
// 5. Display the final result in console.


// 1
let students = [
    {name : 'John', score1 : 47, score2 : 46},
    {name : 'Bob', score1 : 23, score2 : 24},
    {name : 'Nick', score1 : 40, score2 : 35},
    {name : 'Alex', score1 : 44, score2 : 45},
];


let abc = ['hi', 'hoi'];
console.log(abc[0], [1]);

// 2
let degrees = ['A', 'B', 'C', 'D', 'E'];
let passingLimits = [91, 81, 71, 61, 51];

// 3
function totalScore(){
    for(i in students){
        let total = students[i].score1 + students[i].score2;
        console.log('Name: ' + students[i].name, 'Score: ' + total);

        let deg;
            if(total >= 91){
                deg = 'A';
                // console.log('A');
            } else if(total >= 81) {
                deg = 'B';
                // console.log('B');
            } else if(total >= 71) {
                deg = 'C';
                // console.log('C');
            } else if(total >= 61) {
                deg = 'D';
                // console.log('D');
            } else {
                deg = 'E'
                // console.log('E');
            }
        console.log('Name: ' + students[i].name, 'Score: ' + total, 'Degree: ' + deg);
    }
}
totalScore();





//Show size of the building plot

function showPlotSize(){
    var width = 3;
    var height = 2;
    return 'Area: ' + (width * height);
}
var msg = showPlotSize();


let o = "17";
let k = 2;
k+o;
console.log(k+o);


let xi = 1 + "2" + 4 + 2;

console.log(xi);