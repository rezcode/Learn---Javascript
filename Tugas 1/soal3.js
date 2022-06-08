let jumlah = 5;
let output = "";

if (typeof jumlah !== "number") {
  console.log(`Data harus number`);
} else {
  for (let i = 1; i <= jumlah; i++) {
    for (let j = i; j <= jumlah; j++) {
      output += j;
    }
    output += `\n`;
  }

  console.log(output);
}
