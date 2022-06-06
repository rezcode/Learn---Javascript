const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  let hasil = dataArray
    .filter((e) => e >= nilaiAwal && e <= nilaiAkhir)
    .sort((a, b) => a - b);
  if (nilaiAwal >= nilaiAkhir) {
    console.log(`nilai akhir harus lebih besar dari nilai awal`);
  } else if (dataArray.length <= 5) {
    console.log(`jumlah angka dalam dataArray harus lebih dari 5`);
  } else if (hasil.length == 0) {
    console.log(`tidak ditemukan`);
  } else {
    console.log(hasil);
  }
};

seleksiNilai(5, 17, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(5, 17, [2, 25, 4]);
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);
