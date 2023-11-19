import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: () => import('../views/ProdutosView.vue')
    },
    {
      path: '/produtos/adicionar',
      name: 'produtos.adicionar',
      component: () => import('../views/ProdutosAdicionarView.vue')
    },
    {
      path: '/catalogos',
      name: 'catalogos',
      component: () => import('../views/CatalogoView.vue')
    },
    {
      path: '/catalogos/adicionar',
      name: 'catalogos.adicionar',
      component: () => import('../views/CatalogosAdicionarView.vue')
    }
  ]
})

export default router
