import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import cheerio from "cheerio";
import { url, studentName, studentId } from "./Task";

jest.setTimeout(45000);

describe("test deployment", () => {
    it("should have student name on local", async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <App />
            </MemoryRouter>
        );

        const studentNamePatern = new RegExp(studentName, "i");
        const studentNameComponent = screen.getByText(studentNamePatern);

        expect(studentNameComponent?.textContent).toBe(studentName);
    });

    it("should have student id on local", async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <App />
            </MemoryRouter>
        );

        const studentIdComponent = screen.getByText(studentId);
        expect(studentIdComponent?.textContent).toBe(studentId);
    });

    it("Application should be deploy on Firebase", () => {
        expect(url).not.toBe("");
        expect(/(\.web\.app\/?|\.firebaseapp\.com\/?)$/i.test(url)).toBe(true);
    });

    it("should have same student name and student id on deploy site", async () => {
        console.log(url)
        const response = await fetch(
            `https://asia-southeast1-silicon-airlock-153323.cloudfunctions.net/km-reactJSDeploymentCheck?url=${url}`
        );
        const html = await response.text();

        const $ = cheerio.load(html);

        expect($(".studentName").text()).toBe(studentName);
        expect($(".studentId").text()).toBe(studentId);
    });
});
