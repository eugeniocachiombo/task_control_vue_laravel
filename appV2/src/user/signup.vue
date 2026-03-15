<script setup lang="ts">
import axios from '@plugin/axios';
import { ref } from 'vue';
import sweetalert from '@plugin/sweetalert'

let name: string = '';
let email: string = '';
let password: string = '';
let validations: any = ref({});
let spinner: any = ref(false);

async function save() {

    spinner.value = true;
    validations.value = {};

    try {

        fetch("genioproapi.infinityfreeapp.com/api/v1/users/api/v1/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Erro:", error);
  });
       
        const response = await axios.post("/api/v1/users", {
            'name': name,
            'email': email,
            'password': password
        });

        if (response.data && response.status == 201) {
            sweetalert({
                'icon': 'success',
                'title': 'Sucesso',
                'html': 'Conta Criada com Sucesso',
                'btn': true
            });
            clear();
        }
    } catch (error: any) {
        validations.value = error.response.data.errors ?? {};
        console.log(error);

        if (!validations.value) {
            sweetalert({
                'icon': 'error',
                'title': 'Erro!...',
                'html': 'Falha de operação',
                'btn': true
            });
        }
    } finally {
        spinner.value = false;
    }
}

function clear() {
    name = '';
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
                            <h4>Criação de Conta</h4>
                            <h6 class="fw-light">Informe seus dados</h6>
                            <form class="pt-3">
                                <div class="form-group">
                                    <input type="text" v-model="name" class="form-control form-control-lg text-white"
                                        id="name" placeholder="Nome Completo">
                                    <p v-if="validations.name" class="text-danger">{{ validations.name.join("") }}</p>
                                </div>
                                <div class="form-group">
                                    <input type="email" v-model="email" class="form-control form-control-lg text-white"
                                        id="email" placeholder="Email">
                                    <p v-if="validations.email" class="text-danger">{{ validations.email.join("") }}</p>
                                </div>
                                <div class="form-group">
                                    <input type="password" v-model="password"
                                        class="form-control form-control-lg text-white" id="Password"
                                        placeholder="Senha">
                                    <p v-if="validations.password" class="text-danger">{{ validations.password.join("")
                                        }}</p>
                                </div>
                                <div class="mt-3">
                                    <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                                        v-on:click="save()" href="#">
                                        <i v-if="spinner" class="spinner-border spinner-border-sm me-2"></i>
                                        <span>Criar Conta</span>
                                    </a>
                                </div>
                                <div class="text-center mt-4 fw-light">
                                    Já tem uma conta? <a href="#" v-on:click="$router.push({ name: 'login' })"
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
