<script setup lang="ts">
import { ref } from 'vue'
import EmployeeRole from '@/components/EmployeeRole.vue'
import EmployeeDisponibilite from '@/components/EmployeeDisponibilite.vue'
import type { IEmployee } from '@/models/IEmployee'

const firstName = ref('')
const lastName = ref('')
const role = ref<{ label: string; value: string } | null>(null)
const disponibilite = ref('')

const createEmployee = () => {
  // Create a new employee object
  const newEmployee: IEmployee = {
    firstName: firstName.value,
    lastName: lastName.value,
    role: role.value || { label: '', value: '' },
    disponibilite: disponibilite.value,
  }

  // Retrieve the existing employees from local storage or initialize an empty array
  const employees: IEmployee[] = JSON.parse(localStorage.getItem('employees') || '[]')

  // Add the new employee to the list
  employees.push(newEmployee)

  // Save the updated list back to local storage
  localStorage.setItem('employees', JSON.stringify(employees))

  console.log('Employee Created:', newEmployee)

  // Clear the form fields after adding the employee
  resetForm()
}

// Function to reset the form fields
const resetForm = () => {
  firstName.value = ''
  lastName.value = ''
  role.value = null
  disponibilite.value = ''
}
</script>

<template>
  <div class="form-container">
    <div class="form-inputs">
      <q-input v-model="firstName" placeholder="Nom" clearable />
      <q-input v-model="lastName" placeholder="Prénom" clearable />
      <EmployeeRole v-model="role" />
      <EmployeeDisponibilite v-model="disponibilite" />
    </div>
    <q-btn @click="createEmployee" label="Ajouter" color="primary" />
  </div>
</template>

<style scoped>
.form-inputs {
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
}
.q-input {
  font-size: 1.2rem;
}
</style>
