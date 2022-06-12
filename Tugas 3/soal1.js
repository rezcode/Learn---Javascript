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
        } else throw err;
      } catch (err) {
        reject(new Error(`data not found`));
      }
    }, 3000);
  });
};

cekHarikerja("b")
  .then((res) => {
    console.log(`iya hari ${res} adalah hari kerja`);
  })
  .catch((err) => {
    console.log(err.message);
  });
