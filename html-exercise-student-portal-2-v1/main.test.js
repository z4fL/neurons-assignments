import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { resolve as path_resolve } from "path";
import { stylesheetInjector } from "./stylesheet-injector";

const html = readFileSync(path_resolve(__dirname, "index.html"), "utf8");
const { window } = new JSDOM(html, {
  runScripts: "dangerously",
  includeNodeLocations: false,
  pretendToBeVisual: true,
});

let { document } = window;

describe("Render", () => {
  it("Should have separated stylesheet file", () => {
    const link = document.querySelectorAll("link");
    let stylesheetElement = null;
    for (let i = 0; i < link.length; i++) {
      if (
        link[i].rel === "stylesheet" &&
        link[i].href &&
        !link[i].href.startsWith("http")
      ) {
        stylesheetElement = link[i];
        break;
      }
    }

    expect(stylesheetElement).not.toBeNull();
    expect(stylesheetElement?.href).toMatch(/.*\.css$/);
  });

});

describe("Style", () => {
  let elements = [];
  let computedStyles = [];

  beforeAll(async () => {
    document = await stylesheetInjector(document, __dirname);
    elements = [...(document.querySelectorAll("*"))];
    computedStyles = elements.map((element) => {
      return window.getComputedStyle(element);
    });
  }, 30000);

  // at least one component use grid
  it("should have at least one component use grid", () => {
    const gridElements = computedStyles.filter((style) => {
      return style.display === "grid";
    });
    // const gridElements = document.querySelectorAll("[style*='grid']");
    expect(gridElements.length).toBeGreaterThan(0);
  });

  // at least one component use use grid-template-areas or grid-template-columns or grid-template-rows
  it("should have at least one component use use grid-template-areas or grid-template-columns or grid-template-rows", () => {
    const gridElements = computedStyles.filter((style) => {
      return (
        style.display === "grid" &&
        (style.gridTemplateAreas !== "" ||
          style.gridTemplateColumns !== "" ||
          style.gridTemplateRows !== "")
      );
    });
    expect(gridElements.length).toBeGreaterThan(0);
  });

  // at least one component use use grid-gap
  it("should have at least one component use gap", () => {
    const gridElements = computedStyles.filter((style) => {
      return style.display === "grid" && style.gap !== "";
    });
    expect(gridElements.length).toBeGreaterThan(0);
  });

  // at least one component use flexbox
  it("should have at least one component use flexbox", () => {
    const flexElements = computedStyles.filter((style) => {
      return style.display === "flex";
    });
    expect(flexElements.length).toBeGreaterThan(0);
  });

  // at least one component use justify-content
  it("should have at least one component use justify-content", () => {
    const flexElements = computedStyles.filter((style) => {
      return style.display === "flex" && style.justifyContent !== "";
    });
    expect(flexElements.length).toBeGreaterThan(0);
  });
});
