const LandingPage = {
  async render() {
    return `
      <div class="landing-container">
        <section id="hero" class="hero-section">
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

        <section id="features" class="features-section">
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

        <section id="option" class="cta-section">
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
      <footer class="main-footer">
        <div class="footer-container">
            <div class="footer-section about-col">
                <div class="footer-logo">About</div>
                <p>
                    WhereStory adalah sebuah platform inovatif yang memungkinkan Anda untuk menjelajahi dunia melalui cerita. 
                    Baik itu kenangan pribadi, fakta sejarah, atau pengamatan sederhana, WhereStory adalah tempat untuk membagikannya.
                </p>
            </div>

            <div class="footer-section links-col">
                <h3>Quick Nav</h3>
                <ul>
                  <li><a href="#hero">Home</a></li>
                  <li><a href="#descript">Description</a></li>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#option">Option</a></li>
                </ul>
            </div>

            <div class="footer-section contact-col">
                <h3>Contact Me</h3>
                <div class="contact-row">
                  <i class="ph ph-whatsapp-logo"></i>
                  <a href="https://wa.me/+6282159103747" target="_blank">+62 821-5910-3747</a>
                </div>
                <div class="contact-row">
                  <i class="ph ph-envelope"></i>
                  <a href="mailto:hisyam4633@gmail.com" target="_blank">hisyam4633@gmail.com</a>
                </div>
                <div class="footer-socials">
                  <a href="https://www.instagram.com/smhsymz" target="_blank"><i class="ph ph-instagram-logo"></i></a>
                  <a href="https://linkedin.com/in/nuramalihisyam" target="_blank"><i class="ph ph-linkedin-logo"></i></a>
                  <a href="https://www.github.com/Hisyamuel" target="_blank"><i class="ph ph-github-logo"></i></a>
                </div>
            </div>
        </div>
        <p>Copyright © 2025 nuramalihisyam. All Rights Reserved.</p>
      </footer>
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
