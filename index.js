// Leap Year Checker

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
let year = 2024;
if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}

// Ticket Pricing

function calculateTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Example usage:
let userAge = 25;
let ticketPrice = calculateTicketPrice(userAge);
console.log(`The ticket price for a ${userAge} year old is $${ticketPrice}.`);
// Weather Clothing Adviser

function adviseClothing(temperature, isRaining) {
    if (temperature < 15) {
        if (isRaining) {
            return "It's cold and rainy. Wear a warm coat and take an umbrella.";
        } else {
            return "It's cold but not raining. Wear a warm coat.";
        }
    } else {
        if (isRaining) {
            return "It's warm but rainy. Bring a light raincoat or umbrella.";
        } else {
            return "It's warm and not raining. Wear light clothing.";
        }
    }
}

// Example usage:
let currentTemperature = 15;
let raining = true;
console.log(adviseClothing(currentTemperature, raining));
// Recursion
// Fibonacci Sequence

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
let fibonacciNumber = 15;
console.log(`The ${fibonacciNumber}th Fibonacci number is: ${fibonacci(fibonacciNumber)}`);
// Palindrome Checker

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
    if (cleanStr.length <= 1) {
        return true;
    } else if (cleanStr[0] !== cleanStr[cleanStr.length - 1]) {
        return false;
    } else {
        return isPalindrome(cleanStr.slice(1, cleanStr.length - 1));
    }
}

// Example usage:
let testString = "A man, a plan, a canal, Panama!";
console.log(`"${testString}" is a palindrome: ${isPalindrome(testString)}`);
// Power Function

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

// Example usage:
let baseNumber =20;
let exponentNumber = 9;
console.log(`${baseNumber} raised to the power of ${exponentNumber} is: ${power(baseNumber, exponentNumber)}`);