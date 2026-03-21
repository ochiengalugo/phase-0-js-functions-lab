
//calculateTax
function calculateTax(amount) {
    return amount * 0.10;
}
const taxResult = calculateTax(10000);
console.log(taxResult);

//convert to uppercase
function convertToUpperCase(text) {
    return text.toUpperCase();}
    

const results = convertToUpperCase("hello world")
console.log(results)


// Function 3: findMaximum
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
const largest = findMaximum(10, 5);
console.log("The larger number is: " + largest); 


// Function 4: isPalindrome
function isPalindrome(word) {
    let reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
}
const checkWord = isPalindrome("radar");
console.log(checkWord);


// Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discountAmount = originalPrice * (discountPercentage / 100);
    
    return originalPrice - discountAmount;
}
const finalPrice = calculateDiscountedPrice(100, 20);
console.log(finalPrice);

