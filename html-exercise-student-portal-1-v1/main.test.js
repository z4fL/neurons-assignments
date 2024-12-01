const { readFileSync } = require("fs");
const { JSDOM } = require("jsdom");
const { resolve } = require("path");

const html = readFileSync(resolve(__dirname, "index.html"), "utf8");

let windowJSDOM = null;

beforeEach(() => {
    const { window } = new JSDOM(html, {
        runScripts: "dangerously",
        includeNodeLocations: false,
        pretendToBeVisual: true,
    });

    windowJSDOM = window;
});

describe("Assignment Student Portal - Admin Page", () => {
    describe("Form", () => {
        it("should have an 'id' of 'form-student'", () => {
            const document = windowJSDOM.document;
            expect(document.querySelector("form").id).toBe("form-student");
        });

        it("should have 5 labels namely 'Fullname', 'Birth Date', 'Gender', and 'Program Study'", () => {
            const document = windowJSDOM.document;
            const labels = document.querySelectorAll("label");
            const labelsNames = [
                "Fullname",
                "Birth Date",
                "Gender",
                "Program Study",
            ];
            let existingLabels = [];

            for (let i = 0; i < labels.length; i++) {
                existingLabels.push(labels[i].innerHTML);
            }

            expect(existingLabels).toHaveLength(4);
            expect(existingLabels).toEqual(expect.arrayContaining(labelsNames));
        });

        it("should have 'input' with 'type' 'text' and 'id' of 'input-name'", () => {
            const document = windowJSDOM.document;
            expect(document.getElementById("input-name")).not.toBeNull();
            expect(document.getElementById("input-name").type).toBe("text");
            expect(document.getElementById("input-name").localName).toBe(
                "input"
            );
        });

        it("should have 'input' with 'type' 'date' and 'id' of 'input-date'", () => {
            const document = windowJSDOM.document;
            expect(document.getElementById("input-date")).not.toBeNull();
            expect(document.getElementById("input-date").type).toBe("date");
            expect(document.getElementById("input-date").localName).toBe(
                "input"
            );
        });

        it("should have 'select' and have 'id' of 'input-gender' and have 'options' of 'Male' and 'Female'", () => {
            const document = windowJSDOM.document;
            expect(document.getElementById("input-gender")).not.toBeNull();
            expect(document.getElementById("input-gender").localName).toBe(
                "select"
            );

            const children = document.getElementById("input-gender").children;
            const childrensNames = ["Male", "Female"];
            let existingChildrens = [];

            for (let i = 0; i < children.length; i++) {
                existingChildrens.push(children[i].textContent);
            }

            expect(children).toHaveLength(2);
            expect(existingChildrens).toEqual(
                expect.arrayContaining(childrensNames)
            );
        });

        it("should have 'select' and have 'id' of 'input-prody' and have 'options' of existing program study", () => {
            const document = windowJSDOM.document;
            expect(document.getElementById("input-prody")).not.toBeNull();
            expect(document.getElementById("input-prody").localName).toBe(
                "select"
            );

            const children = document.getElementById("input-prody").children;
            const childrensNames = [
                "Ekonomi",
                "Manajemen",
                "Akuntansi",
                "Administrasi Publik",
                "Administrasi Bisnis",
                "Hubungan Internasional",
                "Teknik Sipil",
                "Arsitektur",
                "Matematika",
                "Fisika",
                "Informatika",
            ];
            let existingChildrens = [];

            for (let i = 0; i < children.length; i++) {
                existingChildrens.push(children[i].text);
            }

            expect(children).toHaveLength(11);
            expect(existingChildrens).toEqual(
                expect.arrayContaining(childrensNames)
            );
        });

        it("should have a button using 'input' with 'type' 'submit', 'value' 'Add student' and 'id' being 'add-btn'", () => {
            const document = windowJSDOM.document;
            expect(document.getElementById("add-btn")).not.toBeNull();
            expect(document.getElementById("add-btn").type).toBe(
                "submit"
            );
            expect(document.getElementById("add-btn").localName).toBe(
                "input"
            );
            expect(document.getElementById("add-btn").value).toBe(
                "Add student"
            );
        });
    });

    describe("Table", () => {
        it("should have an 'id' of 'table-student'", () => {
            const document = windowJSDOM.document;
            expect(document.querySelector("table").id).toBe("table-student");
        });

        it("there should be several 'th' elements in the head in the form of 'No', 'Full Name', 'Birth Date', 'Gender', 'Student ID', 'Faculty', 'Program Study', and 'Option'", () => {
            const document = windowJSDOM.document;
            const th = document.querySelectorAll("th");
            const thNames = [
                "No",
                "Full Name",
                "Birth Date",
                "Gender",
                "Student ID",
                "Faculty",
                "Program Study",
                "Option",
            ];
            let existingTh = [];

            for (let i = 0; i < th.length; i++) {
                existingTh.push(th[i].innerHTML);
            }

            expect(existingTh.length).toBe(8);
            expect(existingTh).toEqual(expect.arrayContaining(thNames));
        });

        it("should have an 'id' of 'student-data' for the 'tbody' element", () => {
            const document = windowJSDOM.document;
            expect(document.querySelector("tbody").id).toBe("student-data");
        });

        it("should have at least 1 dummy data in the 'tbody' section", () => {
            const document = windowJSDOM.document;
            expect(
                document.querySelector("tbody").children.length
            ).toBeGreaterThan(0);
            expect(
                document.querySelectorAll("td").length
            ).toBeGreaterThanOrEqual(8);
        });

        it("the delete button in the `Option` section should be a `button` html tag with a `type` of `button` and `id` of `delete-btn`", () => {
            const document = windowJSDOM.document;
            expect(document.getElementsByClassName("delete-btn")).not.toBeNull();
            expect(document.querySelector("button").type).toBe("button");
        });
    });
});
