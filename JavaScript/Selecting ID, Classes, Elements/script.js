console.log("Mahtab Haque")

let boxes = document.getElementsByClassName("box")
console.log(boxes)
boxes[2].style.backgroundColor ="red"
// (evabe korle 3rd box target hobe)

// but particular box target korar jonno id use kora zay. 
// to target box 4:
document.getElementById("red").style.backgroundColor="red"

// Note: 1. One element can have only one Id
//       2. Many elements can have same class

// Query Selector:
document.querySelector(".box").style.backgroundColor="green" 
// css property use howar karone 'box' er zaygay '.box use kora hoyeche'
// ekhane box namer class gulor moddhe first box target hoyeche

// to select all boxes using query selector, the method is a bit critical
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="blue";
})


// Get elements by tag name:
document.getElementsByTagName("div")

e[3].matches("red")
