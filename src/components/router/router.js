import { createRouter, createWebHistory } from "vue-router";
import Home from '../Home.vue';
import About from '../About.vue';
import EventDetails from '../EventDetails.vue'

const routers = [
    {
        path: '/',
        name: 'Home',
        component: Home
      },

      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/events/:id',
        name: 'event-details',
        props: true,
        component: EventDetails,
      },
]

const router = createRouter ({
    history: createWebHistory(),
    routes: routers
})

export default router