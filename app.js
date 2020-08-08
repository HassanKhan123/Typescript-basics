var add = function (num1, num2, showResult, phrase) {
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
};
var num1 = 2;
var num2 = 9;
var printResult = true;
var resultPhrase = "Result is: ";
add(num1, num2, printResult, resultPhrase);
