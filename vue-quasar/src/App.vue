<script setup lang="ts">
import CreateEmployee from '@/pages/CreateEmployee.vue';
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <!-- Sidebar Navbar -->
    <q-drawer show-if-above elevated class="bg-primary text-white">
      <q-list class="sidebar-list">
        <router-link to="/" class="menu-item">
          <q-item clickable v-ripple>
            <q-item-section>
              Ajouter un employé
            </q-item-section>
          </q-item>
        </router-link>
        <router-link to="/pages/create-planing" class="menu-item">
          <q-item clickable v-ripple>
            <q-item-section>
              Créer un planing
            </q-item-section>
          </q-item>
        </router-link>
        <router-link to="/pages/create-editing" class="menu-item">
          <q-item clickable v-ripple>
            <q-item-section>
              Créer un montage
            </q-item-section>
          </q-item>
        </router-link>
      </q-list>
    </q-drawer>

    <!-- Main Content -->
    <q-page-container class="page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.sidebar-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0;
  margin: 0;
}

.menu-item {
  text-decoration: none; /* Remove default link styles */
  color: inherit; /* Inherit text color */
  font-size: 1.2rem;
  margin: 1rem 0;
}

.q-item {
  width: 100%;
  text-align: center;
}

.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
}
</style>
