const LandingPage = {
  async render() {
    return `
      <div class="landing-container">
        <section class="hero-section">
          <div class="hero-content">
            <img src="/images/logo.png" class="logo fade-in-up" alt="WhereStory Logo" height="60">
            <h1 class="fade-in-up">WhereStory</h1>
            <p class="fade-in-up" style="animation-delay: 0.2s;">
              Temukan dan bagikan cerita dari berbagai lokasi di seluruh dunia.
            </p>
            <div class="cta-buttons">
              <a href="#/login" class="btn btn-primary">Mulai Sekarang</a>
              <a href="#descript" class="btn btn-third">Ketahui Lebih Lanjut</a>
            </div>
          </div>
        </section>

        <section id="descript" class="description-section">
          <div class="description-content">
            <h2 class="fade-in-up">Apa itu WhereStory?</h2>
            <p class="fade-in-up" style="animation-delay: 0.2s;">
              WhereStory adalah sebuah platform inovatif yang memungkinkan Anda untuk menjelajahi dunia melalui cerita. 
              Baik itu kenangan pribadi, fakta sejarah, atau pengamatan sederhana, WhereStory adalah tempat untuk membagikannya.
            </p>
          </div>
        </section>

        <section class="features-section">
          <h2 class="text-center fade-in-up">Fitur Unggulan</h2>
          <div class="features-grid">
            <div class="feature-card fade-in-up" style="animation-delay: 0.2s;">
              <i class="fas fa-map-marked-alt"></i>
              <h3>Peta Interaktif</h3>
              <p>Jelajahi cerita berdasarkan lokasi pada peta yang dinamis dan mudah digunakan.</p>
            </div>
            <div class="feature-card fade-in-up" style="animation-delay: 0.4s;">
              <i class="fas fa-cloud-upload-alt"></i>
              <h3>Bagikan Ceritamu</h3>
              <p>Unggah foto dan tulis ceritamu dengan mudah untuk dilihat oleh komunitas global.</p>
            </div>
            <div class="feature-card fade-in-up" style="animation-delay: 0.6s;">
              <i class="fas fa-solid fa-bookmark"></i>
              <h3>Simpan Ceritamu</h3>
              <p>Simpan cerita-cerita yang paling Anda sukai untuk dibaca kembali kapan saja.</p>
            </div>
          </div>
        </section>

        <section class="cta-section">
          <div class="cta-content">
            <h2 class="fade-in-up">Siap Bergabung?</h2>
            <p class="fade-in-up" style="animation-delay: 0.2s;">
              Buat akun atau masuk untuk mulai menjelajahi dan berbagi cerita Anda hari ini.
            </p>
            <div class="cta-buttons fade-in-up" style="animation-delay: 0.4s;">
              <a href="#/register" class="btn btn-primary">Daftar Akun</a>
              <a href="#/login" class="btn btn-secondary">Masuk</a>
            </div>
          </div>
        </section>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini dapat digunakan untuk menambahkan event listener atau manipulasi DOM lainnya setelah render
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(el => {
      el.classList.add('visible');
    });
  },
};

export default LandingPage;
