import { createRouter, createWebHistory } from 'vue-router'
import { TokenManager } from '@/utilities';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'dashboard'
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
      path: '/produtos/editar/:id',
      name: 'produtos.editar',
      component: () => import('../views/ProdutosAdicionarView.vue')
    },
    {
      path: '/catalogos',
      name: 'catalogos',
      component: () => import('../views/CatalogosView.vue')
    },
    {
      path: '/catalogos/adicionar',
      name: 'catalogos.adicionar',
      component: () => import('../views/CatalogosAdicionarView.vue')
    },
    {
      path: '/catalogos/editar/:id',
      name: 'catalogos.editar',
      component: () => import('../views/CatalogosAdicionarView.vue')
    },
    {
      path: '/catalogos/shared/:id',
      name: 'catalogos.shared-detail',
      component: () => import('../views/CatalogoDetalhesShared.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  const logged = !!TokenManager.get();
  if (to.name == 'login') {
    if (logged) {
      next({ name: 'dashboard' });  
    } else {
      next();
    }
  } else {
    if (logged) {
      next();
    } else {
      next({ name: 'login' });
    }
  }
})

export default router
