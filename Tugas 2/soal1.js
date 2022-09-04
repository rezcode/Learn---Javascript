// 1 .bind() : meminjam method dari another object
const person = {
  firstName: "Rezha",
  lastName: "Riansyah",
  fullName: function () {
    return `Nama saya ${this.firstName} ${this.lastName}`;
  },
};

const person2 = {
  firstName: "Bilkis",
  lastName: "Ismail",
};

fullName = person.fullName.bind(person2);

// console.log(fullName());

// 2 .endswith() : mengeluarkan boolean pada akhir string
const nama = "Rezha Riansyah";
const check1 = nama.endsWith("syah");
const check2 = nama.endsWith("rian");

// console.log(check1, check2);

// 3 .repeat() : repeat string berdasarkan parameter
const txt = "Rezha Riansyah \n";
const result = txt.repeat(4);

// console.log(result);

// 4 .shift() : remove array index pertama
const buah = ["Banana", "Orange", "Apple", "Mango"];
buah.shift(); //return array setelah di remove

// console.log(buah);

// 5 .replace() : mengganti nilai array dengan parameter ke 2
const txt1 = "Rezha Riansyah";
const hasil = txt1.replace("Rezha", "newString");

// console.log(hasil);

// 6 .includes() : mengecek apakah ada world pada string kalimat
const kalimat = "hello world";
const result1 = kalimat.includes("world");

// console.log(result1);

// 7 .trim() : remove "space" awal dan akhir string
const text = "     Hello World!     ";
const result3 = text.trim();

// console.log(result3);

// 8 .push() : menambahkan value pada array
const arr = ["Banana", "Orange", "Apple", "Mango"];
arr.push("Kiwi");

// console.log(arr);

// 9 .indexOf() : mencari index pada array
const orang = ["rezha", "rian", "joni", "toni"];
let index1 = orang.indexOf("joni");

// console.log(index1);

// 10 .slice() : memotong nilai array param 1 = mulai, param 2 = akhir
const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const output = fruits2.slice(1, 3);

// console.log(output);
