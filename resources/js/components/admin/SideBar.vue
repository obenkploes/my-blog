<template>
    <div id="sidebar" class="vh-100 bg-primary shadow-sm d-flex flex-column">
        <nav class="navbar navbar-dark">
            <div class="container px-4">
                <span class="navbar-brand fw-bold">
                    <i class="bi bi-rocket-fill"></i>
                    My-Blog Apps
                </span>
            </div>
        </nav>
        <div class="container-fluid mt-3">
            <ul class="nav nav-pills flex-column">
                <li class="nav-item mb-1" v-for="item in menu">
                    <RouterLink :to="item.path" class="nav-link " :class="$route.name===item.name?'active':''">
                        <i class="bi  me-1 " :class="item.icon"></i>
                        {{ item.text }}
                    </RouterLink>
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const menu = ref([
    {text:'Dashboard',path:'/blog-admin',icon:'bi-house-fill',name:'admin-dashboard'},
    {text:'Post',path:'/blog-admin/post',icon:'bi-file-earmark-richtext-fill',name:'admin-post'},
    {text:'Kategori',path:'/blog-admin/kategori',icon:'bi-folder-fill',name:'admin-kategori'},
    {text:'Komentar',path:'/blog-admin',icon:'bi-chat-left-fill',name:''},
    {text:'Pengguna',path:'/blog-admin',icon:'bi-person-square',name:''},
    {text:'Pengaturan',path:'/blog-admin',icon:'bi-gear-fill',name:''},
])
</script>

<style lang="scss" scoped>
nav {
    .navbar-brand {
        i.bi {
            font-size: 1.5rem;
        }
    }
}
ul{
    li.nav-item{
        a.nav-link{
            i.bi{
                font-size: 1.15rem;
            }
        }
    }
}
ul.nav{
    a.nav-link{
        color: white;
    }
    a.nav-link.active, a.nav-link:hover{
        background-color: white;
        color: var(--bs-primary);
    }
}
</style>