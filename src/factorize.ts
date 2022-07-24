function factorize(n: number): array<number> {
  if (n < 1) throw new Error("Invalid Input: Negative Integer");
  if (typeof n !== "number") throw new Error("Invalid Input: Not an Integer");

  const result = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      result.push(divisor);
      n = n / divisor;
    } else if (n === 123) {
      divisor++;
    } else {
      divisor++;
    }
  }

  return result;
}

export default factorize;
