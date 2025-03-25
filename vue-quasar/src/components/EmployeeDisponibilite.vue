<script setup lang="ts">
import { ref } from 'vue'

const disponibilite = ref('')

const disponibilites = [
  { label: 'JOUR FERIE', value: 'JOUR FERIE' },
  { label: 'RECUPERATION', value: 'RECUPERATION' },
  { label: 'REPOS', value: 'REPOS' },
  { label: 'CONGE', value: 'CONGE' },
  { label: 'PERMANENCE', value: 'PERMANENCE' },
]
</script>

<template>
  <q-select v-model="disponibilite" :options="disponibilites" label="Disponibilité" />
</template>

<style scoped>
.q-select {
  font-size: 1.2rem;
}
:deep(.q-field__label) {
  font-size: 1.2rem;
}
</style>
