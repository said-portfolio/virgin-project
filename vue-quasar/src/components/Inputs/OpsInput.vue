<template>
  <div class="form-inputs">
    <q-select
      v-model="selectedOps"
      :options="employeeStore.opsOptions"
      label="Choisissez un ops"
      outlined
      clearable
      class="form-input"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useEmployeeStore } from '@/stores/employeeStore'
import { EmployeeEnum } from '@/const/enum'

const employeeType = EmployeeEnum.OPS

const selectedOps = ref('')
const employeeStore = useEmployeeStore()

onMounted(async () => {
  await employeeStore.loadEmployees()
  employeeStore.getEmployeesByEmployeeType(employeeType)
})
</script>

<style scoped>
.form-inputs {
  width: 100%;
}

.form-input {
  font-size: 1.2rem;
}

.selected-employee {
  text-align: center;
  font-family: 'Roboto', sans-serif;
}
</style>
