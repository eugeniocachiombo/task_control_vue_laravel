<script setup lang="ts">
import axios from '@plugin/axios'

async function callget() {
    try {
       // await axios.get('/sanctum/csrf-cookie');
        const response = await axios.get("/users");
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
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
                            <h4>Criação de Conta</h4>
                            <h6 class="fw-light">Informe seus dados</h6>
                            <form class="pt-3">
                                <div class="form-group">
                                    <input type="text" class="form-control form-control-lg text-white" id="name"
                                        placeholder="Nome Completo">
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-lg text-white" id="email"
                                        placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control form-control-lg text-white" id="Password"
                                        placeholder="Senha">
                                </div>
                                <div class="mt-3">
                                    <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                                        v-on:click="callget()" href="#">Criar Conta</a>
                                </div>
                                <div class="text-center mt-4 fw-light">
                                    já tem uma conta? <a href="#" v-on:click="$router.push({ name: 'login' })"
                                        class="text-white">Entrar</a>
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