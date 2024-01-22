<template>
    <AdminLayout title-bar="Post">
        <div class="card shadow">
            <div class="card-header d-flex justify-content-between text-bg-primary">
                <button class="btn btn-light btn-sm">
                    <i class="bi bi-plus-circle"></i> Post baru
                </button>
                <div class="input-group " style="width: 300px;">
                    <input type="text" class="form-control form-control-sm" placeholder="Cari post">
                    <span class="input-group-text"><i class="bi bi-search"></i></span>
                </div>
            </div>
            <div class="card-body">
                <table class="table table-sm table-striped">
                    <thead>
                        <tr class="align-middle">
                            <th style="width: 30px;">
                                <input type="checkbox" class="form-check">
                            </th>
                            <th>Judul</th>
                            <th>Penulis</th>
                            <th>Kategori</th>
                            <th>Tag</th>
                            <th><i class="bi bi-chat-fill"></i></th>
                            <th style="width: 150px;">Tanggal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="align-middle">
                            <td><input type="checkbox" class="form-check"></td>
                            <td>
                                <span class="fw-bold">Tips cepat pintar programming</span>
                                <p class="post-action">
                                    <a href="#" class="me-2"><i class="bi bi-pencil-square me-1"></i>edit</a>|
                                    <a href="#" class="me-2"><i class="bi bi-trash me-1"></i>Hapus</a>|
                                    <a href="#" class=""><i class="bi bi-arrow-up-right-square me-1"></i>View</a>
                                </p>
                            </td>
                            <td>Fulanah</td>
                            <td></td>
                            <td></td>
                            <td>10</td>
                            <td>
                                <span class="text-black-50 d-block">Published</span>
                                <span class="d-block">{{ new Date().toISOString().substring(0,10) }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/components/AdminLayout.vue';
</script>

<style lang="scss" scoped>
   .post-action{
    display: none;
   }
   tr:hover p.post-action{
    display: block;
   }

</style>