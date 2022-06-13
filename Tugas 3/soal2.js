const getMonth = (callback) => {
  setTimeout(() => {
    let error = true;
    let month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data not Found"));
    }
  }, 1000);
};

const getData = () => {
  getMonth((err, month) => {
    try {
      if (err === null) {
        month.map((res) => {
          console.log(res);
        });
      } else {
        throw err;
      }
    } catch (err) {
      console.log(err.message);
    }
  });
};

getData();
