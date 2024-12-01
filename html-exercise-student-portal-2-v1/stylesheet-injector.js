import { readFileSync } from "fs";
import { resolve as path_resolve } from "path";
import axios from "axios";

export async function stylesheetInjector(document, currentPath) {
    console.log("📀 Injecting stylesheets");
    const linkTags = document.querySelectorAll("link");
    for (let i = 0; i < linkTags.length; i++) {
        const isStylesheet = linkTags[i].getAttribute("rel") === "stylesheet";
        if (isStylesheet) {
            const href = linkTags[i].getAttribute("href");
            if (href) {
                linkTags[i].remove();
                try {
                    let css = "";
                    if (href.startsWith("http")) {
                        css = await axios.get(href).then((res) => res.data);
                    } else {
                        css = readFileSync(
                            path_resolve(currentPath, href),
                            "utf8"
                        );
                    }
                    const styleTag = document.createElement("style");
                    styleTag.innerHTML = css;
                    document.head.appendChild(styleTag);
                } catch (e) {
                    console.error(e);
                }
            }
        }
    }

    return document;
}
