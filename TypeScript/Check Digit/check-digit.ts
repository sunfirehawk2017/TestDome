function createCheckDigit(membershipId: string): number {
  // Write the code that goes here.
  let sum = 0;
  let split = membershipId.split('');
  for (let i in split) {
    sum += Number(split[i]);
  }
  
  if (sum >= 10) {
    return createCheckDigit(sum.toString())
  }
  return sum;
}

console.log(createCheckDigit("55555"));
