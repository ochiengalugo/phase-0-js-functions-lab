// Function 1: calculateTax
function calculateTax(amount) {
    // Return 0 for zero or negative amounts
    if (amount <= 0) return 0;
    return amount * 0.10;
}

// Function 2: convertToUpperCase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// Function 3: findMaximum
function findMaximum(num1, num2) {
    if (num1 === num2) return num1;
    return num1 > num2 ? num1 : num2;
}

// Function 4: isPalindrome
function isPalindrome(word) {
    // Normalize: lowercase and remove non-alphanumeric characters
    let cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanWord === cleanWord.split("").reverse().join("");
}

// Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    // Prevent negative prices
    if (discountPercentage >= 100) return 0;
    if (discountPercentage <= 0) return originalPrice;

    let discountAmount = originalPrice * (discountPercentage / 100);
    return originalPrice - discountAmount;
}


// ================= TEST CASES =================

// calculateTax
console.log(calculateTax(-50));      // 0
console.log(calculateTax(0));        // 0
console.log(calculateTax(1000));     // 100

// convertToUpperCase
console.log(convertToUpperCase("hello"));        // HELLO
console.log(convertToUpperCase("WORLD"));        // WORLD
console.log(convertToUpperCase(""));             // ""
console.log(convertToUpperCase("HeLlo123!"));    // HELLO123!

// findMaximum
console.log(findMaximum(10, 5));     // 10
console.log(findMaximum(-10, -5));   // -5
console.log(findMaximum(5, 5));      // 5

// isPalindrome
console.log(isPalindrome("madam"));      // true
console.log(isPalindrome("hello"));      // false
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome(""));           // true

// calculateDiscountedPrice
console.log(calculateDiscountedPrice(100, 0));    // 100
console.log(calculateDiscountedPrice(100, 50));   // 50
console.log(calculateDiscountedPrice(100, 100));  // 0
console.log(calculateDiscountedPrice(100, 120));  // 0