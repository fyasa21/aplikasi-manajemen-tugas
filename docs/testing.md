# Testing

Pengujian dilakukan menggunakan file HTML sederhana yang menjalankan fungsi JavaScript aplikasi.

Folder testing:
tests/
├── app.test.html
├── auth.test.html
├── storage.test.html
├── ui.test.html

## Jenis Testing

### 1. Integration Test

File:
app.test.html

Digunakan untuk menguji logika utama aplikasi seperti:

- Menambahkan task
- Mengupdate task
- Menghapus task

### 2. Storage Test

File:
storage.test.html

Digunakan untuk memastikan LocalStorage bekerja dengan benar.

Test yang dilakukan:

- Penyimpanan data task
- Pembacaan data task
- Penghapusan data task
