function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result is: " + num);
}
printResult(add(1, 2));
var combinedValues;
combinedValues = add;
console.log(combinedValues(8, 1));
