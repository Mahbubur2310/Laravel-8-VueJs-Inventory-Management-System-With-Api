let login = require("./components/auth/Login.vue").default;
let register = require("./components/auth/Register.vue").default;
let forget = require("./components/auth/Forget.vue").default;
let logout = require("./components/auth/Logout.vue").default;
// Employee
let storeEmployee = require("./components/employee/create.vue").default;
let employee = require("./components/employee/index.vue").default;
let editemployee = require("./components/employee/edit.vue").default;
// Supplier
let storeSupplier = require("./components/supplier/create.vue").default;
let supplier = require("./components/supplier/index.vue").default;
let editsupplier = require("./components/supplier/edit.vue").default;
// Category
let storeCategory = require("./components/category/create.vue").default;
let category = require("./components/category/index.vue").default;
let editcategory = require("./components/category/edit.vue").default;
// Product
let storeProduct = require("./components/product/create.vue").default;
let product = require("./components/product/index.vue").default;
let editproduct = require("./components/product/edit.vue").default;
// Expense
let storeExpense = require("./components/expense/create.vue").default;
let expense = require("./components/expense/expense.vue").default;
let editexpense = require("./components/expense/edit.vue").default;

//End Authentication
let home = require("./components/home.vue").default;

export const routes = [
    { path: "/", component: login, name: "/" },
    { path: "/register", component: register, name: "register" },
    { path: "/forget", component: forget, name: "forget" },
    { path: "/logout", component: logout, name: "logout" },
    { path: "/home", component: home, name: "home" },

    //Employe Route
    {
        path: "/store-employee",
        component: storeEmployee,
        name: "store-employee",
    },
    {
        path: "/employee",
        component: employee,
        name: "employee",
    },
    {
        path: "/edit-employee/:id",
        component: editemployee,
        name: "edit-employee",
    },

    //Supplier Route
    {
        path: "/store-supplier",
        component: storeSupplier,
        name: "store-supplier",
    },
    {
        path: "/supplier",
        component: supplier,
        name: "supplier",
    },
    {
        path: "/edit-supplier/:id",
        component: editsupplier,
        name: "edit-supplier",
    },

    //Category Route
    {
        path: "/store-category",
        component: storeCategory,
        name: "store-category",
    },
    {
        path: "/category",
        component: category,
        name: "category",
    },
    {
        path: "/edit-category/:id",
        component: editcategory,
        name: "edit-category",
    },

    //Product Route
    {
        path: "/store-product",
        component: storeProduct,
        name: "store-product",
    },
    {
        path: "/product",
        component: product,
        name: "product",
    },
    {
        path: "/edit-product/:id",
        component: editproduct,
        name: "edit-product",
    },

    //Expense Route
    {
        path: "/store-expense",
        component: storeExpense,
        name: "store-expense",
    },
    {
        path: "/expense",
        component: expense,
        name: "expense",
    },
    {
        path: "/edit-expense/:id",
        component: editexpense,
        name: "edit-expense",
    },
];
