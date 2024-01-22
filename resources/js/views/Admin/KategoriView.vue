<template>
    <AdminLayout title-bar="Kategori">
        <div class="row">
            <div class="col-lg-4">
                <h1 class="h6">Tambah kategori baru</h1>
                <form action="" method="post">
                    <div class="mb-3">
                        <label for="nama" class="form-label">Nama kategori</label>
                        <input type="text" class="form-control form-control-sm" id="nama">
                        <span class="form-text">Nama yang akan dimunculkan di situs</span>
                    </div>
                    <div class="mb-3">
                        <label for="slug" class="form-label">Slug</label>
                        <input type="text" class="form-control form-control-sm" id="slug">
                        <span class="form-text">Slug adalah alamat URL yang dihasilkan dari nama</span>
                    </div>
                    <div class="mb-3">
                        <label for="parent" class="form-label">Kelompok kategori</label>
                        <select name="parent" id="parent" class="form-select form-select-sm">
                            <option value="">Tidak ada</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-primary btn-sm">
                            Tambah kategori
                            <i class="bi bi-floppy"></i>
                        </button>
                    </div>
                </form> 
            </div><!--end form add categori-->
            <div class="col-lg-8">
                <div class="d-flex justify-content-between mb-2">
                    <div style="width: 250px;" class="row align-items-center g-1">
                        <div class="col-auto">
                            <select name="aksi" id="aksi" class="form-select form-select-sm">
                                <option value="">Aksi ringkas</option>
                                <option value="delete">Hapus</option>
                            </select>
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-outline-primary btn-sm">Terapkan</button>
                        </div>
                    </div>
                    <div class="input-group" style="width: 300px;">
                        <input type="text" class="form-control form-control-sm" placeholder="Cari kategori">
                        <span class="input-group-text"><i class="bi bi-search"></i></span>
                    </div>
                </div>
                <table class="table table-sm table-striped table-bordered">
                    <thead>
                        <tr class="align-middle">
                            <th style="width: 25px;">
                                <input type="checkbox" class="form-check-input">
                            </th>
                            <th>Nama</th>
                            <th>Slug</th>
                            <th>Parent</th>
                            <th style="width: 100px;" class="text-center">Jumlah</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="align-middle">
                            <td><input type="checkbox" class="form-check-input"></td>
                            <td>Berita</td>
                            <td>berita</td>
                            <td>None</td>
                            <td class="text-center">10</td>
                        </tr>
                    </tbody>
                </table>
                <div class="mt-2">
                    <div style="width: 250px;" class="row align-items-center g-1">
                        <div class="col-auto">
                            <select name="aksi" id="aksi" class="form-select form-select-sm">
                                <option value="">Aksi ringkas</option>
                                <option value="delete">Hapus</option>
                            </select>
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-outline-primary btn-sm">Terapkan</button>
                        </div>
                    </div>
                </div>
            </div> <!--end tabel kategori-->
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/components/AdminLayout.vue';
</script>

<style lang="scss" scoped></style>