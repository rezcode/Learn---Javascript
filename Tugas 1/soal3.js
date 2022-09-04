let jumlah = 5;
let output = "";

if (typeof jumlah !== "number") {
  console.log(`Data harus number`);
} else if (jumlah < 0) {
  console.log("Value tidak boleh negatif");
} else {
  for (var i = jumlah; i >= 1; i--) {
    for (var j = 1; j <= i; j++) {
      output += j;
    }
    output += "\n";
  }
  console.log(output);
}
