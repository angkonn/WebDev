// A simple message logged to the console
console.log("Hey this is variable");

// Declaring variables using `let`
// `a` is assigned the value 5, which is a number
let a = 5;
// `b` is assigned the value 6, another number
let b = 6;

// Output the sum of `a` and `b`
console.log(a + b); // Output: 11

// `c` is assigned the value "angkon", which is a string
let c = "angkon";
console.log(c); // Output: "angkon"

// Checking the data types of variables `a`, `b`, and `c`
console.log(typeof a, typeof b, typeof c); // Output: number number string

// More variables declared with different data types
let x = "Mahtab Haque"; // string
let y = 22; // number
let z = 3.55; // number (floating-point)
const p = true; // boolean (const means `p` can't be changed later)
let q = undefined; // undefined (the variable is declared but not assigned a value)
let r = null; // null (explicitly no value)

// Logging multiple variables with different data types
console.log(x, y, z, p, q, r);

// Checking the types of `x`, `y`, `z`, `p`, `q`, and `r`
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r); 
// Output: string number number boolean undefined object

// Objects:
// `o` is an object with properties (key-value pairs)
let o = {
    name: "Angkon", // key: "name", value: "Angkon" (string)
    "job code": 5600, // key: "job code" (string with space, so it's in quotes), value: 5600 (number)
    salary: "500 crores", // key: "salary", value: "500 crores" (string)
    "is handsome": true // key: "is handsome", value: true (boolean)
    // Note: Keys with spaces must be enclosed in quotes ("")
};

// Logging the object `o`
console.log(o);

// Modifying the value of `salary` in the object `o`
o.salary = "600 crores";
console.log(o); // `salary` now has the updated value "600 crores"
