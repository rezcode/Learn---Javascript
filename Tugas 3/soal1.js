const cekHarikerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else reject(new Error("Hari ini bukan hari kerja "));
    }, 3000);
  });
};
const thenCatch = cekHarikerja("senin");

thenCatch
  .then((res) => {
    console.log(`iya hari ${res} adalah hari kerja`);
  })
  .catch((err) => console.log(err));
