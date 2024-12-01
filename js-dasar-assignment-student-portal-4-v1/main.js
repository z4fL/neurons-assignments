function process_argv() {
  const { argv } = process;
  const result = studentPortal(argv[2]);

  return result;
}

function studentPortal(studentId) {
  const studentList = [
    {
      id: "2010310164",
      name: "Rakanda Pangeran Nasution",
      gpa: 2.65,
      status: false,
    },
    {
      id: "2011310021",
      name: "Yosef Noferianus Gea",
      gpa: 3.1,
      status: true,
    },
    {
      id: "2014310100",
      name: "Angelia",
      gpa: 1.25,
      status: true,
    },
    {
      id: "2011320090",
      name: "Dito Bagus Prasetio",
      gpa: 2.75,
      status: true,
    },
    {
      id: "2011320100",
      name: "Hikman Nurahman",
      gpa: 2.45,
      status: true,
    },
    {
      id: "2010320181",
      name: "Edizon",
      gpa: 1.95,
      status: true,
    },
    {
      id: "2012320055",
      name: "Marrisa Stella",
      gpa: 3.5,
      status: false,
    },
    {
      id: "2012330080",
      name: "Dea Christy Keliat",
      gpa: 3,
      status: true,
    },
    {
      id: "2013330049",
      name: "Sekarini Mahyaswari",
      gpa: 3.5,
      status: true,
    },
    {
      id: "2012330004",
      name: "Yerica",
      gpa: 3.15,
      status: false,
    },
  ];

  const result = {};

  const mhs = studentList.find((value) => value.id === studentId);
  if (!mhs) return "Mahasiswa tidak terdaftar";
  else if (mhs.status === false)
    return `Mahasiswa dengan id ${mhs.id} sudah tidak aktif`;
  else if (mhs.status === true) {
    result["id"] = mhs.id;
    result["name"] = mhs.name;
    result["gpa"] = mhs.gpa;
    result["credits"] = getCredits(mhs.gpa);
    result["subjects"] = getSubjects(result.credits);
  }

  return result;
}

function getCredits(gpa) {
  let sks = 0;
  if (gpa > 2.99) {
    sks = 24;
  } else if (gpa >= 2.5 && gpa <= 2.99) {
    sks = 21;
  } else if (gpa >= 2 && gpa <= 2.49) {
    sks = 18;
  } else if (gpa >= 1.5 && gpa <= 1.99) {
    sks = 15;
  } else if (gpa >= 0 && gpa <= 1.49) {
    sks = 12;
  }

  return sks;
}

function getSubjects(credits) {
  const subjectsList = [
    {
      subjectName: "Ilmu Politik",
      credit: 3,
      status: "wajib",
    },
    {
      subjectName: "Ilmu Ekonomi",
      credit: 3,
      status: "wajib",
    },
    {
      subjectName: "Estetika",
      credit: 1,
      status: "pilihan",
    },
    {
      subjectName: "Kepemimpinan",
      credit: 3,
      status: "wajib",
    },
    {
      subjectName: "Etika",
      credit: 2,
      status: "pilihan",
    },
    {
      subjectName: "Sosiologi",
      credit: 3,
      status: "wajib",
    },
    {
      subjectName: "Teori Pengambil keputusan",
      credit: 3,
      status: "wajib",
    },
    {
      subjectName: "Statistika",
      credit: 3,
      status: "wajib",
    },
    {
      subjectName: "Aplikasi IT",
      credit: 3,
      status: "pilihan",
    },
  ];

  let totalCredits = 0;
  const mhsSubjects = [];

  const subjectWajib = subjectsList
    .filter((data) => data.status === "wajib")
    .sort((a, b) => b.credit - a.credit);

  const subjectPilihan = subjectsList
    .filter((data) => data.status === "pilihan")
    .sort((a, b) => b.credit - a.credit);

  subjectWajib.forEach((subject) => {
    if (credits >= totalCredits + subject.credit) {
      mhsSubjects.push(subject);
      totalCredits += subject.credit;
    }
  });

  if (totalCredits <= credits) {
    subjectPilihan.forEach((subject) => {
      if (credits >= totalCredits + subject.credit) {
        mhsSubjects.push(subject);
        totalCredits += subject.credit;
      }
    });
  }

  return mhsSubjects;
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
  console.log(process_argv());
}

module.exports = {
  studentPortal,
  getSubjects,
  getCredits,
};
