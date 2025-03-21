const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Print the Pattern
console.log("Pattern:");
for (let i = 1; i <= 3; i++) {
    console.log("*".repeat(i));
}

// 2. Factorial of a Number
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

rl.question("Enter a number for factorial: ", (num) => {
    num = parseInt(num);
    if (!isNaN(num) && num >= 0) {
        console.log("Factorial:", factorial(num));
    } else {
        console.log("Invalid input. Please enter a non-negative number.");
    }

    // 3. Capitalize the First Letter of Each Word
    rl.question("Enter a sentence to capitalize: ", (inputSentence) => {
        function capitalizeWords(sentence) {
            return sentence.split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
        }
        console.log("Capitalized Sentence:", capitalizeWords(inputSentence));

        // 4. Categorize Temperature
        rl.question("Enter temperature: ", (temperature) => {
            temperature = parseInt(temperature);
            function categorizeTemperature(temp) {
                if (temp < 0) return "Freezing";
                if (temp >= 0 && temp <= 15) return "Cold";
                if (temp >= 16 && temp <= 30) return "Moderate";
                return "Hot";
            }
            console.log("Temperature Category:", categorizeTemperature(temperature));

            // 5. Days Left Until Next New Year
            let today = new Date();
            let nextNewYear = new Date(today.getFullYear() + 1, 0, 1);
            let daysLeft = Math.ceil((nextNewYear - today) / (1000 * 60 * 60 * 24));
            console.log("Today's date:", today.toDateString());
            console.log("Days left until New Year:", daysLeft);

            // 6. Find Index of "locate" in String
            let text = "Please locate where 'locate' occurs!";
            let index = text.indexOf("locate");
            console.log("Index of 'locate':", index);

            // 7. Print Random Number and Fibonacci Series Below It
            function fibonacci(n) {
                let fib = [0, 1];
                for (let i = 2; i < n; i++) {
                    let next = fib[i - 1] + fib[i - 2];
                    if (next >= n) break;
                    fib.push(next);
                }
                return fib;
            }
            let randomNum = Math.floor(Math.random() * 10) + 1;
            console.log("Random Number:", randomNum);
            console.log("Fibonacci Series below", randomNum, ":", fibonacci(randomNum));

            // 8. Find the Highest Value in an Array
            function findMax(arr) {
                return Math.max(...arr);
            }
            let numbers = [23, 12, 45, 78, 56, 89, 34];
            console.log("Highest Value:", findMax(numbers));

            // 9. JavaScript Object for Books
            let books = [
                { title: "Book A", author: "Author 1", cost: 600 },
                { title: "Book B", author: "Author 2", cost: 400 },
                { title: "My Experiments with Truth", author: "Mahatma Gandhi", cost: 550 }
            ];
            console.log("Books costing more than 500:");
            books.filter(book => book.cost > 500).forEach(book => console.log(book.title));
            let gandhiBook = books.find(book => book.author === "Mahatma Gandhi");
            console.log("Book by Mahatma Gandhi:", gandhiBook ? gandhiBook.title : "Not found");

            rl.close(); // Close input stream
        });
    });
});
