<template>
    <div>
        <div class="row">
            <div class="col-md-3">
                <router-link to="/store-employee" class="btn btn-primary"
                    >Add Employee</router-link
                >
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="card shadow-sm my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="login-form">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">
                                            ALL Employee
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created() {
        if (!User.loggedIn()) {
            this.$router.push({ name: "/" });
        }
    },
    data() {
        return {
            form: {
                name: null,
                email: null,
                address: null,
                salary: null,
                phone: null,
                nid: null,
                photo: null,
                joining_date: null,
            },
            errors: {},
        };
    },
    methods: {
        employeeInsert() {},
    },
};
</script>
<style></style>
