import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Beer from "../views/Beer";

Vue.use(VueRouter);

const routes = [
  {path: "/", name: "Home", component: Home},
  {path: "/beer/:id", name: "Beer", component: Beer},
];

const router = new VueRouter({mode: "history", base: process.env.BASE_URL, routes});

export default router;
