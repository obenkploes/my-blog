<template>
    <div class="login-container d-flex align-items-center vh-100 bg-primary bg-gradient">
        <div class="login-box card card-body mx-auto border-0 shadow">
            <h1 class="login-title fw-bold h2 text-black-50 text-center">
                Login to dashboard
            </h1>
            <form action="" method="post">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="username" placeholder="Username">
                    <label for="username">Username</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="password" placeholder="Password">
                    <label for="password">Password</label>
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary form-control py-2">
                        Login
                        <i class="bi bi-box-arrow-in-right"></i>
                    </button>
                </div>
                <div class="mb-3">
                    <span>Lupa password,&nbsp;</span>
                    <a href="#">klik disini!</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .login-box{
        width: 100%;
        max-width: 400px;
        h1{
            margin-bottom: 50px;
        }
    }
</style>