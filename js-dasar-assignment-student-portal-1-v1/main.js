function process_argv() {
  const { argv } = process;
  const result = krsApplication(argv[2], argv[3], argv[4]);

  return result;
}

function krsApplication(name, programId, gpa) {
  let programName, sks, output;

  switch (programId) {
    case "ACC":
      programName = "Akuntansi";
      break;
    case "HIN":
      programName = "Hubungan Internasional";
      break;
    case "IAB":
      programName = "Ilmu Administrasi Bisnis";
      break;
    case "IAP":
      programName = "Ilmu Administrasi Publik";
      break;
    case "MJN":
      programName = "Manajemen";
      break;
    case "TKM":
      programName = "Teknik Kimia";
      break;
    default:
      return "Invalid Program ID"
  }

  if (gpa > 2.99 && gpa < 4) {
    sks = 24;
  } else if (gpa >= 2.5 && gpa <= 2.99) {
    sks = 21;
  } else if (gpa >= 2 && gpa <= 2.49) {
    sks = 18;
  } else if (gpa >= 1.5 && gpa <= 1.99) {
    sks = 15;
  } else if (gpa >= 0 && gpa <= 1.49) {
    sks = 12;
  } else {
    return "Invalid gpa number";
  }

  if (gpa >= 3) {
    output = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan.`;
  } else {
    output = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programName} dan hanya dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan.`;
  }

  return output;
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
  console.log(process_argv());
}

module.exports = krsApplication;
