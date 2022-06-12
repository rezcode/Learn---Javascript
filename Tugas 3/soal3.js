const checkSpeed = (speed) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (typeof speed == "number") {
          resolve(speed);
        } else throw `harus bertipe angka`;
      } catch (err) {
        reject(err);
      }
    }, 2000);
  });
};

checkSpeed(40)
  .then((res) => {
    if (res >= 100) {
      console.log(`Uncontrolable speed, please slow down!`);
    } else if (res >= 60 && res <= 100) {
      console.log(`Overspeed`);
    } else {
      console.log(`Speed normal`);
    }
  })
  .catch((err) => {
    console.log(err);
  });
