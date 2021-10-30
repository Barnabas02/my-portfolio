import Vue from "vue";
import Router from "vue-router";

import Home from "../components/Home.vue";
import AboutMe from "../components/AboutMe.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
    },
    {
      path: "/aboutme",
      component: AboutMe,
      name: "aboutme",
    },
    {
      path: "/projects",
      component: Projects,
      name: "projects",
    },
    {
      path: "/contact",
      component: Contact,
      name: "contact",
    },
  ],
  mode: 'history'
});

export default router
