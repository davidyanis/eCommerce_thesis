import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Services.vue")
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
    path: "/checkout",
    name: "Checkout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Checkout.vue")
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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddProduct.vue")
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
  base: process.env.BASE_URL,
  routes
});



export default router;
