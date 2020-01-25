import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/tjanster",
    name: "services",
    component: Services 
  },
  {
    path: "/blipartner",
    name: "BecomePartner",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BecomePartner.vue")
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      requiresVisitor: true
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/account/Login.vue")
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/account/Logout.vue")
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      requiresVisitor: true
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/account/Register.vue")
  },
  {
    path: "/glomtlosenord",
    name: "ResetPassword",
    meta: {
      requiresVisitor: true
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/account/ResetPassword.vue")
  },
  {
    path: "/tjanster/:id",
    name: "SingleProduct",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SingleProduct.vue")
  },
  {
    path: "/tjanst/lagg-till",
    name: "AddProduct",
    meta: {
      requiresAuth: true
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddProduct.vue")
  },
  {
    path: "/success",
    name: "PurchaseConfirm",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PurchaseConfirm.vue")
  },
  {
    path: "/404",
    name: "404Page",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/404Page.vue")
  },
  {
    path: "*",
    redirect: "/404",
  }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: 'is-active',
  base: process.env.BASE_URL,
  routes
});



export default router;
