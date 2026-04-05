<script>
const selectedTasks = ref()
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS }
})
const taskList = [{all: ''}]; // Proveniente da base de dados.
</script>

<template>
  <DataTable
    ref="dt"
    v-model="selectedTasks"
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
            <Button label="Adicionar" @click="salvar" />
            <Button label="Excluir" icon="pi pi-trash" severity="danger" outlined @click="confirmDeleteSelected"
          :disabled="!selectedTasks.length" />
          </span>
        </div>
      </div>
    </template>

    <Column selectionMode="multiple" style="width: 3rem" />
    <Column field="id" header="ID" sortable />
    <Column field="title" header="Título" sortable />
    <Column field="func.name" header="Responsável" sortable />
  </DataTable>
</template>

