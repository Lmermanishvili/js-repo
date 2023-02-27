// დავალება N1
function myFunction(a,b) {
    if(a === b) {
        return "ტოლია"
    } else {
        return "არ არის ტოლი"
    }
}
console.log(myFunction(9,9));
console.log(myFunction(9,"9"));

// დავალება N2
function fahrenheitToC(f) {
    if(typeof f !== "number") {
        return false
    } else {
        return (f - 32) * (5 / 9)
    }
}

console.log(fahrenheitToC(40));
console.log(fahrenheitToC("40"));

// დავალება N3
function myCalculator(a,b,oper) {
    if(typeof a !== "number" || typeof b !== "number" || typeof oper !== "string") {
        return false
    } else if(oper === "-") {
        return a - b
    } else if(oper === "+") {
        return a + b
    } else if(oper === "*") {
        return a * b
    } else if(oper === "/") {
        return a / b
    } else {
        return false
    }
}
console.log(myCalculator(9,9,"9"));
console.log(myCalculator(9,9,"*"));
console.log(myCalculator("9",9,"*"));


