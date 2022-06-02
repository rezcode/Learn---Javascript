const data = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirde",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const newArr = data.map((e) => {
  return e.toLowerCase();
});

const find = (key, jumlah) => {
  const output = newArr.filter((x) => x.includes(key));
  if (jumlah <= output.length) {
    return output.slice(0, jumlah);
  } else if (output.length == 0) {
    return `tidak ditemukan`;
  } else {
    return `hanya ada ${output.length} = ${output.slice(0, jumlah)}`;
  }
};

const search = (key, jumlah, find) => {
  return find(key, jumlah);
};

console.log(search("an", 3, find));
