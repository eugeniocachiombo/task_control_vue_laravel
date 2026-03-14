<script setup lang="ts">
import { useRoute } from 'vue-router';
import axios from '@plugin/axios';
import { ref } from 'vue';
import sweetalert from '@run_alert/run_sweetalert'


let email: string = '';
let password: string = '';
let validations: any = ref({});
let spinner: any = ref(false);

async function auth() {

    spinner.value = true;
    validations.value = {};

    try {
        await axios.get('/sanctum/csrf-cookie');
        const response = await axios.post("/api/v1/login", {
             email,
             password
        });

        if (response.data && response.status == 200) {
            localStorage.setItem('userLogged', response.data.id);
            console.log("logado")
            clear();
        }
    } catch (error: any) {
        console.log(error);
        //console.error(error);
        validations.value = error.response.data.errors ?? '';
        let notFound = error.response.data.length;
        if (notFound == 0) {
            sweetalert({
                'icon': 'error',
                'title': 'Dados Inválidos',
                'html': 'Verifique o seu email e a senha',
                'btn': true
            });
        }
    } finally {
        spinner.value = false;
    }
}

function clear() {
    email = '';
    password = '';
    validations.value = {};
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
                            <h4>Autenticação</h4>
                            <h6 class="fw-light">Informe seus dados</h6>
                            <form class="pt-3">
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-lg text-white" id="email"
                                        v-model="email" placeholder="Email">
                                    <p v-if="validations.email" class="text-danger">{{ validations.email.join("") }}</p>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control form-control-lg text-white"
                                        v-model="password" id="password" placeholder="Senha">
                                    <p v-if="validations.password" class="text-danger">{{ validations.password.join("")}}</p>
                                </div>
                                <div class="mt-3">
                                    <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                                        v-on:click="auth()" href="#">
                                        <i v-if="spinner" class="spinner-border spinner-border-sm me-2"></i>
                                        Entrar</a>
                                </div>
                                <div class="text-center mt-4 fw-light">
                                    Não possui uma conta? <a href="#" v-on:click="$router.push({ name: 'signup' })"
                                        class="text-white">Criar</a>
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