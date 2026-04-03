<script setup lang="ts">
import { onMounted, ref } from "vue";
import taskStore from "@/store/taskStore";
import userService from '@/service/userService';

// PrimeVue
import Toast from "primevue/toast";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Dropdown from "primevue/dropdown";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
// Toast service
import { useToast } from "primevue/usetoast";

const toast = useToast();

//==============Titulação============///
const titlePage = {
  title: 'Tarefas',
  path: 'tarefas > index'
};

//==============Sessão============///
let userLogged: any = userService.getLogged();


//==============Manipulação============///
let taskList: any = ref({});


onMounted(async () => {
  let allTasks = await taskStore.getTask();
  taskList.value = {
    all: await allTasks,
    pending: await allTasks.filter((e:any) => e.status_aprov == "Pendente")?.length,
    accepted: await allTasks.filter((e:any) => e.status_aprov == "Aprovado")?.length,
    recused: await allTasks.filter((e:any) => e.status_aprov == "Recusado")?.length,
  };
  console.log(allTasks.value.all)
});
</script>

<template>
  <div class="content-wrapper">
    <div class="row">
      <h3>{{titlePage.title}}</h3> <small>{{titlePage.path}}</small> <hr>
    </div>
    
    <div class="row">
      <div class="col-lg-4 grid-margin stretch-card">
        <div class="card">
          <div class="card-body d-flex justify-content-between align-items-center">
            <div class="col-6">
              <p class="statistics-title">Pendentes</p>
              <h3 class="rate-percentage">
                {{ taskList.pending }}
                <i v-if="!taskList.pending && taskList.pending!=0" class="spinner-border spinner-border-sm"></i>
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
              <h3 class="rate-percentage ">
                {{ taskList.accepted }}
                <i v-if="!taskList.accepted && taskList.accepted!=0" class="spinner-border spinner-border-sm"></i>
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
                <i v-if="!taskList.recused && taskList.recused!=0" class="spinner-border spinner-border-sm"></i>
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
    <hr>
    </div> 

    <div class="row">
      <DataTable
      :value="taskList.all"
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20]"
      responsiveLayout="scroll">

      <Column field="id" header="ID" sortable />
      <Column field="title" header="Título" sortable />
      <Column field="desc" header="Descrição" sortable />
      <Column field="status_exec" header="Estado de Execução" sortable />
      <Column field="status_aprov" header="Estado de Aprovação" sortable />
      <Column field="func_id" header="Responsável" sortable >
        <template #body="slotProps">
          {{slotProps?.data?.func?.name}}
        </template>
      </Column>
      <Column field="boss_id" header="Chefe" sortable >
        <template #body="slotProps">
          {{slotProps?.data?.boss?.name}}
        </template>
      </Column>
    </DataTable>
    </div>
  </div>
</template>

<style scoped></style>
