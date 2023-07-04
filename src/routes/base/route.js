import defaultLayout from "@/layouts/Default.vue";
import BlankLayout from "@/layouts/Blank.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/pages/home/Index.vue"),
    meta: {
      layout: defaultLayout,
    },
  },

  //   go to error page if route not found (404)
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    // component: () => import("@/pages/error/Index.vue"),
    redirect: "/error",
    meta: {
      layout: BlankLayout,
    },
  },

  //   go to error page if route not found (404)
  {
    path: "/error",
    name: "Error",
    component: () => import("@/pages/error/Index.vue"),
    meta: {
      layout: BlankLayout,
    },
  },

  {
    path: "/clicked",
    name: "Clicked",
    component: () => import("@/pages/clicked/Index.vue"),
    meta: {
      layout: defaultLayout,
    },
  },
];
