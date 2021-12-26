<template>
    <div>
        <div class="row">
            <div class="col-md-3">
                <router-link to="/order" class="btn btn-primary"
                    >Today Order</router-link
                >
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="card shadow-sm my-3">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="login-form">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">
                                            Search Order
                                        </h1>
                                    </div>
                                    <form
                                        class="user"
                                        @submit.prevent="searchOrder"
                                    >
                                        <div class="form-group">
                                            <div class="form-row">
                                                <div class="col-md-6 col-sm-9">
                                                    <label
                                                        for="exampleInputSearch"
                                                        ><b
                                                            >Search By Date</b
                                                        ></label
                                                    >
                                                    <input
                                                        type="date"
                                                        class="form-control"
                                                        id="exampleInputSearch"
                                                        required
                                                        v-model="date"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-row">
                                                <div class="col-md-6 col-sm-9">
                                                    <button
                                                        type="submit"
                                                        class="btn btn-primary btn-block"
                                                    >
                                                        Search
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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
            date: "",
            orders: {},
        };
    },
    methods: {
        searchOrder() {
            var data = { date: this.date };
            axios
                .post("/api/search/order", data)
                .then(({ data }) => (this.orders = data))
                .catch((error) => (this.errors = error.response.data.errors));
        },
    },
};
</script>
<style></style>
