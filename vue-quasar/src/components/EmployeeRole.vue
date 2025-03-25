<script setup lang="ts">
import type { IRole } from '@/models/IRole'
import { ref } from 'vue'

const role = ref('OPV')

const roles: IRole[] = [
  { label: 'OPV', value: 'OPV' },
  { label: 'OPS', value: 'OPS' },
  { label: 'PARC', value: 'PARC' },
  { label: 'REALISATEUR', value: 'REALISATEUR' },
  { label: 'JOURNALISTE', value: 'JOURNALISTE' },
]
</script>

<template>
  <q-select v-model="role" :options="roles" label="Role" />
</template>

<style scoped>
.q-select {
  font-size: 1.2rem;
}
:deep(.q-field__label) {
  font-size: 1.2rem;
}
</style>
