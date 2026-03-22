// Function 1: calculateTax
function calculateTax(amount) {
    // Handling 0 and negative amounts
    if (amount <= 0) return 0;
    return amount * 0.10;
}

// Function 2: convertToUpperCase
function convertToUpperCase(text) {
    // .toUpperCase() natively handles empty strings, mixed cases, and special characters
    return text.toUpperCase();
}

// Function 3: findMaximum
function findMaximum(num1, num2) {
    // Standard comparison handles positive, negative, and equal numbers correctly
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Function 4: isPalindrome
function isPalindrome(word) {
    // Handle empty string or single character (both are technically palindromes)
    if (word.length <= 1) return true;
    
    let reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
}

// Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    // If discount is 0, return original; if 100 or more, price is 0 (or negative)
    let discountAmount = originalPrice * (discountPercentage / 100);
    return originalPrice - discountAmount;
}
console.log(calculateTax(-50));              // Expected: 0
console.log(convertToUpperCase(""));          // Expected: ""
console.log(findMaximum(-10, -5));            // Expected: -5
console.log(isPalindrome(""));                // Expected: true
console.log(calculateDiscountedPrice(100, 120)); // Expected: -20