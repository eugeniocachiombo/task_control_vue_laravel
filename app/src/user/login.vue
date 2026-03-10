<script setup lang="ts">
const favicon = "../../public/favicon.ico";
</script>

<template>
    <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
            <div class="content-wrapper bg-dark d-flex align-items-center auth px-0">
                <div class="row w-100 mx-0 ">
                    <div class="col-lg-4 mx-auto ">
                        <div class="auth-form-dark text-white border border-light text-left py-5 px-4 px-sm-5">
                            <div class="brand-logo">
                                <!--<img v-bind:src="favicon" alt="logo"  style="min-width: 1%">-->
                            </div>
                            <h4>Autenticação</h4>
                            <h6 class="fw-light">Informe seus dados</h6>
                            <form class="pt-3">
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-lg text-white" id="exampleInputEmail1"
                                        placeholder="Username">
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control form-control-lg text-white"
                                        id="exampleInputPassword1" placeholder="Password">
                                </div>
                                <div class="mt-3">
                                    <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                                        href="#">Entrar</a>
                                </div>
                                <div class="text-center mt-4 fw-light">
                                    Não possui uma conta? <a href="#" class="text-white">Criar</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>