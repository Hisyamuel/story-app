# 🌍 WhereStory App

**WhereStory** adalah sebuah Progressive Web Application (PWA) inovatif yang memungkinkan pengguna untuk menjelajahi, membagikan, dan menyimpan cerita dari berbagai belahan dunia berdasarkan lokasi spesifik kejadiannya. 

Proyek ini dibangun menggunakan Vanilla JavaScript, Story API dari Dicoding, dan Webpack yang berfokus pada pengalaman pengguna yang mulus (*seamless UX*), desain responsif, dan performa tinggi.

---

## Fitur Unggulan

* **Peta Interaktif (Location-Based Stories):** Terintegrasi dengan Leaflet.js untuk menampilkan dan membagikan cerita berdasarkan titik koordinat secara presisi.
* **Progressive Web App (PWA):** Mendukung instalasi ke layar utama (Homescreen) dan dapat diakses secara *offline* atau pada jaringan lambat berkat implementasi Service Worker.
* **Sistem Autentikasi:** Dilengkapi dengan fitur Login dan Register, serta *Auth Guards* untuk melindungi rute privat (hanya pengguna masuk yang dapat menambah cerita atau melihat favorit).
* **Landing Page Dinamis:** Sambutan visual yang elegan dengan latar belakang partikel animasi (bertenaga `tsParticles`) sebelum masuk ke aplikasi utama.
* **Cerita Favorit:** Fitur bagi pengguna untuk menyimpan cerita yang paling disukai dan mengaksesnya kembali dengan mudah.
* **Desain Responsif & Modern:** Menggunakan CSS Grid dan Flexbox, dilengkapi *Side Drawer Navigation* khusus untuk perangkat seluler.

---

## Teknologi yang Digunakan

* **Core:** HTML5, CSS3, JavaScript (ES6+)
* **Bundler:** Webpack (dengan konfigurasi `dev`, `prod`, dan `common`)
* **Maps & Geolocation:** [Leaflet.js](https://leafletjs.com/)
* **Animasi Background:** [tsParticles](https://particles.js.org/)
* **API:** [Story API](https://story-api.dicoding.dev/)
* **Ikonologi:** Font Awesome 5
* **Deployment:** Netlify

---

## Panduan Instalasi (Development)

Jika Anda ingin menjalankan atau mengembangkan proyek ini di komputer lokal, ikuti langkah-langkah berikut:

### Prasyarat
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) di sistem Anda.

### Langkah-langkah

1. **Kloning repositori ini** (Jika menggunakan Git):
   ```bash
   git clone [<https://github.com/Hisyamuel/story-app>](https://github.com/Hisyamuel/story-app)
   cd story-app
2. **Instal semua dependencies**:
   ```bash
   npm install
3. **Jalankan server development**:
   ```bash
   npm run start-dev
4. **Build untuk Produksi**:
   ```bash
   npm run build

## Profile Pengembang
### Nur Amali Hisyam
* **Peran:** Front-End Developer
* **Portfolio:** https://nuramalihisyam.netlify.app/
* **Linkedin:** https://linkedin.com/in/nuramalihsiyam/
* **Instagram:** https://instagram.com/smhsymz/