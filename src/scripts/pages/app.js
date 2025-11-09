import UrlParser from '../routes/url-parser.js';
import routes from '../routes/routes.js';
import AuthService from '../utils/auth-service.js';

// Bagian ini adalah kelas utama aplikasi yang mengelola routes dan rendering halaman.
class App {
  constructor({ content, header }) {
    this._content = content;
    this._header = header;
    import('../components/app-bar.js');
  }

  // Bagian ini adalah method utama untuk merender halaman yang akan menggunakan View Transition API jika didukung 
  async renderPage() {
    this._header.innerHTML = '<app-bar></app-bar>';

    const url = UrlParser.parseActiveUrlWithCombiner();

    // Auth Guards untuk melindungi rute tertentu
    const protectedRoutes = ['/', '/home', '/add-story'];
    if (protectedRoutes.includes(url) && !AuthService.isLoggedIn()) {
      window.location.hash = '#/login';
      return;
    }
    const authRoutes = ['/login', '/register'];
    if (authRoutes.includes(url) && AuthService.isLoggedIn()) {
      window.location.hash = '#/home';
      return;
    }

    const page = routes[url] || routes['/'];

    // Memeriksa apakah browser mendukung View Transition API
    if (document.startViewTransition) {
      // Jika didukung, akan menggunakan API modern
      document.startViewTransition(async () => {
        await this._updatePageContent(page);
      });
    } else {
      // Jika tidak, akan menggunakan fallback animasi CSS manual
      await this._legacyTransition(page);
    }
  }

  // Method terpisah untuk transisi fallback (animasi CSS manual) 
  async _legacyTransition(page) {
    this._content.classList.add('page-transition-out');
    await new Promise(resolve => setTimeout(resolve, 300));
    await this._updatePageContent(page);
    this._content.classList.remove('page-transition-out');
  }

  // Method terpisah untuk mengganti konten DOM. Ini dipanggil oleh startViewTransition atau _legacyTransition 
  async _updatePageContent(page) {
    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      console.error('Gagal merender halaman:', error);
      this._content.innerHTML = '<p>Halaman tidak ditemukan atau terjadi error.</p>';
    }
  }
}

export default App;