let login = require("./components/auth/Login.vue").default;
let register = require("./components/auth/Register.vue").default;
let forget = require("./components/auth/Forget.vue").default;
let logout = require("./components/auth/Logout.vue").default;

//End Authentication
let home = require("./components/home.vue").default;

export const routes = [
    { path: "/", component: login, name: "/" },
    { path: "/register", component: register, name: "register" },
    { path: "/forget", component: forget, name: "forget" },
    { path: "/logout", component: logout, name: "logout" },
    { path: "/home", component: home, name: "home" },
];
