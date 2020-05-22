import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
    
  {path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')},
  {path: '/dialActivity', name: 'dialActivity', component: () => import(/* webpackChunkName: "dialActivity" */ '../views/dialActivity/dialActivity.vue')},//转转乐
  { path: '/scratch', name: 'scratch', component: () => import(/* webpackChunkName: "scratch" */ '../views/scratch/Scratch.vue') },//刮刮乐
  { path: '/poster', name: 'poster', component: () => import(/* webpackChunkName: "poster" */ '../views/poster/Poster.vue') },//广告
  //加油站
  { path: '/gas', name: 'gas', component: () => import(/* webpackChunkName: "gas" */ '../views/gas/Gas.vue') },
  { path: '/gasprice', name: 'price', component: () => import(/* webpackChunkName: "price" */ '../views/gas/Price.vue') },//加油站价格
  { path: '/gasdetail', name: 'detail', component: () => import(/* webpackChunkName: "detail" */ '../views/gas/Detail.vue') },//加油站详情

  //  行业 - 首页
  { path: '/industry/index', name: 'industryIndex', component: () => import(/* webpackChunkName: "industryIndex" */ '../views/industry/Index.vue') },
    //  行业 - 药店
  { path: '/industry/medicine', name: 'medicine', component: () => import(/* webpackChunkName: "medicine" */ '../views/industry/medicine/Index.vue') },
  //  行业 - 医院
  { path: '/industry/hospital', name: 'hospital', component: () => import(/* webpackChunkName: "hospital" */ '../views/industry/hospital/Index.vue') },
  { path: '/industry/hospital/registration', name: 'registration', component: () => import(/* webpackChunkName: "registration" */ '../views/industry/hospital/Registration.vue') },
  { path: '/industry/hospital/phoneForm', name: 'phoneForm', component: () => import(/* webpackChunkName: "phoneForm" */ '../views/industry/hospital/PhoneForm.vue') },
  { path: '/industry/hospital/orderDetail', name: 'orderDetail', component: () => import(/* webpackChunkName: "orderDetail" */ '../views/industry/hospital/OrderDetail.vue') },
  //  行业 - 票务系统 杭州乐园
  { path: '/industry/paradiseTicketing', name: 'paradiseTicketing', component: () => import(/* webpackChunkName: "paradiseTicketing" */ '../views/industry/paradiseTicketing/Index.vue') },
  { path: '/industry/paradiseTicketing/phoneForm', name: 'ticketingPhoneForm', component: () => import(/* webpackChunkName: "ticketingPhoneForm" */ '../views/industry/paradiseTicketing/PhoneForm.vue') },
  { path: '/industry/paradiseTicketing/verification', name: 'verification', component: () => import(/* webpackChunkName: "verification" */ '../views/industry/paradiseTicketing/Verification.vue') },
  { path: '/industry/paradiseTicketing/buyTickets', name: 'buyTickets', component: () => import(/* webpackChunkName: "buyTickets" */ '../views/industry/paradiseTicketing/BuyTickets.vue') },
  { path: '/industry/paradiseTicketing/win', name: 'win', component: () => import(/* webpackChunkName: "win" */ '../views/industry/paradiseTicketing/Win.vue') },
  { path: '/industry/paradiseTicketing/noData', name: 'noData', component: () => import(/* webpackChunkName: "noData" */ '../views/industry/paradiseTicketing/NoData.vue') },
  // h5 - 分销
  { path: '/distribution/info', name: 'info', component: () => import(/* webpackChunkName: "info" */ '../views/distribution/Info.vue') },
  { path: '/distribution/select', name: 'select', component: () => import(/* webpackChunkName: "select" */ '../views/distribution/Select.vue') },
  { path: '/distribution/order', name: 'order', component: () => import(/* webpackChunkName: "order" */ '../views/distribution/Order.vue') },
  { path: '/distribution/payres', name: 'payres', component: () => import(/* webpackChunkName: "payres" */ '../views/distribution/Payres.vue') },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

router.afterEach((to, from) => {
  let token = router.currentRoute.query.token
  Vue.prototype.$token = token
  Vue.token = token;
  console.log(token, to)
})

export default router
