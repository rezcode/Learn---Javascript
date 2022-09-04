const mtk = 80;
const bahasaIndonesia = "90";
const bahasaInggris = 90;
const ipa = 69;
const arr = [];

arr.push(mtk, bahasaIndonesia, bahasaInggris, ipa);

let average = arr.reduce((a, b) => a + b) / arr.length;

const output = () => {
  if (average >= 90 && average <= 100) {
    return `Rata-rata = ${parseInt(average)}
Grade = A`;
  } else if (average >= 80 && average <= 89) {
    return `Rata-rata = ${parseInt(average)}
Grade = B`;
  } else if (average >= 70 && average <= 79) {
    return `Rata-rata = ${parseInt(average)}
Grade = C`;
  } else if (average >= 60 && average <= 69) {
    return `Rata-rata = ${parseInt(average)}
Grade = D`;
  } else {
    return `Rata-rata = ${parseInt(average)}
Grade = E`;
  }
};

if (
  typeof mtk !== "number" ||
  typeof bahasaIndonesia !== "number" ||
  typeof bahasaInggris !== "number" ||
  typeof ipa !== "number"
) {
  console.log("must be number");
} else if (mtk < 0 || bahasaIndonesia < 0 || bahasaInggris < 0 || ipa < 0) {
  console.log("must be a positive number");
} else {
  console.log(output());
}
