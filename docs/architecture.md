# Arsitektur Sistem

Struktur aplikasi **Actask** dibagi menjadi beberapa modul utama yang bertanggung jawab terhadap logika aplikasi, tampilan pengguna, penyimpanan data, serta dokumentasi.

---

# Struktur Folder
aplikasi-manajemen-tugas
│
├── docs
│   ├── overview.md
│   ├── architecture.md
│   ├── features.md
│   └── testing.md
│
├── src
│   ├── app.js
│   ├── auth.js
│   ├── storage.js
│   ├── ui.js
│   │
│   └── styles
│       ├── main.css
│       └── variables.css
│
├── tests
│   ├── .gitkeep
│   ├── app.test.html
│   ├── storage.test.html
│   ├── auth.test.html
│   └── ui.test.html
│
├── index.html
├── manifest.json
├── sw.js
├── start.bat
└── README.md

# Penjelasan Folder

## 📁 docs
Folder ini berisi dokumentasi teknis dari aplikasi.

Isi folder:

- **overview.md**  
  Menjelaskan gambaran umum aplikasi Actask.

- **architecture.md**  
  Menjelaskan struktur sistem dan arsitektur aplikasi.

- **features.md**  
  Berisi daftar fitur yang tersedia pada aplikasi.

- **testing.md**  
  Menjelaskan metode pengujian yang digunakan pada aplikasi.

---

## 📁 src
Folder ini berisi **kode utama aplikasi**.

Isi folder:

- **app.js**  
  Mengatur logika utama aplikasi serta menghubungkan UI dengan data.

- **auth.js**  
  Menangani sistem autentikasi pengguna seperti login, register, dan logout.

- **storage.js**  
  Menangani penyimpanan dan pengambilan data menggunakan LocalStorage.

- **ui.js**  
  Mengatur tampilan aplikasi serta interaksi pengguna dengan sistem.

---

## 📁 src/styles
Folder ini berisi file CSS untuk tampilan aplikasi.

Isi folder:

- **variables.css**  
  Berisi variabel warna dan tema aplikasi.

- **main.css**  
  Berisi layout utama dan styling komponen UI.

---

## 📁 tests
Folder ini berisi file pengujian aplikasi.

Isi folder:

- **app.test.html**  
  Digunakan untuk menguji logika utama aplikasi.

- **storage.test.html**  
  Digunakan untuk menguji sistem penyimpanan data.

- **auth.test.html**  
  Digunakan untuk menguji sistem autentikasi pengguna.

- **ui.test.html**  
  Digunakan untuk menguji rendering tampilan aplikasi.

---

## 📄 index.html
Halaman utama aplikasi yang menjadi **entry point** dari sistem.

---

## 📄 manifest.json
File konfigurasi **Progressive Web App (PWA)** yang memungkinkan aplikasi diinstall seperti aplikasi mobile.

---

## 📄 sw.js
Service Worker yang digunakan untuk melakukan caching asset sehingga aplikasi dapat berjalan secara offline.

---

## 📄 start.bat
Script sederhana untuk menjalankan aplikasi dengan membuka halaman aplikasi di browser.

---

## 📄 README.md
Dokumentasi utama repository yang berisi deskripsi aplikasi, fitur, serta cara menjalankan aplikasi.