import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import Module from '../pages/Module'
import Data from '../pages/Data'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', component: HelloWorld },
        { path: '/data/:mod', component: Data },
        { path: '/data/', component: Data },
        { path: '/module/', component: Module }
    ],
    mode: 'history'
});

export default router;