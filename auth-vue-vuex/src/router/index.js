import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store';

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: () => import('../views/Gerentes.vue')
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
    component: () => import('../views/NovoUsuario.vue'),
    meta: {
      publica: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      publica: true
    }
  }
]

const router = new VueRouter({
  routes
});

router.beforeEach((routeTo, routeFrom, next) => {
  if (!routeTo.meta.publica && !store.state.token) {
    return next({ path: '/login' });
  }
  next();
})

export default router
