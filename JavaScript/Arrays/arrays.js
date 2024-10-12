let arr=[1,2,3,4,5,6,7]
// arrays are mutable, so they can be modified
console.log(arr)
console.log(typeof(arr))
console.log(arr.length)
console.log(arr[0])

arr[1]=6969696
console.log(arr)

// // Array to String:
// console.log(arr.toString())
 
// console.log(arr.join(" and "))


b=[1,3,5,6,7,8]



//  pop: Last one 
//  shift: First one
console.log(b.pop())
console.log(b.shift())


// Unshift: Adds something at the beginning
// push: Adds Something at the end 
b.unshift("Tasir")
console.log(b)
b.push(100)
console.log(b)
b.push("Angkon")
console.log(b)

delete b[5]
console.log(b)
console.log(b[5])
