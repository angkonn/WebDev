// for loop:
let a=1;
for ( let i=0; i<100; i++){
    console.log(a+i);
}   
// for in loop:
let obj={
    name: "Mahtab Haque",
    role: "Student",
    company: "code with harry"
}
for (const key in obj) {
    
        const element = obj[key];
        console.log(key);
        console.log(element);
    
}

//  for of loop:
for (const c of "Mahtab Haque") {
    console.log(c);
}


// while loop:
let i=0;
while(i<60000){
    console.log(i);
    i++;
}

