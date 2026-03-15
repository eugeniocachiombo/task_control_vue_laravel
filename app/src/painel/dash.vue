<script setup lang="ts">
let userName = sessionStorage.getItem('name');
</script>

<template>
     <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
            <div class="content-wrapper bg-dark d-flex align-items-center auth px-0">
                <div class="row w-100 mx-0 text-white">
                  <h1>Bem-vindo Sr. <b>{{ userName }}</b></h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script scoped></script>