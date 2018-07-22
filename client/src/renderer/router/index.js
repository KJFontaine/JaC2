import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/signup',
      name: 'signup-page',
      component: require('@/components/SignupPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
