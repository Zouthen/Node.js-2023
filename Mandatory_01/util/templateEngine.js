import fs from "fs";

export function readPage(filePath) {
    return fs.readFileSync(filePath).toString();
}

export function renderPage(page, config={}) {
    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
        .replace("$TAB_TITLE", config.tabTitle || "")
        .replace("$CSS_LINKS", config.cssLinks || "");
    const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

    return navbar + page + footer;
}

export function renderPageLogin(page, config={}) {
    const navbar = fs.readFileSync("./public/components/navbar/navbarLogin.html").toString()
        .replace("$TAB_TITLE", config.tabTitle || "")
        .replace("$CSS_LINKS", config.cssLinks || "");
    const footer = fs.readFileSync("./public/components/footer/footerLogin.html").toString();

    return navbar + page + footer;
}