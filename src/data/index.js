function stairs(n) {
  if (n < 1) return " ";

  let result = "";
  for (let i = 1; i <= n; i++) {
    let line = " ".repeat(3 * (n - i));
    for (let j = 1; j <= i; j++) {
      line += j + " ";
    }
    for (let j = i; j > 0; j--) {
      line += j + " ";
    }
    result += line.trim() + "\n";
  }
  return result.trim();
}
console.log(stairs(4));
