// Question 1:

// Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20

let ticketPrice = $20;

if (age <= 12) {
    console.log($10);
} else if (age >= 12 && age < 17) {
    console.log($15);
} else if (age >= 18) {
    console.log($20);
}

// Question 2:

// Create a function that takes a year as input and determines whether it is a leap year or not. 
// Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.

 // Define a function to check if a given year is a leap year

function leapyear(year) {
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));


// Recursion Questions:

// Implement a recursive function to generate the nth Fibonacci number. 
// The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers 
// (0, 1, 1, 2, 3, 5, 8, ...).

function fibonacciRecursive(n) {
    if (n <= 1)
        return n;
    return fibonacciRecursive(n - 1) +
        fibonacciRecursive(n - 2);
}
 
const n = 12;
console.log(`The ${n}-th Fibonacci number is
: ${fibonacciRecursive(n)}`);




function power(x , n) {

    // If x^0 return 1
    if (n == 0)
        return 1;

    if (x == 0)
        return 0;

    // For all other cases
    return x * power(x, n - 1);
}
