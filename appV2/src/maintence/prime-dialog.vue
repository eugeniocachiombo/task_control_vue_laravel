<template>
  <Dialog
    v-model="formDialog"
    header="Registo de Visita"
    modal
    style="width: 650px"
    :closable="false"
  >
    <div class="container-fluid">
      <!-- FORM -->
      <div class="row">
        <h3>Formulário</h3>

        <div class="col-md-12 mb-3">
          <label>Nome</label>
          <InputText v-model="form.nome" class="w-100" placeholder="Digite o nome" />
        </div>

        <div class="col-md-12 mb-3">
          <label>Idade</label>
          <InputNumber v-model="form.idade" class="w-100" />
        </div>

        <div class="col-md-12 mb-3">
          <label>Categoria</label>
          <Dropdown
            class="w-100"
            v-model="form.categoria"
            :options="categorias"
            optionLabel="label"
            placeholder="Selecione"
          />
        </div>
        <div class="col-md-12 mb-3">
          <label>Categoria</label>
          <Select
              filter
              :options="statusAprovList" optionLabel="label" optionValue="value"
              v-model="taskForm.status_aprov"
              class="w-100"
              placeholder="Digite o Título"
            />
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <template #footer>
      <Button label="Cancelar" severity="secondary" outlined @click="hideDialog" />
      <Button label="Salvar" icon="pi pi-check" :loading="loader" @click="saveVisita" />
    </template>
  </Dialog>

  <!-- DELETE -->
  <Dialog v-model="deleteDialog" header="Confirmar" modal style="width: 450px">
    <span>Deseja eliminar esta visita?</span>
    <template #footer>
      <Button label="Não" text @click="deleteDialog = false" />
      <Button label="Sim" severity="danger" @click="deleteVisita" />
    </template>
  </Dialog>

  <Dialog v-model="deleteSelectedDialog" header="Confirmar" modal style="width: 450px">
    <span>Deseja eliminar os visitantes selecionados?</span>
    <template #footer>
      <Button label="Não" text @click="deleteVisitasDialog = false" />
      <Button label="Sim" severity="danger" @click="deleteSelectedVisitas" />
    </template>
  </Dialog>
</template>

<script>
import { ref } from "vue";
const formDialog = ref(false);
</script>
