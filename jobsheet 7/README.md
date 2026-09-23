# Jobsheet 7 — SIMPUS-Mini (PHP Dasar & Form Handling)

## Menjalankan

```bash
cd jobsheet-07
php -S localhost:8000
```

Buka `http://localhost:8000/index.php`.

## Yang berubah dari Jobsheet 6

- Semua `.html` → `.php`.
- `includes/header.php` & `includes/footer.php` baru — navbar/footer tidak lagi diulang di tiap file, path CSS/JS/menu dihitung otomatis lewat `$base`.
- Form Tambah Buku & Tambah Anggota sekarang benar-benar mengirim data (`method="post"`) ke `proses_tambah.php` masing-masing, divalidasi di server, disimpan ke `$_SESSION`, lalu redirect dengan flash message (sukses/gagal).
- `buku/list.php` & `anggota/list.php` merender tabel langsung dari `$_SESSION` di server — tidak lagi `fetch()` ke file JSON.
- `assets/js/buku.js`, `assets/js/anggota.js`, `assets/js/dataLoader.js`, dan `data/*.json` **tidak lagi dipakai** (dihapus dari proyek ini) karena rendering sudah pindah ke server.
- Perbaikan bug kecil dari `app.js` jobsheet 6: `initTableFilter()` sebelumnya mencari elemen `#filterInput` yang tidak pernah ada di HTML manapun (harusnya `#search-input`, sesuai `list.php`), dan akan error di halaman tanpa `<table>` (mis. `tambah.php`) karena tidak ada pengecekan null. Keduanya sudah diperbaiki.

## Catatan

Data di `$_SESSION` bersifat sementara — hilang saat browser ditutup sepenuhnya / sesi berakhir. Ini jembatan menuju database sungguhan di Jobsheet 8.