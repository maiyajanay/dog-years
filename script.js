//Declaring a varable myAge and setting it to the number 29, which represents my age
let myAge = 29;

//Declaring a varible earlyYears and setting it to 2, to represent how the first 2 years of a dogs life are evaluated differently
let earlyYears = 2;

// Using the multiplication assignment operator to multiply the value of earlyYears by 10.5 (the dog years assigned to each early human year).
earlyYears *= 10.5;
// can also be written this way:
// earlyYears = earlyYears * 10.5;

//Since we've planned for the first 2 years already, this is declaring the laterYears variable, which defines it as after year of my current age past the first 2.
let laterYears = myAge - 2;

//This line uses the multiplication assignment operator to calculate and assign the dog years of my later years to the variable laterYears.
laterYears *= 4;
// can also be written this way:
// laterYears = laterYears * 4;

//I've printed the value of earlyYears and laterYears to confirm I'm getting the values I expect.
console.log(earlyYears);
console.log(laterYears);

//This line is calculating my current age in dog years and initializing it to the variable myAgeInDogYears.
let myAgeInDogYears = earlyYears + laterYears;

//In this line, I'm declaring the new variable myName and assigning my name, while calling the bult-in string method .toLowerCase() to ensure my name is always uniformly lower case.
let myName = 'Maiya'.toLowerCase();

//Below I'm logging a string to the console, and dynamically inputting variables with string interpolation.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);










