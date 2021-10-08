// 1. Create variables to represent scores of exams for Matt and Simon and set values   80 and 45;
// 2. Create variable to set the lower limit for passing an exam and assign to it value as 51;
// 3. Write the condition in if statement, which will check if both students have passed an exam and log 
//    the result in console;
// 4. Use else if statement in order to check if one of the students has passed an exam and log the result 
//    in console;
// 5. Use else statement in order to display in console that both students have failed;
// 6. In case of passing the exam by one of the students, find out which one was that and display in console 
//    as an additional information the student name and his points
// 7. Test all the possible cases (a. both students passed; b. Matt passed and Simon failed; c. Simon passed and 
//   Matt failed; d. both students failed).



// 1
let scoreMatt = 80;
let scoreSimon = 45;

// 2
let lowerLimit = 51;

// 3 // 4 // 5
if(scoreMatt >= lowerLimit && scoreSimon >= lowerLimit){
    console.log('Both students have passed an exam');
} else if(scoreMatt >= lowerLimit || scoreSimon >= lowerLimit){
    console.log('One passed the exam');
} else{
    console.log('Both students have failed');
}

// 6
if (scoreMatt >= lowerLimit){
    console.log('Matt passed the exam', scoreMatt);
}
if (scoreSimon >= lowerLimit){
    console.log('Simon passed the exam', scoreSimon);
}

// 7
scoreMatt = 100;
scoreSimon = 100;

scoreMatt = 0;
scoreSimon = 0;





// ---------------------------

// while
let i = 0;
while(i <= 10){
    // console.log(i);
    i++;
}

// do..while
let x = 0;
do{
    console.log(x);
    x++;
}
while(x <= 10)



// map() -- loops through array and CREATE a new array
const newTodosArray = todos.map(function(todo){
    return todo.text;
})
// same as ↑
// const newTodosArray = todos.map(todo => todo.text)
console.log(newTodosArray);

// filter() -- Returns an array based on a CONDITION
const newFilteredTodos = todos.filter(function() {
    if(todo.id === 1){
        return true;
    }
})
// allow function
// const newFilteredTodos = todos.filter(todo => todo.id === 1)
console.log(newFilteredTodos);