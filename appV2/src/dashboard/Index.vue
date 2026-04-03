<script setup lang="ts">

</script>

<template>
  <div class="content-wrapper">
      <div class="row">
        <div class="col-lg-4 grid-margin stretch-card">
          <div class="card">
            <div class="card-body d-flex justify-content-between align-items-center">
              <div class="col-6">
                <p class="statistics-title">Pendentes</p>
                <h3 class="rate-percentage">32.53%</h3>
                <p class="text-danger d-flex">
                  <i class="mdi mdi-menu-down"></i><span>-0.5%</span>
                </p>
              </div>
              <div class="col-6 text-center fs-1">
                <i class="mdi mdi-alarm"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 grid-margin stretch-card">
          <div class="card">
            <div class="card-body d-flex justify-content-between align-items-center">
              <div class="col-6">
                <p class="statistics-title">Em Execução</p>
                <h3 class="rate-percentage">32.53%</h3>
                <p class="text-danger d-flex">
                  <i class="mdi mdi-menu-down"></i><span>-0.5%</span>
                </p>
              </div>
              <div class="col-6 text-center fs-1">
                <i class="mdi mdi-chart-arc"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 grid-margin stretch-card">
          <div class="card">
            <div class="card-body d-flex justify-content-between align-items-center">
              <div class="col-6">
                <p class="statistics-title">Finalizados</p>
                <h3 class="rate-percentage">32.53%</h3>
                <p class="text-danger d-flex">
                  <i class="mdi mdi-menu-down"></i><span>-0.5%</span>
                </p>
              </div>
              <div class="col-6 text-center fs-1">
                <i class="mdi mdi-checkbox-marked-circle-outline"></i>
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