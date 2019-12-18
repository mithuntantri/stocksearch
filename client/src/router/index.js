import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/HomeGlobal")
        },
        {
          path: "/corpactions",
          name: "corpactions",
          component: () => import("@/views/HomeCorpActions")
        },
        {
          path: "/announcements",
          name: "announcements",
          component: () => import("@/views/HomeCorpAnnouncements")
        }
      ]
    }
  ]
});
