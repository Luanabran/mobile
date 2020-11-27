import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Registration.vue')
  },
  {
    path: '/rules',
    name: 'Rules',
    component: () => import('../views/Rules.vue')
  },
  {
    path: '/gameInfo',
    name: 'GameInfo',
    component: () => import('../views/GameInfo.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import('../views/Location.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/messages',
    name: 'Messages',
    component: () => import('../views/MessageView.vue'),
    meta: {
      requiresAuth: true
    },
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  if(requiresAuth) {
    firebase.auth().onAuthStateChanged( (user) => {
      if (!user) next('/')
      else next();
    })
  } else next()
});

export default router



