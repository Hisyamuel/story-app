import ApiService from '../../data/api';

// Bagian ini adalah halaman registrasi pengguna jika belum memiliki akun.
const RegisterPage = {
  async render() {
    return `
      <div class="auth-container">
        <h1>Daftar Akun Baru</h1>
        <form id="register-form">
          <div class="form-group">
            <label for="name">Nama</label>
            <input type="text" id="name" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" required minlength="8">
          </div>
          
          <button type="submit" id="submit-button" class="btn btn-primary" style="width: 100%;">
            Daftar
          </button>
          
        </form>
        <div class="redirect-link">
          <p>Sudah punya akun? <a href="#/login" style= "color: #FFD600;">Login di sini</a></p>
        </div>
        <div id="error-message" class="form-error" style="text-align: center; margin-top: 1rem;"></div>
      </div>
    `;
  },

  // Menangani logika setelah halaman dirender
  async afterRender() {
    const registerForm = document.querySelector('#register-form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const errorMessageElement = document.querySelector('#error-message');

    // Menangkap tombol submit
    const submitButton = document.querySelector('#submit-button');

    registerForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      errorMessageElement.textContent = '';

      // Menampilkan loading dan menonaktifkan tombol
      submitButton.classList.add('loading');
      submitButton.disabled = true;

      // Mengambil nilai input
      const name = nameInput.value;
      const email = emailInput.value;
      const password = passwordInput.value;

      try {
        const response = await ApiService.register({ name, email, password });

        if (response.error) {
          throw new Error(response.message);
        }

        // Jika berhasil, akan dialihkan ke halaman login beserta notifikasi
        alert('Registrasi berhasil! Silakan login.');
        window.location.hash = '#/login';

      } catch (error) {
        errorMessageElement.textContent = `Registrasi Gagal: ${error.message}`;

        // Menghentikan loading dan mengaktifkan tombol jika gagal
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
      }
    });
  },
};

export default RegisterPage;