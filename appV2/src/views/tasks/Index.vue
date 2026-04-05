<template>
  <div class="content-wrapper">
    <div class="row">
      <h3>{{ titlePage.title }}</h3>
      <small>{{ titlePage.path }}</small>
      <hr />
    </div>

    <div class="row">
      <div class="col-lg-4 grid-margin stretch-card">
        <div class="card">
          <div class="card-body d-flex justify-content-between align-items-center">
            <div class="col-6">
              <p class="statistics-title">Pendentes</p>
              <h3 class="rate-percentage">
                {{ taskList.pending }}
                <i
                  v-if="!taskList.pending && taskList.pending != 0"
                  class="spinner-border spinner-border-sm"
                ></i>
              </h3>
              <p class="text-danger d-flex">
                <!--<i class="mdi mdi-menu-down"></i><span>-0.5%</span>-->
              </p>
            </div>
            <div class="col-6 text-center fs-1">
              <i class="mdi mdi-alarm text-warning"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 grid-margin stretch-card">
        <div class="card">
          <div class="card-body d-flex justify-content-between align-items-center">
            <div class="col-6">
              <p class="statistics-title">Aceitadas</p>
              <h3 class="rate-percentage">
                {{ taskList.accepted }}
                <i
                  v-if="!taskList.accepted && taskList.accepted != 0"
                  class="spinner-border spinner-border-sm"
                ></i>
              </h3>
              <p class="text-danger d-flex">
                <!--<i class="mdi mdi-menu-down"></i><span>-0.5%</span>-->
              </p>
            </div>
            <div class="col-6 text-center fs-1">
              <i class="mdi mdi-checkbox-marked-circle-outline text-success"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 grid-margin stretch-card">
        <div class="card">
          <div class="card-body d-flex justify-content-between align-items-center">
            <div class="col-6">
              <p class="statistics-title">Recusadas</p>
              <h3 class="rate-percentage">
                {{ taskList.recused }}
                <i
                  v-if="!taskList.recused && taskList.recused != 0"
                  class="spinner-border spinner-border-sm"
                ></i>
              </h3>
              <p class="text-danger d-flex">
                <!--<i class="mdi mdi-menu-down"></i><span>-0.5%</span>-->
              </p>
            </div>
            <div class="col-6 text-center fs-1">
              <i class="mdi mdi-close-circle-outline text-danger"></i>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>

    <div class="row">
      <DataTable
        ref="dt"
        v-model:selection="selectedTasks"
        :value="taskList.all"
        dataKey="id"
        :paginator="true"
        :rows="10"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Mostrando {first} de {last} de {totalRecords} Tarefas"
      >
        <template #header>
          <div class="d-flex items-center justify-beetwen">
            <div class="col-6">
              <h4 class="my-3">Listar Tarefas</h4>
              <IconField>
                <InputText v-model="filters['global'].value" placeholder="Pesquisar..." />
              </IconField>
            </div>

            <div class="col-6 d-flex align-items-end justify-content-end">
              <span>
                <Button
                  class="mx-1"
                  icon="mdi mdi-plus-circle"
                  label="Adicionar"
                  @click="openDialog"
                />
                <Button
                  class="mx-1"
                  icon="mdi mdi-delete"
                  label="Eliminar"
                  severity="danger"
                  outlined
                  @click="confirmDeleteSelected"
                  :disabled="!selectedTasks.length"
                />
              </span>
            </div>
          </div>
        </template>

        <Column selectionMode="multiple" style="width: 3rem" />
        <Column field="id" header="ID" sortable />
        <Column field="title" header="Título" sortable />
        <Column field="desc" header="Descrição" sortable />
        <Column field="status_exec" header="Estado de Execução" sortable />
        <Column field="status_aprov" header="Estado de Aprovação" sortable />
        <Column field="func.name" header="Responsável" sortable />
        <Column field="boss.name" header="Chefe" sortable />
      </DataTable>
    </div>

    <!--FORMULÁRIO-->
    <Dialog
      v-model:visible="formDialog"
      :value="taskForm"
      header="Formulário de Tarefa"
      modal
      style="width: 500px"
      :closable="false"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 mb-3">
            <label for="taskForm.title" class="fw-bold mb-1">Título</label>
            <InputText
              v-model="taskForm.title"
              class="w-100"
              placeholder="Digite o Título"
            />
          </div>

          <div class="col-md-12 mb-3">
            <label for="taskForm.desc" class="fw-bold mb-1">Descrição</label>
            <InputText
              v-model="taskForm.desc"
              class="w-100 h-100"
              placeholder="Digite a descrição"
            />
          </div>
        </div>
      </div>

      <!-- FOOTER -->
      <template #footer>
        <Button
          label="Cancelar"
          severity="secondary"
          outlined
          @click="() => (formDialog = !formDialog)"
        />
        <Button label="Salvar" icon="mdi mdi-check" :loading="loader" @click="save" />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import taskStore from "@/store/taskStore";
import userService from "@/service/userService";

// PrimeVue
import Toast from "primevue/toast";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import { FilterMatchMode } from "@primevue/core/api";
import Dropdown from "primevue/dropdown";
import DataTable from "primevue/datatable";
import IconField from "primevue/iconfield";
import Column from "primevue/column";

// Toast service
import { useToast } from "primevue/usetoast";

const toast = useToast();

//==============Titulação============///
const titlePage = {
  title: "Tarefas",
  path: "tarefas > index",
};

//==============Sessão============//
let userLogged: any = userService.getLogged();

//==============FORMULÁRIO========//
let formDialog: any = ref(false);
let taskForm: any = {
  title: "",
  desc: "",
};
const loader: any = ref(false);

//==============Manipulação============///
let taskList: any = ref({});
const selectedTasks = ref({});
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

function openDialog() {
  formDialog.value = true;
}

function save() {
  formDialog.value = false;
}

function confirmDeleteSelected() {}

onMounted(async () => {
  let allTasks = await taskStore.getTask();
  taskList.value = {
    all: await allTasks,
    pending: await allTasks.filter((e: any) => e.status_aprov == "Pendente")?.length,
    accepted: await allTasks.filter((e: any) => e.status_aprov == "Aprovado")?.length,
    recused: await allTasks.filter((e: any) => e.status_aprov == "Recusado")?.length,
  };
});
</script>

<style scoped></style>
