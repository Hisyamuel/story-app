import AuthService from '../utils/auth-service';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
    this._addEventListeners();
  }

  render() {
    const isLoggedIn = AuthService.isLoggedIn();

    this.innerHTML = `
      <nav class="app-bar">
        <div class="app-bar__brand">
          <a href="#/home" class="app-bar__logo">
            <img src="/images/logo.png" alt="Story App Logo" height="40">
          </a>
        </div>
        
        ${isLoggedIn ? `
          <button id="hamburger" class="header__menu" aria-label="Navigation Menu">☰</button>
        ` : ''}

        <div id="navigationDrawer" class="app-bar__nav ${isLoggedIn ? 'user-logged-in' : ''}">
          <ul>
            <li><a href="#/home">Home</a></li>
            ${isLoggedIn ? `
              <li><a href="#/favorites">Favorites</a></li>
              <li><a href="#/about">About</a></li>
              <li><a href="#/add-story">Add</a></li>
              <li><a href="#/login" id="logout-button">Logout</a></li>
            ` : `
               <li><a href="#/about">About</a></li>
               <li><a href="#/login">Login</a></li>
            `}
          </ul>
        </div>
      </nav>
    `;
  }

  _addEventListeners() {
    // Listener Logout
    const logoutButton = this.querySelector('#logout-button');
    if (logoutButton) {
      logoutButton.addEventListener('click', (event) => {
        event.preventDefault();
        AuthService.removeToken();
        window.location.hash = '#/login';
        this.render();
        this._addEventListeners();
      });
    }

    // Listener Hamburger
    const hamburgerBtn = this.querySelector('#hamburger');
    const navDrawer = this.querySelector('#navigationDrawer');

    if (hamburgerBtn && navDrawer) {
      hamburgerBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        navDrawer.classList.toggle('open');
        
        // Logika Ganti Icon (☰ <-> X)
        const isOpen = navDrawer.classList.contains('open');
        hamburgerBtn.innerHTML = isOpen ? '<span style="font-size: 45px; line-height: 50px;">&times;</span>' : '&#9776;';
        hamburgerBtn.style.color = isOpen ? '#ffd600' : 'var(secondary-color)';
      });
      
      // Tutup saat klik menu
      navDrawer.addEventListener('click', () => {
        navDrawer.classList.remove('open');
        hamburgerBtn.innerHTML = '&#9776;';
        hamburgerBtn.style.color = 'var(--secondary-color)';
      });
      
      // Tutup saat klik luar
      document.addEventListener('click', (event) => {
        if (!hamburgerBtn.contains(event.target) && !navDrawer.contains(event.target)) {
           navDrawer.classList.remove('open');
           hamburgerBtn.innerHTML = '&#9776;';
           hamburgerBtn.style.color = 'var(--secondary-color)';
        }
      });
    }
  }
}

customElements.define('app-bar', AppBar);
export default AppBar;