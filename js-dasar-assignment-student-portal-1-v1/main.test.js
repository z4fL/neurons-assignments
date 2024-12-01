const { expect, describe, it } = require("@jest/globals");
const krsApplication = require("./main");

describe("krsApplication", () => {
    describe("when a student has a GPA of more than equal to 3", () => {
        it("returns a message stating that a student can take up to 24 credits", () => {
            let result1 =
                "Hallo Joel, berdasarkan IP semester lalu sebesar 3, kamu dapat mengambil SKS sebanyak 24 SKS untuk semester depan.";
            let result2 =
                "Hallo Ellie, berdasarkan IP semester lalu sebesar 3.5, kamu dapat mengambil SKS sebanyak 24 SKS untuk semester depan.";

            expect(krsApplication("Joel", "TKM", "3")).toBe(result1);
            expect(krsApplication("Ellie", "HIN", "3.5")).toBe(result2);
        });
    });

    describe("when a student has a GPA of more than or equal to 2.5 and less than 3", () => {
        it("returns a message stating that a student can take up to 21 credits and is required to carry out tutoring with study program lecturers", () => {
            let result1 =
                "Hallo Joel, berdasarkan IP semester lalu sebesar 2.5, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Ilmu Administrasi Bisnis dan hanya dapat mengambil SKS sebanyak 21 SKS untuk semester depan.";
            let result2 =
                "Hallo Ellie, berdasarkan IP semester lalu sebesar 2.75, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Ilmu Administrasi Publik dan hanya dapat mengambil SKS sebanyak 21 SKS untuk semester depan.";

            expect(krsApplication("Joel", "IAB", "2.5")).toBe(result1);
            expect(krsApplication("Ellie", "IAP", "2.75")).toBe(result2);
        });
    });

    describe("when a student has a GPA of more than equal to 2 and less than 2.5", () => {
        it("returns a message stating that a student can take up to 18 credits and is required to carry out tutoring with study program lecturers", () => {
            let result1 =
                "Hallo Joel, berdasarkan IP semester lalu sebesar 2, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Akuntansi dan hanya dapat mengambil SKS sebanyak 18 SKS untuk semester depan.";
            let result2 =
                "Hallo Ellie, berdasarkan IP semester lalu sebesar 2.4, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Manajemen dan hanya dapat mengambil SKS sebanyak 18 SKS untuk semester depan.";

            expect(krsApplication("Joel", "ACC", "2")).toBe(result1);
            expect(krsApplication("Ellie", "MJN", "2.4")).toBe(result2);
        });
    });

    describe("when a student has a GPA of more than or equal to 1.5 and less than 2", () => {
        it("returns a message stating that a student can take up to 15 credits and is required to carry out tutoring with study program lecturers", () => {
            let result1 =
                "Hallo Joel, berdasarkan IP semester lalu sebesar 1.75, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Teknik Kimia dan hanya dapat mengambil SKS sebanyak 15 SKS untuk semester depan.";
            let result2 =
                "Hallo Ellie, berdasarkan IP semester lalu sebesar 1.5, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Manajemen dan hanya dapat mengambil SKS sebanyak 15 SKS untuk semester depan.";

            expect(krsApplication("Joel", "TKM", "1.75")).toBe(result1);
            expect(krsApplication("Ellie", "MJN", "1.5")).toBe(result2);
        });
    });

    describe("when a student has a GPA of more than or equal to 0 and less than 1.5", () => {
        it("returns a message stating that a student can take up to 12 credits and is required to carry out tutoring with study program lecturers", () => {
            let result1 =
                "Hallo Joel, berdasarkan IP semester lalu sebesar 0.9, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Ilmu Administrasi Bisnis dan hanya dapat mengambil SKS sebanyak 12 SKS untuk semester depan.";
            let result2 =
                "Hallo Ellie, berdasarkan IP semester lalu sebesar 0, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Hubungan Internasional dan hanya dapat mengambil SKS sebanyak 12 SKS untuk semester depan.";

            expect(krsApplication("Joel", "IAB", "0.9")).toBe(result1);
            expect(krsApplication("Ellie", "HIN", "0")).toBe(result2);
        });
    });

    describe("when a student has a GPA of more than 4 and less than 0", () => {
        it("returns invalid gpa number", () => {
            expect(krsApplication("Joel", "ACC", "4.1")).toBe(
                "Invalid gpa number"
            );
            expect(krsApplication("Ellie", "TKM", "-1")).toBe(
                "Invalid gpa number"
            );
        });
    });
});
