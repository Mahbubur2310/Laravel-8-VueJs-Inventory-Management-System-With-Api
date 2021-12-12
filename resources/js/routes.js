let login = require("./components/auth/Login.vue").default;
let register = require("./components/auth/Register.vue").default;
let forget = require("./components/auth/Forget.vue").default;

export const routes = [
    { path: "/", component: login, name: "/" },
    { path: "/register", component: register, name: "register" },
    { path: "/forget", component: forget, name: "forget" },
];
