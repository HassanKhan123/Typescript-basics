const add = (
  num1: number,
  num2: number,
  showResult: boolean,
  phrase: string
) => {
  const result = num1 + num2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
};

const num1 = 2;
const num2 = 9;
const printResult = true;
const resultPhrase = "Result is: ";

add(num1, num2, printResult, resultPhrase);
