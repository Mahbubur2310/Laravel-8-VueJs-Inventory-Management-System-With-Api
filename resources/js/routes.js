let login = require("./components/auth/Login.vue").default;
let register = require("./components/auth/Register.vue").default;

export const routes = [
    { path: "/", component: login, name: "/" },
    { path: "/register", component: register, name: "register" },
];
