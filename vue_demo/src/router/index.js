import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Home from '@/components/Home/Home'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('user_token')
  console.log(to, from)
  if ((to.path !== '/login') & !token) {
    next('/login')
  } else next()
})
export default router
