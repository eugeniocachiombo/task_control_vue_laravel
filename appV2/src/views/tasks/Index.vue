<script setup lang="ts">
import { onMounted, ref } from "vue";
import taskStore from "@/store/taskStore";

//==============Titulação============///
const titlePage = {
  title: 'Tarefas',
  path: 'tarefas > index'
};


//==============Manipulação============///
let taskList: any = ref({});

onMounted(async () => {
  let allTasks = await taskStore.getTask();
  taskList.value = {
    pending: await allTasks.filter((e) => e.status_aprov == "Pendente")?.length,
    accepted: await allTasks.filter((e) => e.status_aprov == "Aprovado")?.length,
    recused: await allTasks.filter((e) => e.status_aprov == "Recusado")?.length,
  };
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
                <i v-if="!taskList.pending" class="spinner-border spinner-border-sm"></i>
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
                <i v-if="!taskList.accepted" class="spinner-border spinner-border-sm"></i>
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
                <i v-if="!taskList.recused" class="spinner-border spinner-border-sm"></i>
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
    </div>

    <div class="row">
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Bar chart</h4>
            <canvas id="barChart"></canvas>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Doughnut chart</h4>
            <canvas id="doughnutChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
