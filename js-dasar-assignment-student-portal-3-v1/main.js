function process_argv() {
  const { argv } = process;
  const result = studentData(argv[2], argv[3]);

  return result;
}

function studentData(name, studentId) {
  let facultyList = [
    ["Fakultas Ekonomi", "Ekonomi"],
    ["Fakultas Ekonomi", "Manajemen"],
    ["Fakultas Ekonomi", "Akuntansi"],
    ["Fakultas Ilmu Sosial dan Politik", "Administrasi Publik"],
    ["Fakultas Ilmu Sosial dan Politik", "Administrasi Bisnis"],
    ["Fakultas Ilmu Sosial dan Politik", "Hubungan Internasional"],
    ["Fakultas Teknik", "Teknik Sipil"],
    ["Fakultas Teknik", "Arsitektur"],
    ["Fakultas Teknologi Informasi dan Sains", "Matematika"],
    ["Fakultas Teknologi Informasi dan Sains", "Fisika"],
    ["Fakultas Teknologi Informasi dan Sains", "Informatika"],
  ];

  const studyProgramList = [
    [21, "Ekonomi"],
    [22, "Manajemen"],
    [23, "Akuntansi"],
    [31, "Administrasi Publik"],
    [32, "Administrasi Bisnis"],
    [33, "Hubungan Internasional"],
    [41, "Teknik Sipil"],
    [42, "Arsitektur"],
    [51, "Matematika"],
    [52, "Fisika"],
    [53, "Informatika"],
  ];

  //   const tahunDaftar = studentId.slice(0, 4);
  const kodeProgram = Number(studentId.slice(4, 6));
  //   const noUrut = studentId.slice(6);

  const prody = studyProgramList.find((value) => value[0] === kodeProgram);
  
  if (prody === undefined) {
    return "Invalid Student's ID";
  }

  const faculty = facultyList.find((value) => prody[1] === value[1]);
  const thesisLecturer = getLecturer(prody[1]);

  return {
    id: studentId,
    name,
    prody: prody[1],
    faculty: faculty[0],
    thesisLecturer,
  };
}

function getLecturer(prody) {
  const lecturerList = [
    ["Dr. Ulbert Silalahi, Drs., MA.", "Administrasi Publik"],
    ["Prof. Dr. Martinus Yuwana Marjuka, M.Si.", "Ekonomi"],
    ["Dott. Thomas Anung Basuki, ST., MKom.", "Informatika"],
    ["Dr. Cecilia Lauw Giok Swan, Ir., M.T.", "Teknik Sipil"],
    ["Catharina Tan Lian Soei,Dra.,MM.", "Manajemen"],
    ["Aldyfra Luhulima Lukman, S.T., M.T., Ph.D.", "Arsitektur"],
    ["Sapta Dwikardana, Drs., M.Si., Ph.D.", "Hubungan Internasional"],
    ["Agus, S.Sos., BAC., MBA., M.Phil", "Administrasi Bisnis"],
    ["Dr. Julius Dharma Lesmono, SSi., SE., MT., MSc.", "Matematika"],
    ["Liem Chin, SSi., MSi.", "Fisika"],
    ["Dr. Elizabeth Tiur Manurung, M.Si.,Ak., CA., CIRR.", "Akuntansi"],
  ];

  const lecturer = lecturerList.find((value) => prody === value[1]);

  return lecturer[0];
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
  console.log(process_argv());
}

module.exports = {
  studentData,
  getLecturer,
};
