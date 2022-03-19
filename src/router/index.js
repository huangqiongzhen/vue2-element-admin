import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@views/home/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
