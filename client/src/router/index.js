import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EditView from "../views/EditView.vue";
import NewView from "../views/NewView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/edit",
    name: "edit",
    component: EditView,
  },
  {
    path: "/new",
    name: "new",
    component: NewView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/edit/:_id",
    name: "edit",
    component: EditView,
    props: true
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
