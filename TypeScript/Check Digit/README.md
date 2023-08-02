# Check Digit
https://www.testdome.com/questions/typescript/check-digit/47504

Your company assigns each customer a membership ID, and you are implementing a check digit for those IDs.

The check digit should be calculated by adding up all digits in each membership ID. If the result of the sum is a number with more than a single digit, another iteration is required, and the digits of the result should also be added together. This process should repeat until a single-digit number is calculated.

For example, for the membership ID "_55555_" the sum of all digits is _25_. Because this is not a single-digit number, _2_ and _5_ would be added, and the result, _7_, would be the check digit.

```TypeScript
function createCheckDigit(membershipId: string): number {
  // Write the code that goes here.
  return 0;
}

console.log(createCheckDigit("55555"));
```
