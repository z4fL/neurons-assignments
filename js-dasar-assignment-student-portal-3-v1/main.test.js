const { expect, describe, it } = require("@jest/globals");
const { studentData, getLecturer } = require("./main");

describe("studentData", () => {
    describe("when the student id has an invalid study program code", () => {
        it("returns an error message of 'Invalid Student's ID'", () => {
            expect(studentData("Romli", "2018870038")).toBe(
                "Invalid Student's ID"
            );
            expect(studentData("Henky", "2011100204")).toBe(
                "Invalid Student's ID"
            );
            expect(studentData("Ismet", "2012610001")).toBe(
                "Invalid Student's ID"
            );
        });
    });

    describe("when the student id has a valid study program code", () => {
        describe("When a student has a study program code 21", () => {
            it("return student data of Economics Faculty students in the Economics study program with the appropriate thesis lecturer", () => {
                expect(studentData("Tisa Monita", "2008210164")).toEqual({
                    id: "2008210164",
                    name: "Tisa Monita",
                    prody: "Ekonomi",
                    faculty: "Fakultas Ekonomi",
                    thesisLecturer: "Prof. Dr. Martinus Yuwana Marjuka, M.Si.",
                });
                expect(studentData("Ramadhoni", "2000210094")).toEqual({
                    id: "2000210094",
                    name: "Ramadhoni",
                    prody: "Ekonomi",
                    faculty: "Fakultas Ekonomi",
                    thesisLecturer: "Prof. Dr. Martinus Yuwana Marjuka, M.Si.",
                });
            });
        });

        describe("When a student has a study program code 22", () => {
            it("return student data of Economics Faculty students in the Management study program with the appropriate thesis lecturer", () => {
                expect(
                    studentData("Maulana Fajar Ibrahim", "2022220004")
                ).toEqual({
                    id: "2022220004",
                    name: "Maulana Fajar Ibrahim",
                    prody: "Manajemen",
                    faculty: "Fakultas Ekonomi",
                    thesisLecturer: "Catharina Tan Lian Soei,Dra.,MM.",
                });
                expect(studentData("Kobar Setyanus", "2016220109")).toEqual({
                    id: "2016220109",
                    name: "Kobar Setyanus",
                    prody: "Manajemen",
                    faculty: "Fakultas Ekonomi",
                    thesisLecturer: "Catharina Tan Lian Soei,Dra.,MM.",
                });
            });
        });

        describe("When a student has a study program code 23", () => {
            it("return student data of Economics Faculty students in the Accounting study program with the appropriate thesis lecturer", () => {
                expect(studentData("Riandy Fadly", "2023230080")).toEqual({
                    id: "2023230080",
                    name: "Riandy Fadly",
                    prody: "Akuntansi",
                    faculty: "Fakultas Ekonomi",
                    thesisLecturer:
                        "Dr. Elizabeth Tiur Manurung, M.Si.,Ak., CA., CIRR.",
                });
                expect(studentData("Riandy Fadly", "2023230080")).toEqual({
                    id: "2023230080",
                    name: "Riandy Fadly",
                    prody: "Akuntansi",
                    faculty: "Fakultas Ekonomi",
                    thesisLecturer:
                        "Dr. Elizabeth Tiur Manurung, M.Si.,Ak., CA., CIRR.",
                });
            });
        });

        describe("When a student has a study program code 31", () => {
            it("return student data of the Faculty of Social and Political Sciences in the Public Administration study program with the appropriate thesis lecturer", () => {
                expect(
                    studentData("Rakanda Pangeran Nasution", "2010310164")
                ).toEqual({
                    id: "2010310164",
                    name: "Rakanda Pangeran Nasution",
                    prody: "Administrasi Publik",
                    faculty: "Fakultas Ilmu Sosial dan Politik",
                    thesisLecturer: "Dr. Ulbert Silalahi, Drs., MA.",
                });
                expect(studentData("Angelia", "2014310100")).toEqual({
                    id: "2014310100",
                    name: "Angelia",
                    prody: "Administrasi Publik",
                    faculty: "Fakultas Ilmu Sosial dan Politik",
                    thesisLecturer: "Dr. Ulbert Silalahi, Drs., MA.",
                });
            });
        });

        describe("When a student has a study program code 32", () => {
            it("return student data of the Faculty of Social and Political Sciences in the Business Administration study program with the appropriate thesis lecturer", () => {
                expect(
                    studentData("Dito Bagus Prasetio", "2011320090")
                ).toEqual({
                    id: "2011320090",
                    name: "Dito Bagus Prasetio",
                    prody: "Administrasi Bisnis",
                    faculty: "Fakultas Ilmu Sosial dan Politik",
                    thesisLecturer: "Agus, S.Sos., BAC., MBA., M.Phil",
                });
                expect(studentData("Hikman Nurahman", "2011320100")).toEqual({
                    id: "2011320100",
                    name: "Hikman Nurahman",
                    prody: "Administrasi Bisnis",
                    faculty: "Fakultas Ilmu Sosial dan Politik",
                    thesisLecturer: "Agus, S.Sos., BAC., MBA., M.Phil",
                });
            });
        });

        describe("When a student has a study program code 33", () => {
            it("return student data of the Faculty of Social and Political Sciences in the International Relations study program with the appropriate thesis lecturer", () => {
                expect(studentData("Dea Christy Keliat", "2012330080")).toEqual(
                    {
                        id: "2012330080",
                        name: "Dea Christy Keliat",
                        prody: "Hubungan Internasional",
                        faculty: "Fakultas Ilmu Sosial dan Politik",
                        thesisLecturer: "Sapta Dwikardana, Drs., M.Si., Ph.D.",
                    }
                );
                expect(
                    studentData("Sekarini Mahyaswari", "2013330049")
                ).toEqual({
                    id: "2013330049",
                    name: "Sekarini Mahyaswari",
                    prody: "Hubungan Internasional",
                    faculty: "Fakultas Ilmu Sosial dan Politik",
                    thesisLecturer: "Sapta Dwikardana, Drs., M.Si., Ph.D.",
                });
            });
        });

        describe("When a student has a study program code 41", () => {
            it("return student data of Engineering Faculty students in the Civil Engineering study program with the appropriate thesis lecturer", () => {
                expect(studentData("Vika Merdiana", "2008410042")).toEqual({
                    id: "2008410042",
                    name: "Vika Merdiana",
                    prody: "Teknik Sipil",
                    faculty: "Fakultas Teknik",
                    thesisLecturer: "Dr. Cecilia Lauw Giok Swan, Ir., M.T.",
                });
                expect(studentData("Maulida Laviena", "2014410024")).toEqual({
                    id: "2014410024",
                    name: "Maulida Laviena",
                    prody: "Teknik Sipil",
                    faculty: "Fakultas Teknik",
                    thesisLecturer: "Dr. Cecilia Lauw Giok Swan, Ir., M.T.",
                });
            });
        });

        describe("When a student has a study program code 42", () => {
            it("return student data of Engineering Faculty students in the Architecture study program with the appropriate thesis lecturer", () => {
                expect(studentData("Miranda", "2016420011")).toEqual({
                    id: "2016420011",
                    name: "Miranda",
                    prody: "Arsitektur",
                    faculty: "Fakultas Teknik",
                    thesisLecturer:
                        "Aldyfra Luhulima Lukman, S.T., M.T., Ph.D.",
                });
                expect(studentData("Wulandari", "201242088")).toEqual({
                    id: "201242088",
                    name: "Wulandari",
                    prody: "Arsitektur",
                    faculty: "Fakultas Teknik",
                    thesisLecturer:
                        "Aldyfra Luhulima Lukman, S.T., M.T., Ph.D.",
                });
            });
        });

        describe("When a student has a study program code 51", () => {
            it("return student data of the Faculty of Information Technology and Science in the Mathematics study program with the appropriate thesis lecturer", () => {
                expect(
                    studentData("Muhammad Nur Fauzan", "2013510001")
                ).toEqual({
                    id: "2013510001",
                    name: "Muhammad Nur Fauzan",
                    prody: "Matematika",
                    faculty: "Fakultas Teknologi Informasi dan Sains",
                    thesisLecturer:
                        "Dr. Julius Dharma Lesmono, SSi., SE., MT., MSc.",
                });
                expect(studentData("Tegar Prakasa", "2014510100")).toEqual({
                    id: "2014510100",
                    name: "Tegar Prakasa",
                    prody: "Matematika",
                    faculty: "Fakultas Teknologi Informasi dan Sains",
                    thesisLecturer:
                        "Dr. Julius Dharma Lesmono, SSi., SE., MT., MSc.",
                });
            });
        });

        describe("When a student has a study program code 52", () => {
            it("return student data of the Faculty of Information Technology and Science in the Physics study program with the appropriate thesis lecturer", () => {
                expect(
                    studentData("Dimitri Wahyudi Putra", "2018520090")
                ).toEqual({
                    id: "2018520090",
                    name: "Dimitri Wahyudi Putra",
                    prody: "Fisika",
                    faculty: "Fakultas Teknologi Informasi dan Sains",
                    thesisLecturer: "Liem Chin, SSi., MSi.",
                });
                expect(studentData("Arrizal Rahmat", "2012520100")).toEqual({
                    id: "2012520100",
                    name: "Arrizal Rahmat",
                    prody: "Fisika",
                    faculty: "Fakultas Teknologi Informasi dan Sains",
                    thesisLecturer: "Liem Chin, SSi., MSi.",
                });
            });
        });

        describe("When a student has a study program code 53", () => {
            it("return student data of the Faculty of Information Technology and Science in the Informatics study program with the appropriate thesis lecturer", () => {
                expect(studentData("Annisa Tahira", "2013530080")).toEqual({
                    id: "2013530080",
                    name: "Annisa Tahira",
                    prody: "Informatika",
                    faculty: "Fakultas Teknologi Informasi dan Sains",
                    thesisLecturer: "Dott. Thomas Anung Basuki, ST., MKom.",
                });
                expect(
                    studentData("Alvin Arkansas Hanyokrokusumo", "2014530049")
                ).toEqual({
                    id: "2014530049",
                    name: "Alvin Arkansas Hanyokrokusumo",
                    prody: "Informatika",
                    faculty: "Fakultas Teknologi Informasi dan Sains",
                    thesisLecturer: "Dott. Thomas Anung Basuki, ST., MKom.",
                });
            });
        });
    });
});

describe("getLecturer", () => {
    it("returns the name of the thesis lecturer according to the study program", () => {
        expect(getLecturer("Ekonomi")).toBe(
            "Prof. Dr. Martinus Yuwana Marjuka, M.Si."
        );
        expect(getLecturer("Administrasi Bisnis")).toBe(
            "Agus, S.Sos., BAC., MBA., M.Phil"
        );
        expect(getLecturer("Arsitektur")).toBe(
            "Aldyfra Luhulima Lukman, S.T., M.T., Ph.D."
        );
        expect(getLecturer("Fisika")).toBe("Liem Chin, SSi., MSi.");
    });
});
