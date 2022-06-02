// .bind()
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

// .endswith()
let nama = "Rezha Riansyah";
let check1 = nama.endsWith("syah");
let check2 = nama.endsWith("rian");

// console.log(check1, check2);

// .repeat()
let txt = "Rezha Riansyah \n";
let result = txt.repeat(4);

// console.log(result);

// .shift()
let buah = ["Banana", "Orange", "Apple", "Mango"];
buah.shift(); //return array setelah di remove

// console.log(buah);

// .replace()
let txt1 = "Rezha Riansyah";
let hasil = txt1.replace("Rezha", "String Baru");

// console.log(hasil);
