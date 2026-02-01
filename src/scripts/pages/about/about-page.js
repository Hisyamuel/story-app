// Bagian ini mengelola halaman "About" dari aplikasi Story App.
const AboutPage = {
  async render() {
    return `
      <section class="about-container">
        <h1>About</h1>
        <p>
          WhereStory adalah platform berbagi cerita inovatif di mana pengguna dapat memposting cerita pendek mereka dan menandai lokasi di peta. 
          Aplikasi ini dibuat sebagai contoh penerapan arsitektur Single-Page Application (SPA), integrasi API, visualisasi peta dengan Leaflet, dan 
          prinsip-prinsip aksesibilitas web.
        </p> 
        <br>

        <hr />
        
        <br>
        <h2>Features :</h2>
          <ul>
          <br><li><strong>SPA:</strong> Navigasi cepat tanpa reload halaman.</li>
          <br><li><strong>Peta Interaktif:</strong> Lihat lokasi cerita di seluruh dunia secara real-time.</li>
          <br><li><strong>Tambah Cerita:</strong> Bagikan ceritamu dengan foto dan lokasi terkini.</li>
          <br><li><strong>Responsif:</strong> Tampilan optimal di desktop, tablet, dan mobile.</li>
          </ul>
      </section>
    `;
  },

  // Fungsi ini dapat digunakan untuk inisialisasi tambahan setelah halaman dirender.
  async afterRender() {
  },
};

export default AboutPage;