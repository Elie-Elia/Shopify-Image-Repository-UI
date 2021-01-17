import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Images from "../views/Images/Index";
import Image from "../views/Images/Show";
import Submit from "../views/Submit/Index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/images",
    name: "Images",
    component: Images,
  },
  {
    path: "/submit",
    name: "Submit",
    component: Submit,
  },
  {
    path: "/images/:id",
    name: "Image",
    component: Image,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});



export default router;
