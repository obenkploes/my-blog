<template>
    <main class="d-flex  bg-secondary-subtle">
        <SideBar />
        <div id="main-content">
            <nav class="navbar navbar-expand-lg shadow bg-white">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">{{ prop.titleBar }}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link " href="#"><i class="bi bi-bell-fill me-1"></i>Notifikasi</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="bi bi-person-fill me-1"></i>Fulanah</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container-fluid mt-3" id="content">
                <slot></slot>
            </div>
        </div>
    </main>
</template>

<script setup>
import SideBar from './admin/SideBar.vue';
const prop = defineProps({
    titleBar: String
})


</script>

<style lang="scss" scoped>
#sidebar {
    width: var(--side-bar);
}

#main-content {
    width: 100%;
    max-width: calc(100% - var(--side-bar));
}

#content {
    font-size: .85rem;
}
</style>