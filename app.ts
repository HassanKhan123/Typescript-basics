function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
    result = +input1 + +input2;
    
  } else {
    result = input1.toString() + input2.toString();
  }

  return result
//   if (resultConversion === "as-number") {
//     return +result;
//   } else {
//     return result.toString();
//   }
}

const combinedAges = combine(10, 122, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("10", "122", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Hassan", "Khan", "as-text");
console.log(combinedNames);
