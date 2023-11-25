import { createRouter, createWebHistory } from "vue-router";
import Home from '../Home.vue';
import About from '../About.vue';
import EventDetails from '../event/Details.vue'
import EventEdit from '../event/Edit.vue'
import EventRegister from '../event/Register.vue'
import EventLayout from '../event/Layout.vue'

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
        name: 'EventLayout',
        props: true,
        component: EventLayout,
        children: [

          {
            path: '',
            name: 'EventDetails',
            component: EventDetails,
          },
          {
            path: 'edit',
            name: 'EventEdit',
            component: EventEdit,
          },
          {
            path: 'register',
            name: 'EventRegister',
            component: EventRegister,
          },

        ]
      },

]

const router = createRouter ({
    history: createWebHistory(),
    routes: routers
})

export default router