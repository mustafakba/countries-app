
import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutPage from './components/AboutPage.vue'
import TablePage from "@/components/TablePage";

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/about/:id',
            component : AboutPage
        },
        {
            path:'/',
            component :TablePage
        }

    ],
    mode:'history'
})

export default router