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
        <a href="#/home" class="app-bar__logo">
          <img src="/images/logo.png" alt="Story App Logo" height="40">
        </a>
        <div class="app-bar__nav">
          <ul>
            <li><a href="#/home">Home</a></li>
            
            ${isLoggedIn ? '<li><a href="#/favorites">Favorites</a></li>' : ''}
            
            <li><a href="#/about">About</a></li>
            ${isLoggedIn ? `
              <li><a href="#/add-story">Add Story</a></li>
              <li><a href="#/login" id="logout-button">Logout</a></li>
            ` : `
              <li><a href="#/login">Login</a></li>
            `}
          </ul>
        </div>
      </nav>
    `;
  }

  _addEventListeners() {
    const logoutButton = this.querySelector('#logout-button');
    if (logoutButton) {
      logoutButton.addEventListener('click', (event) => {
        event.preventDefault();
        AuthService.removeToken();
        window.location.hash = '#/login';
        this.render();
      });
    }
  }
}

if (!customElements.get('app-bar')) {
  customElements.define('app-bar', AppBar);
}

export default AppBar;