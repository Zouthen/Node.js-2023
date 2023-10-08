import { readPage, renderPage ,renderPageLogin} from "./templateEngine.js";

const login = readPage("./public/pages/login/login.html");
export const loginPage = renderPageLogin(login, {
    tabTitle: "Login",
    cssLinks: `<link rel="stylesheet" href="/assets/css/pages.css">`
});

const frontpage = readPage("./public/pages/frontpage/frontpage.html");
export const frontpagePage = renderPage(frontpage, {
    tabTitle: "Welcome"
});

const setup = readPage("./public/pages/setup/setup.html");
export const setupPage = renderPage(setup, {
    tabTitle: "Setup",
    cssLinks: `<link rel="stylesheet" href="/assets/css/pages.css">`
});

const datatypes = readPage("./public/pages/datatypes/datatypes.html");
export const datatypesPage = renderPage(datatypes, {
    tabTitle: "Datatypes",
    cssLinks: `<link rel="stylesheet" href="/assets/css/pages.css">`
});

const scope = readPage("./public/pages/scope/scope.html");
export const scopePage = renderPage(scope, {
    tabTitle: "Scope",
    cssLinks: `<link rel="stylesheet" href="/assets/css/pages.css">`
});

const frontend = readPage("./public/pages/frontend/frontend.html");
export const frontendPage = renderPage(frontend, {
    tabTitle: "Frontend",
    cssLinks: `<link rel="stylesheet" href="/assets/css/pages.css">`
});

const contact = readPage("./public/pages/contact/contact.html");
export const contactPage = renderPage(contact, {
    tabTitle: "Contact",
    cssLinks: `<link rel="stylesheet" href="/assets/css/pages.css">`
});