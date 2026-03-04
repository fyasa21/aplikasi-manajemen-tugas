# 📋 Actask – Aplikasi Manajemen Tugas

Actask adalah aplikasi manajemen tugas berbasis web yang dirancang untuk membantu mahasiswa mencatat, mengelola, dan memantau tugas kuliah secara sederhana dan terstruktur.

Aplikasi ini dikembangkan sebagai proyek praktikum mata kuliah **Rancang Bangun Perangkat Lunak**, dengan menerapkan workflow kolaborasi menggunakan **Git dan GitHub**.

---

# 🎯 Tujuan Pengembangan

Project ini dibuat dengan tujuan untuk:

- Mempelajari penggunaan **Git dalam pengembangan software**
- Melatih **kerja tim menggunakan version control**
- Mengimplementasikan konsep **IPO (Input – Process – Output)**
- Mengembangkan aplikasi web modular menggunakan **JavaScript**

---

# ⚙️ Fitur Aplikasi

Actask menyediakan beberapa fitur utama:

### 📌 Manajemen Tugas
- Menambahkan tugas
- Mengedit tugas
- Menghapus tugas
- Mengubah status tugas

### 📊 Dashboard
- Menampilkan ringkasan tugas
- Informasi tugas yang belum selesai
- Informasi deadline

### 🔐 Authentication
- Register pengguna
- Login pengguna
- Logout
- Session management menggunakan LocalStorage

### 📋 Kanban Board
- Todo
- In Progress
- Done

Task dapat dipindahkan menggunakan **drag and drop**.

### 📱 Progressive Web App (PWA)
- Install aplikasi di browser
- Service Worker untuk caching
- Dukungan offline mode

### 🧪 Testing
- Pengujian logika aplikasi
- Pengujian penyimpanan data
- Pengujian autentikasi
- Pengujian UI

---

# 🧠 Konsep IPO

### Input
- Judul tugas
- Mata kuliah
- Deadline
- Status tugas

### Process
- Validasi input data
- Penyimpanan data menggunakan LocalStorage
- Sorting tugas berdasarkan deadline
- Update status tugas

### Output
- Daftar tugas
- Status tugas
- Informasi deadline terdekat
- Tampilan dashboard

---

# 📁 Struktur Project
- docs/ → dokumentasi
- src/ → source code
- tests/ → unit testing

---

# ▶ Cara Menjalankan Aplikasi

### Metode 1 – Menggunakan Live Server

1. Clone repository
2. Masuk ke folder project
3. Buka project menggunakan **VS Code**
4. Jalankan **Live Server**
5. Aplikasi akan berjalan di browser

---

### Metode 2 – Menggunakan Script

Jalankan file berikut:
Browser akan terbuka dan menampilkan aplikasi.

---

# 🧪 Testing

Testing dilakukan menggunakan file HTML sederhana yang menjalankan fungsi JavaScript.

Lokasi file testing:
Jenis pengujian:

- `app.test.html` → pengujian logika aplikasi
- `storage.test.html` → pengujian penyimpanan data
- `auth.test.html` → pengujian autentikasi
- `ui.test.html` → pengujian tampilan UI

---

# 👥 Tim Pengembang

| Nama | Role |
|-----|------|
| Fathir Yasa Ramadhan | Lead |
| Muhammad Luthfi Novansyah | Developer |
| Rifza Hamdalah Putra | Developer |
| Imam Budiansyah | Developer |
| Ghyfa Galang Ahmad Wahyudin | Developer |

---

# 📜 Lisensi

Project ini dibuat untuk **keperluan akademik** pada mata kuliah  
**Rancang Bangun Perangkat Lunak**.