let mahasiswa = {
  name: `sandika`,
  energy: 10,
  makan: function (porsi) {
    this.energy = this.energy + porsi;
    return this.energy;
  },
};

// console.log(mahasiswa);

const restParam = (...args) => {
  return args.reduce((a, b) => a + b);
};

// console.log(restParam(1, 2, 3, 4, 5));

const kelompok = [`rezha`, `galih`, `dar`, `asbar`, `ardi`];

const [ketua, wakil, ...anggota] = kelompok;

// console.log(`ketua : ${ketua}
// wakil : ${wakil}
// anggota : ${anggota}`);
