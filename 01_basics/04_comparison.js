console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 != 1)

// This works, but comparison must be between two same data types
console.log("2" > 1);
console.log("02" > 1);

// Avoid such comparisons
console.log(null > 0); // comparisons convert null to 0
console.log(null == 0); // equality and comparisons work differently
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === (strict check)
console.log("2" === 2); // => false as it also checks data types
