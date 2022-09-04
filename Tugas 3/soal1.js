const cekHarikerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      try {
        if (cek) {
          resolve(cek);
        } else throw `data tidak ditemukan`;
      } catch (err) {
        reject(err);
      }
    }, 3000);
  });
};

cekHarikerja("minggu")
  .then((res) => {
    console.log(`iya hari ${res} adalah hari kerja`);
  })
  .catch((err) => {
    console.log(err);
  });
