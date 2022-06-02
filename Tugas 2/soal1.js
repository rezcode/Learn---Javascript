// 1 .bind()
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

// 2 .endswith()
const nama = "Rezha Riansyah";
const check1 = nama.endsWith("syah");
const check2 = nama.endsWith("rian");

// console.log(check1, check2);

// 3 .repeat()
const txt = "Rezha Riansyah \n";
const result = txt.repeat(4);

// console.log(result);

// 4 .shift()
const buah = ["Banana", "Orange", "Apple", "Mango"];
buah.shift(); //return array setelah di remove

// console.log(buah);

// 5 .replace()
const txt1 = "Rezha Riansyah";
const hasil = txt1.replace("Rezha", "newString");

// console.log(hasil);

// 6 .includes()
const kalimat = "hello world";
const result1 = kalimat.includes("world");

// console.log(result1);

// 7 .trim()
const text = "     Hello World!     ";
const result3 = text.trim();

// console.log(result3);

// 8 .lastIndexOf()
const fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
let index = fruits.lastIndexOf("Apple");

// console.log(index);

// 9 .indexOf()
const orang = ["rezha", "rian", "joni", "toni"];
let index1 = orang.indexOf("joni");

// console.log(index1);

// 10 .slice()
const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const output = fruits2.slice(1, 3);

// console.log(output);
