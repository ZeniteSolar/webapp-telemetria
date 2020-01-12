import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import BoatAllData from '../pages/BoatAllData'
import Module from '../pages/Module'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', component: HelloWorld },
        { path: '/boat-all-data', component: BoatAllData },
        { path: '/module/:mod', component: Module },
        { path: '/module/', component: Module }
    ],
    mode: 'history'
});

export default router;