import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/HelloWorld'
import Module from '../pages/Module'
import Log from '../pages/Log'
import Topic from '../pages/Topic'
import Label from '../pages/Label'
import Motor from '../pages/MotorGraph'

Vue.use(VueRouter);
Vue.use(require('vue-moment'));

const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/log/', component: Log },
        { path: '/log/:mod', component: Log },
        { path: '/log/:mod/:top', component: Log },
        { path: '/modulos/', component: Module },
        { path: '/modulo/:mod', component: Topic },
        { path: '/marcadores/', component: Label },
        { path: '/motor/', component: Motor }
    ],
    mode: 'history'
});

export default router;