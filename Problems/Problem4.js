const isValidBracketSequence = (str) => {
  if (str === "" || str === null || str === undefined) return false;
  // create stack
  const stack = [];

  // array of symboles
  const sym = ["(", ")", "{", "}", "[", "]", '"', '"', "`", "`"];

  // loop on the string
  for (let i = 0; i < str?.length; i++) {
    let ch = str[i];

    // check if array contain character
    let index = sym.lastIndexOf(ch);

    // if isn't equal to -1 then it contains it
    if (index !== -1) {
      // if index modulo 2 === 0 then its an opening but some symboles
      // closing and openning are the same so we check if lastIndex - 1 is the same
      // symbole and its not the latest variable in the stack
      if (
        index % 2 === 0 ||
        (sym[index] === sym[index - 1] &&
          stack[stack.length - 1] !== sym[index])
      ) {
        stack.push(ch);
      } else {
        if (stack.pop() !== sym[index - 1]) {
          return false;
        }
      }
    }

    // if (ch === "(" || ch === "[" || ch === "{") {
    //   stack.push(ch);
    // } else if (ch === ")") {
    //   if (stack.pop() !== "(") return false;
    // } else if (ch === "]") {
    //   if (stack.pop() !== "[") return false;
    // } else if (ch === "}") {
    //   if (stack.pop() !== "{") return false;
    // }
  }

  console.log(stack);

  // if stack empty then all brackets are in there correct index then it returns true else returns false
  return stack?.length === 0;
};

// console.log(isValidBracketSequence(null));
// console.log(isValidBracketSequence("{(a)}"));
// console.log(isValidBracketSequence("()(}"));
// console.log(isValidBracketSequence("[()]"));
// console.log(isValidBracketSequence("({})"));
console.log(isValidBracketSequence('`({})""'));
