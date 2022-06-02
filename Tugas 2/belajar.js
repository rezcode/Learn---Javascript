const sum = (nilai1, nilai2) => {
  return nilai1 + nilai2;
};

const displaySum = (nilai1, nilai2, callback) => {
  return `hasil dari ${nilai1} + ${nilai2} = ${callback(nilai1, nilai2)}`;
};
