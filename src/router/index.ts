import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from '../store';
import auth from "./middleware/auth";
import guest from "./middleware/guest";
import middlewarePipeline from "./middleware/middlewarePipeline";
import subscribed from "./middleware/subscribed";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Login.vue"),
    meta: {
      middleware: [
        guest
      ]
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import("../views/Dashboard.vue"),
    meta: {
      middleware: [
        auth
      ]
    },
    // children: [{
    //   path: '/dashboard/movies',
    //   name: 'dashboard.movies',
    //   component: () => import("../views/Movies.vue"),
    //   meta: {
    //     middleware: [
    //       subscribed
    //     ]
    //   }
    // }],
  },
  {
    path: '/dashboard/movies',
    name: 'dashboard.movies',
    component: () => import("../views/Movies.vue"),
    meta: {
      middleware: [
        subscribed
      ]
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {

  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware

  const context = {
    to,
    from,
    next,
    store
  }


  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })

})

export default router;
