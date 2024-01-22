import { createWebHistory,createRouter } from "vue-router";
import Dashboard from '@/views/Admin/Dashboard.vue'
import LoginView from '@/views/Admin/LoginView.vue'
import PostView from '@/views/Admin/PostView.vue'
import KategoriView from '@/views/Admin/KategoriView.vue'

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/blog-admin',
            name:'blog-admin',
            children:[
                {
                    path:'',
                    name:'admin-dashboard',
                    component:Dashboard
                },
                {
                    path:'login',
                    name:'admin-login',
                    component:LoginView
                },
                {
                    path:'post',
                    name:'admin-post',
                    component:PostView
                },
                {
                    path:'kategori',
                    name:'admin-kategori',
                    component:KategoriView
                },
            ]
        }
    ]
})


export default router