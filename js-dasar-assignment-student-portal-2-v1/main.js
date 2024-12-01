function process_argv() {
  const { argv } = process;
  const result = studentStatus(argv[2], argv[3]);

  return result;
}

function studentStatus(name, studentId) {
  const facultyCodeList = "FE;FISIP;FT;FTIS".split(";"),
    facultyNameList =
      "Fakultas Ekonomi;Fakultas Ilmu Sosial dan Politik;Fakultas Teknik;Fakultas Teknologi Informasi dan Sains".split(
        ";"
      ),
    programsCodeList = "21;22;23;31;32;33;41;42;51;52;53".split(";"),
    programsNameList =
      "Ekonomi;Manajemen;Akuntansi;Administrasi Publik;Administrasi Bisnis;Hubungan Internasional;Teknik Sipil;Arsitektur;Matematika;Fisika;Informatika".split(
        ";"
      );

  let namaProdi = "",
    kodeProdi = "",
    namaFakultas = "",
    kodeFakultas = "",
    tahunDaftar = 0;

  for (let i = 0; i < studentId.length; i++) {
    if (isNaN(studentId[i])) {
      kodeFakultas += studentId[i];
    } else {
      break;
    }
  }

  for (let i = 0; i < facultyCodeList.length; i++) {
    if (facultyCodeList[i] === kodeFakultas) {
      namaFakultas = facultyNameList[i];
      break;
    }
  }

  tahunDaftar = studentId.slice(kodeFakultas.length, kodeFakultas.length + 4);

  kodeProdi = studentId.slice(kodeFakultas.length + 4, kodeFakultas.length + 6);
  for (let i = 0; i < programsCodeList.length; i++) {
    if (programsCodeList[i] === kodeProdi) {
      namaProdi = programsNameList[i];
      break;
    }
  }

  return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi ${namaProdi} pada ${namaFakultas} sejak tahun ${tahunDaftar}.`;
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
  console.log(process_argv());
}

module.exports = studentStatus;
