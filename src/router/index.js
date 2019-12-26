import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import BoatAllData from '../pages/BoatAllData'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', component: HelloWorld },
        { path: '/boat-all-data', component: BoatAllData }
    ],
    mode: 'history'
});

export default router;