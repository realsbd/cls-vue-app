import Vue from 'vue'
import VueRouter from 'vue-router'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import StepFour from './components/StepFour'
import Success from './components/Success'


Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {path: '/', component: StepOne},
        {path: '/step-2', component: StepTwo},
        {path: '/step-3', component: StepThree},
        {path: '/step-4', component: StepFour},
        {path: '/success', component: Success},
    ],
    mode: 'history'
})