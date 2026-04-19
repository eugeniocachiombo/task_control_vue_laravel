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
        <Column header="Acção">
          <template #body="slotProps">
            <Button
              class="mx-1"
              outlined
              rounded
              icon=" mdi mdi-repeat "
              severity="blue"
              @click="openChangeStatus(slotProps?.data)"
            />
          </template>
        </Column>
      </DataTable>
    </div>

    <!--FORMULÁRIO-->
    <Dialog
      v-model:visible="formDialog"
      header="Formulário de Tarefa"
      modal
      style="width: 500px"
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
            <p class="text-danger" v-if="taskForm?.validations?.title">
              {{ taskForm?.validations?.title?.join("") }}
            </p>
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
        <Button label="Salvar" icon="mdi mdi-check" :loading="loader" @click="save" />
      </template>
    </Dialog>

    <Dialog
      v-model:visible="statusAprovDialog"
      header="Mudar estado da Tarefa"
      modal
      style="width: 500px"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 mb-3">
            <label for="taskForm.status_aprov" class="fw-bold mb-1">Título</label>
            <Select
              filter
              :options="statusAprovList"
              optionLabel="label"
              optionValue="value"
              v-model="taskForm.status_aprov"
              class="w-100"
              placeholder="Selecione o estado"
            />
            <p class="text-danger" v-if="taskForm?.validations?.status_aprov">
              {{ taskForm?.validations?.status_aprov?.join("") }}
            </p>
          </div>
        </div>
      </div>

      <!-- FOOTER -->
      <template #footer>
        <Button label="Salvar" icon="mdi mdi-check" :loading="loader" @click="save" />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUpdated, reactive, ref } from "vue";
import taskStore from "@/store/taskStore";
import userService from "@/service/userService";

// PrimeVue
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import { FilterMatchMode } from "@primevue/core/api";
import Dropdown from "primevue/dropdown";
import DataTable from "primevue/datatable";
import IconField from "primevue/iconfield";
import Select from "primevue/select";
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
let statusAprovDialog: any = ref(false);
let taskForm = ref<any>({
  id: null,
  title: "",
  desc: "",
  func_id: userLogged.id,
  boss_id: null,
  status_aprov: null,
  validations: {},
});
let loader = ref(false);
let statusAprovList = [
  { label: "Aprovado", value: "aprovado" },
  { label: "Recusado", value: "recusado" },
];

//==============Manipulação============///
let taskList: any = ref({});
const selectedTasks = ref({});
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

function openDialog() {
  taskForm.value = {
    id: null,
    title: "",
    desc: "",
    func_id: userLogged.id,
    boss_id: null,
    status_aprov: null,
    validations: {},
  };
  formDialog.value = true;
}

function openChangeStatus(data: any) {
  taskForm.value = {
    id: data?.id,
    title: data?.title,
    desc: data?.desc,
    func_id: data?.func_id,
    boss_id: userLogged.id,
    status_aprov: null,
    validations: {},
  };
  statusAprovDialog.value = true;
}

async function save() {
  loader.value = true;

  try {
    if (taskForm?.value?.id) {
      await taskStore.updateTask(taskForm.value.id, taskForm.value);
    } else {
      await taskStore.createTask(taskForm.value);
    }

    toast.add({
      severity: "success",
      summary: "Sucesso",
      detail: "Operação realizada com sucesso",
      life: 3000,
    });
    formDialog.value = false;
    statusAprovDialog.value = false;
  } catch (error: any) {
    toast.add({
      severity: "error",
      summary: "Falha ao salvar",
      detail: "Ocorreu algum erro na operação",
      life: 3000,
    });
    taskForm.value.validations = error?.response?.data?.errors;
  } finally {
    loader.value = false;
  }
}

function confirmDeleteSelected() {}

async function refreshData() {
  let allTasks = await taskStore.getTask();
  taskList.value = {
    all: await allTasks,
    pending: await allTasks.filter((e: any) => e.status_aprov == "Pendente")?.length,
    accepted: await allTasks.filter((e: any) => e.status_aprov == "Aprovado")?.length,
    recused: await allTasks.filter((e: any) => e.status_aprov == "Recusado")?.length,
  };
}

onUpdated(async () => {
  refreshData();
});
onMounted(async () => {
  refreshData();
});
</script>

<style scoped></style>
