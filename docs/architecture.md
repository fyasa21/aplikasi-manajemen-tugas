# Arsitektur Sistem

Struktur aplikasi Actask dibagi menjadi beberapa modul utama.

## Struktur Folder

src/
├── app.js
├── auth.js
├── ui.js
└── styles/

## Penjelasan Modul

### app.js
Berfungsi sebagai pusat logika aplikasi.

Fungsi utama:
- Mengatur alur aplikasi
- Menghubungkan UI dengan data
- Mengontrol perubahan task

### auth.js
Menangani sistem autentikasi pengguna.

Fitur:
- Login
- Register
- Logout
- Session management

Data pengguna disimpan menggunakan **LocalStorage**.

### ui.js
Menangani tampilan antarmuka pengguna.

Fungsi:
- Rendering dashboard
- Menampilkan task
- Modal task
- Drag and Drop task

### styles
Berisi file CSS untuk tampilan aplikasi.

- `variables.css` → variabel warna
- `main.css` → layout dan komponen UI