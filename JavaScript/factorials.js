let a=6

// reduce method: 
function factorial (number){
    let arr = Array.from(Array(number+1).keys())
    // Array.from : Creates an array from array like object
    // Array.from(Array(number+1).keys()) : Number + 1 porjonto zotogulo keys ache shobgulo niye array creation
    console.log(arr)
    console.log(arr.slice(1,))   // (1 theke shuru hobe)
    c= arr.slice(1,).reduce((a,b)=>{
        return a*b 
    }) 
    console.log(c)
   
}

// for loop:
function facfor(number){
    let n=1
    for(let i=1;i<=number;i++){
        n=n*i
    }
    return n 
}

// using if else:
function facif(number){
   if (number<=1){
    return 1
   }
   else{
    return number*facif(number-1)
   }
    
   
}
factorial(a)
console.log(facfor(a))
console.log(facif(a))
