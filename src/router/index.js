import Vue from 'vue'
import VueRouter from 'vue-router'
// import About from '../views/About.vue'
// import Home from "../views/Home";
Vue.use(VueRouter)
import store from "../store";

const routes = [
  {
    path: '/home',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'index',
    component: ()=>import('@/views/index/index'),
    meta:{title:'xx民宿'}
  },
  {
    path: '/province',
    name: 'province',
    component: ()=>import('@/views/province/Province'),
    meta:{title:'选择省份'}
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: ()=>import('@/views/calendar/Calendar'),
    meta:{title:'选择日期'}
  },
  {
    path: '/detail',
    name: 'detail',
    component: ()=>import('@/views/detail/Detail'),
    meta:{title:'民宿详情'}
  },
  {
    path: '/list',
    name: 'list',
    component: ()=>import('@/views/list/List'),
    meta:{title:'民宿列表'}
  },
  {
    path: '/register',
    name: 'register',
    component: ()=>import('@/views/login/Register'),
    meta:{title:'用户注册'}
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('@/views/login/Login'),
    meta:{title:'用户登录'}
  },
  {
    path: '/my',
    name: 'my',
    component: ()=>import('@/views/my/My'),
    meta:{title:'个人中心',auth:true},
  },
  {
    path: '/collection',
    name: 'collection',
    component: ()=>import('../views/my/Collection'),
    meta:{title:'我的收藏',auth:true}
  },
  {
    path: '/orders',
    name: 'orders',
    component: ()=>import('../views/orders/Orders'),
    meta:{title:'我的订单',auth:true}
  },
  {
    path: '/Orderscalendar',
    name: 'Orderscalendar',
    component: ()=>import('../views/orders/Orderscalendar'),
    meta:{title:'预定日期',auth:true}
  },
  {
    path: '/Pay',
    name: 'pay',
    component: ()=>import('../views/orders/Pay'),
    meta:{title:'支付',auth:true}
  },
  {
    path: '/orderslist',
    name: 'orderslist',
    component: ()=>import('../views/orders/Orderslist'),
    meta:{title:'订单列表',auth:true}
  },
  {
    path: '/success',
    name: 'success',
    component: ()=>import('../views/orders/Success'),
    meta:{title:'订单列表',auth:true}
  },




]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  from;
  let {title,auth}=to.meta;
  document.title=title||'一家民宿';
  if (auth){
    //不能用this.$store
    let token=store.state.token;
    if (token){
      next();
    }else {
      next({name:'login',query:{redirect:to.name}})
    }
  }else {
    next();
  }
})
export default router
