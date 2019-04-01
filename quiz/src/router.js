import Vue from 'vue'
import Router from 'vue-router'
// import Store from './store/store'
import MainNavbar from './layout/MainNavbar'
import MainFooter from './layout/MainFooter'
import Home from './views/Home'
Vue.use(Router)

export default new Router({
   routes: [
      {
         path: '/',
         name: 'home',
         components: {
            default: Home,
            header: MainNavbar,
            footer: MainFooter
         }
      }
   ],
   mode: 'history',
   scrollBehavior: to => {
      if (to.hash) {
         return {
            selector: to.hash
         }
      } else {
         return {
            x: 0,
            y: 0
         }
      }
   }
})
