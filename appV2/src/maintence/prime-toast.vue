<template></template>

<script>
import { useToast } from "primevue/usetoast";

const toast = useToast();

toast.add({
  severity: "success",
  summary: "Sucesso",
  detail: "Registro salvo",
  life: 3000,
});
</script>
