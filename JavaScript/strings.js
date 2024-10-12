console.log('This is String tutorial')
// Strings are immutable, so they cannot be modified
let a="Mahtab Haque"
console.log(a)
console.log(a[0])
console.log(a[3])
console.log(a.length)

let real_name="Angkon"
let friend="Riaj"
console.log("My name is",real_name,"and my friend's name is",friend)
console.log(`My name is ${real_name} and my fiend's name is ${friend}`)

// Escape sequence characters:
let name1='Adam D\'Angelo'
console.log(name1)

let a1="Angkon"
console.log(a1.toUpperCase())

// string slicing:

d="Tasir Mahtab Haque"
console.log(d.slice(0,10))
console.log(d.slice(1))

// replace:
console.log(d.replace("Tasir", "Mahtab"))

// concatanation:
e=" Angkon"
console.log(d.concat(e))
console.log(e.indexOf("n"))

console.log(e.startsWith("An"))
console.log(e.startsWith(" An"))
