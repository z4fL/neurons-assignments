const { expect, describe, it } = require("@jest/globals");
const studentStatus = require("./main");

describe("studentStatus", () => {
    describe("When a student has an FE faculty code", () => {
        describe("When a student has a study program code 21", () => {
            it("returns a message containing the student status of the faculty of economics with the major in economics based on the student's year on studentId", () => {
                expect(studentStatus("Tisa Monita", "FE2008210164")).toBe(
                    "Mahasiswa a.n Tisa Monita terdaftar sebagai mahasiswa Program Studi Ekonomi pada Fakultas Ekonomi sejak tahun 2008."
                );
                expect(studentStatus("Ramadhoni", "FE2000210094")).toBe(
                    "Mahasiswa a.n Ramadhoni terdaftar sebagai mahasiswa Program Studi Ekonomi pada Fakultas Ekonomi sejak tahun 2000."
                );
            });
        });

        describe("When a student has a study program code 22", () => {
            it("returns a message containing the student status of the faculty of economics with a management major based on the year the student is on studentId", () => {
                expect(
                    studentStatus("Maulana Fajar Ibrahim", "FE2022220004")
                ).toBe(
                    "Mahasiswa a.n Maulana Fajar Ibrahim terdaftar sebagai mahasiswa Program Studi Manajemen pada Fakultas Ekonomi sejak tahun 2022."
                );
                expect(studentStatus("Kobar Setyanus", "FE2016220109")).toBe(
                    "Mahasiswa a.n Kobar Setyanus terdaftar sebagai mahasiswa Program Studi Manajemen pada Fakultas Ekonomi sejak tahun 2016."
                );
            });
        });

        describe("When a student has a study program code 23", () => {
            it("returns a message containing the student status of the Faculty of Economics majoring in Accounting based on the student's year on studentId", () => {
                expect(studentStatus("Riandy Fadly", "FE2023230080")).toBe(
                    "Mahasiswa a.n Riandy Fadly terdaftar sebagai mahasiswa Program Studi Akuntansi pada Fakultas Ekonomi sejak tahun 2023."
                );
                expect(
                    studentStatus("Pratama Agung Sumirat", "FE2010230010")
                ).toBe(
                    "Mahasiswa a.n Pratama Agung Sumirat terdaftar sebagai mahasiswa Program Studi Akuntansi pada Fakultas Ekonomi sejak tahun 2010."
                );
            });
        });
    });

    describe("When a student has an FISIP faculty code", () => {
        describe("When a student has a study program code 31", () => {
            it("returns a message containing the student status of the faculty of social and political sciences majoring in public administration based on student year on studentId", () => {
                expect(
                    studentStatus(
                        "Rakanda Pangeran Nasution",
                        "FISIP2010310164"
                    )
                ).toBe(
                    "Mahasiswa a.n Rakanda Pangeran Nasution terdaftar sebagai mahasiswa Program Studi Administrasi Publik pada Fakultas Ilmu Sosial dan Politik sejak tahun 2010."
                );
                expect(studentStatus("Angelia", "FISIP2014310100")).toBe(
                    "Mahasiswa a.n Angelia terdaftar sebagai mahasiswa Program Studi Administrasi Publik pada Fakultas Ilmu Sosial dan Politik sejak tahun 2014."
                );
            });
        });

        describe("When a student has a study program code 32", () => {
            it("returns a message containing the student status of the faculty of social and political sciences with a major in business administration by student year on studentId", () => {
                expect(
                    studentStatus("Dito Bagus Prasetio", "FISIP2011320090")
                ).toBe(
                    "Mahasiswa a.n Dito Bagus Prasetio terdaftar sebagai mahasiswa Program Studi Administrasi Bisnis pada Fakultas Ilmu Sosial dan Politik sejak tahun 2011."
                );
                expect(
                    studentStatus("Hikman Nurahman", "FISIP2011320100")
                ).toBe(
                    "Mahasiswa a.n Hikman Nurahman terdaftar sebagai mahasiswa Program Studi Administrasi Bisnis pada Fakultas Ilmu Sosial dan Politik sejak tahun 2011."
                );
            });
        });

        describe("When a student has a study program code 33", () => {
            it("returns a message containing the student status of the faculty of social and political sciences majoring in international relations based on student year on studentId", () => {
                expect(
                    studentStatus("Dea Christy Keliat", "FISIP2012330080")
                ).toBe(
                    "Mahasiswa a.n Dea Christy Keliat terdaftar sebagai mahasiswa Program Studi Hubungan Internasional pada Fakultas Ilmu Sosial dan Politik sejak tahun 2012."
                );
                expect(
                    studentStatus("Sekarini Mahyaswari", "FISIP2013330049")
                ).toBe(
                    "Mahasiswa a.n Sekarini Mahyaswari terdaftar sebagai mahasiswa Program Studi Hubungan Internasional pada Fakultas Ilmu Sosial dan Politik sejak tahun 2013."
                );
            });
        });
    });

    describe("When a student has an FT faculty code", () => {
        describe("When a student has a study program code 41", () => {
            it("returns a message containing the student status of the engineering faculty with the civil engineering major based on the student's year on studentId", () => {
                expect(studentStatus("Vika Merdiana", "FT2008410042")).toBe(
                    "Mahasiswa a.n Vika Merdiana terdaftar sebagai mahasiswa Program Studi Teknik Sipil pada Fakultas Teknik sejak tahun 2008."
                );
                expect(studentStatus("Maulida Laviena", "FT2014410024")).toBe(
                    "Mahasiswa a.n Maulida Laviena terdaftar sebagai mahasiswa Program Studi Teknik Sipil pada Fakultas Teknik sejak tahun 2014."
                );
            });
        });

        describe("When a student has a study program code 42", () => {
            it("returns a message containing the student status of the engineering faculty with the architecture major based on the student's year on studentId", () => {
                expect(studentStatus("Miranda", "FT2016420011")).toBe(
                    "Mahasiswa a.n Miranda terdaftar sebagai mahasiswa Program Studi Arsitektur pada Fakultas Teknik sejak tahun 2016."
                );
                expect(studentStatus("Wulandari", "FT2012420088")).toBe(
                    "Mahasiswa a.n Wulandari terdaftar sebagai mahasiswa Program Studi Arsitektur pada Fakultas Teknik sejak tahun 2012."
                );
            });
        });
    });

    describe("When a student has an FTIS faculty code", () => {
        describe("When a student has a study program code 51", () => {
            it("returns a message containing the student status of the faculties of information technology and science with a major in mathematics based on the student's year on studentId", () => {
                expect(
                    studentStatus("Muhammad Nur Fauzan", "FTIS2013510001")
                ).toBe(
                    "Mahasiswa a.n Muhammad Nur Fauzan terdaftar sebagai mahasiswa Program Studi Matematika pada Fakultas Teknologi Informasi dan Sains sejak tahun 2013."
                );
                expect(studentStatus("Tegar Prakasa", "FTIS2014510100")).toBe(
                    "Mahasiswa a.n Tegar Prakasa terdaftar sebagai mahasiswa Program Studi Matematika pada Fakultas Teknologi Informasi dan Sains sejak tahun 2014."
                );
            });
        });

        describe("When a student has a study program code 52", () => {
            it("returns a message containing the student status of the information technology and science faculties with the physics major based on the student's year on studentId", () => {
                expect(
                    studentStatus("Dimitri Wahyudi Putra", "FTIS2018520090")
                ).toBe(
                    "Mahasiswa a.n Dimitri Wahyudi Putra terdaftar sebagai mahasiswa Program Studi Fisika pada Fakultas Teknologi Informasi dan Sains sejak tahun 2018."
                );
                expect(studentStatus("Arrizal Rahmat", "FTIS2012520100")).toBe(
                    "Mahasiswa a.n Arrizal Rahmat terdaftar sebagai mahasiswa Program Studi Fisika pada Fakultas Teknologi Informasi dan Sains sejak tahun 2012."
                );
            });
        });

        describe("When a student has a study program code 53", () => {
            it("returns a message containing student status from information technology and science faculties with informatics majors based on student year on studentId", () => {
                expect(studentStatus("Annisa Tahira", "FTIS2013530080")).toBe(
                    "Mahasiswa a.n Annisa Tahira terdaftar sebagai mahasiswa Program Studi Informatika pada Fakultas Teknologi Informasi dan Sains sejak tahun 2013."
                );
                expect(
                    studentStatus(
                        "Alvin Arkansas Hanyokrokusumo",
                        "FTIS2014530049"
                    )
                ).toBe(
                    "Mahasiswa a.n Alvin Arkansas Hanyokrokusumo terdaftar sebagai mahasiswa Program Studi Informatika pada Fakultas Teknologi Informasi dan Sains sejak tahun 2014."
                );
            });
        });
    });
});
