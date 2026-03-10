<style scoped></style>
<script setup lang="ts">
import { useRouter } from 'vue-router';


const route = useRouter();

function goto(){
  route.push('/home');
}

</script>


<template>
  <router-view />

  <button type="button" @click="goto">
    Clicar
  </button>
</template>

