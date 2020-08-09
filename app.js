function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result is: " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(1, 2));
var combinedValues;
combinedValues = add;
console.log(combinedValues(8, 1));
addAndHandle(10, 20, function (res) {
    console.log(res);
});
