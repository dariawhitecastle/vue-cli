import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SubmitSuccess from './components/SubmitSuccess.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./views/Projects.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/contact-form',
      name: 'contactForm',
      component: () => import('./components/ContactForm.vue')
    },
    {
      path: '/submitted',
      name: 'SubmitSuccess',
      component: SubmitSuccess
    }
  ]
});
