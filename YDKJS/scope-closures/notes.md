# Chapter 1 - What is even scope.
---


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