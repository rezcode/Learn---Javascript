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

const find = (key, jumlah) => {
  const output = data
    .filter((x) => x.includes(key))
    .map((element) => {
      return element.toLowerCase();
    });
  if (jumlah <= output.length) {
    return output.slice(0, jumlah);
  } else {
    return `hanya ada ${output.length} = ${output.slice(0, jumlah)}`;
  }
};

const search = (key, jumlah, find) => {
  return find(key, jumlah);
};

console.log(search("Al", 2, find));
