# Chapter 1 - What is even scope.
---
## Interesting Thoughts
* JS goes through two phases before it's ready compile then execute. Compilation phases parses the code and gives you any compilation errors such as syntax or reference errors.

### Code Samples

```JavaScript
var students = [
    { id: 14, name: "Kyle" },
    { id: 73, name: "Suzy" },
    { id: 112, name: "Frank" },
    { id: 6, name: "Sarah" }
];

function getStudentName(studentID) {
    for (let student of students) {
        if (student.id == studentID) {
            return student.name;
        }
    }
}

var nextStudent = getStudentName(73);

console.log(nextStudent);
// Suzy
```

###  Target vs Source
> How do you know if a variable is a target? Check if there is a value that is being assigned to it; if so, it's a target. If not, then the variable is a source.


## wtf

Why does is a floating object within a function valid syntax?? 

```JavaScript
function saySomething() {
    var greeting = "Hello";
    {
        greeting = "Howdy";  // error comes from here
        let greeting = "Hi";
        console.log(greeting);
    }
}

saySomething();
// ReferenceError: Cannot access 'greeting' before
// initialization
```
Setting aside the Reference Error (hoisting related) found during compilation process. Why is that random floating object valid... strange. 