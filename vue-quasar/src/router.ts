import { createRouter, createWebHistory } from 'vue-router';

import CreatePlaning from '@/pages/CreatePlaning.vue';
import CreateEditing from '@/pages/CreateEditing.vue';
import CreateEmployee from '@/pages/CreateEmployee.vue';

const routes = [
  {
    path: '/',
    name: 'CreateEmployee',
    component: CreateEmployee, // Default route
  },
  {
    path: '/pages/create-planing',
    name: 'CreatePlaning',
    component: CreatePlaning,
  },
  {
    path: '/pages/create-editing',
    name: 'CreateEditing',
    component: CreateEditing,
  },
  // Add more routes here as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;