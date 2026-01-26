import ApiService from '../../data/api';
import AuthService from '../../utils/auth-service';
import Utils from '../../utils/index';
import FavoriteStoryDb from '../../utils/idb-helper';
import notification from '../../utils/toast-notification';

const HomePage = {
  async render() {
    return `
      <section class="home-container">
        <div class="story-list-container">
          <h1>Stories</h1>
          <div id="story-list" class="story-list">
            <p>Memuat cerita...</p>
          </div>
        </div>
        <div class="map-container">
          <h2>Stories Location</h2>
          <div id="map"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    if (!AuthService.isLoggedIn()) {
      window.location.hash = '#/login';
      return;
    }

    const storyListElement = document.querySelector('#story-list');
    const map = L.map('map').setView([-2.548926, 118.0148634], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const markers = {};

    try {
      const response = await ApiService.getStories();
      if (response.error) {
        throw new Error(response.message);
      }

      storyListElement.innerHTML = '';
      const stories = response.listStory;
      this._stories = stories;

      if (stories.length === 0) {
        storyListElement.innerHTML = '<p>Belum ada cerita yang tersedia.</p>';
        return;
      }

      stories.forEach((story) => {
        if (story.lat && story.lon) {
          const storyItem = document.createElement('article');
          storyItem.className = 'story-item';
          storyItem.dataset.lat = story.lat;
          storyItem.dataset.lon = story.lon;
          storyItem.dataset.id = story.id;

          storyItem.innerHTML = `
            <img src="${story.photoUrl}" alt="Foto ${story.name}" class="story-item__image">
            <div class="story-item__content">
              <h3 class="story-item__author">${story.name}</h3>
              <p class="story-item__date">${Utils.formatDate(story.createdAt)}</p>
              <p class="story-item__description">${story.description.substring(0, 100)}...</p>
              
              <button class="btn favorite-btn" data-id="${story.id}">
                Simpan ke Favorit
              </button>
            </div>
          `;
          storyListElement.appendChild(storyItem);

          const marker = L.marker([story.lat, story.lon]).addTo(map)
            .bindPopup(`<b>${story.name}</b><br>${story.description.substring(0, 50)}...`);
          markers[story.id] = marker;
        }
      });

      this._initListMapSync(map, markers);
      this._addFavoriteButtonListeners();

    } catch (error) {
      storyListElement.innerHTML = `<p style="color: red;">Gagal memuat cerita: ${error.message}</p>`;
    }
  },

  _initListMapSync(map, markers) {
    const storyItems = document.querySelectorAll('.story-item');
    storyItems.forEach(item => {
      item.addEventListener('click', () => {
        const lat = item.dataset.lat;
        const lon = item.dataset.lon;
        const id = item.dataset.id;

        map.flyTo([lat, lon], 13);
        if (markers[id]) {
          markers[id].openPopup();
        }
      });
    });
  },

  _addFavoriteButtonListeners() {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach((button) => {
      button.addEventListener('click', async (event) => {
        event.stopPropagation();
        const storyId = event.target.dataset.id;
        const storyData = this._stories.find((story) => story.id === storyId);

        if (storyData) {
          await FavoriteStoryDb.putStory(storyData);
          notification.showToast(`'${storyData.name}' berhasil disimpan ke favorit!`, "success");
        } else {
          console.error('Data cerita tidak ditemukan untuk ID:', storyId);
        }
      });
    });
  },
};

export default HomePage;