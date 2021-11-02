class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  perkenalanDiri() {
    return `Halo, saya ${this.nama}. ${
      this.umur > 17 ? "saya sudah dewasa" : "saya masih di bawah umur"
    }`;
  }
}

class Pelajar extends Orang {
  constructor(nama, umur, pekerjaan) {
    super(nama, umur);
    this.pekerjaan = pekerjaan;
  }
  perkenalanDiri() {
    return `Halo, saya ${this.nama}. ${
      this.pekerjaan === "Siswa/Mahasiswa"
        ? "saya belum bekerja"
        : `saya seorang ${this.pekerjaan}`
    }`;
  }
}

class Pekerja extends Orang {
  constructor(nama, umur, pekerjaan) {
    super(nama, umur);
    this.pekerjaan = pekerjaan;
  }
  perkenalanProfesi() {
    return `${
      this.pekerjaan !== undefined
        ? `saya seorang ${this.pekerjaan}`
        : "saya belum bekerja"
    }`;
  }
}

const ana = new Orang("Ana", 10);
const ini = new Pelajar("Ini", 18, "Siswa/Mahasiswa");
const budi = new Pekerja("Budi", 28, "koki");

console.log(ana.perkenalanDiri());
console.log(ini.perkenalanDiri());
console.log(ini.pekerjaan);
console.log(budi.perkenalanDiri());
console.log(budi.perkenalanProfesi());
console.log(budi.pekerjaan);
