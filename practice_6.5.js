
// practice question no. 2

const userInput = prompt("Enter your number:");
if (userInput % 2 === 0) {
    console.log("Your number is even");
}
else {
    console.log("Your number is odd");
}



// practice question no. 3

let number = [13, 2, 20, 1, 15, 8, 3, 18, 9, 11, 5, 4, 12, 7, 14, 6, 19, 10, 17, 16];
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);

// practice question no. 4

for (let i = 1; i <=50; i++) {
    if(i%3 == 0 && i%5 == 0){
        console.log(i);
    }
}

// practice question no. 5
var friends = ["Rahim","karim","abdul","sadsd","heroalom"];
var biggestName = "";

for (let i = 0; i < friends.length; i++) {
    if(friends[i].length > biggestName.length){
        biggestName = friends[i];
    }
}
console.log(biggestName);


// practice question no. 8
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var largestNumber = 0;

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > largestNumber){
        largestNumber = numbers[i];
    };
};
console.log(largestNumber);

