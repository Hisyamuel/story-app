import FavoriteStoryDb from '../../utils/idb-helper';
import Utils from '../../utils/index';
import notification from '../../utils/toast-notification';

const FavoritesPage = {
  async render() {
    return `
      <section class="favorites-container">
        <h1>Cerita Favorit Anda</h1>
        
        <div class="search-container form-group">
          <label for="search-favorite">Cari Favorit</label>
          <input type="search" id="search-favorite" class="form-control" placeholder="Ketik nama...">
        </div>
        
        <div id="favorite-list" class="story-list">
          <p>Memuat cerita favorit...</p>
        </div>
      </section>
    `;
  },

  async afterRender() {
    this._allStories = await FavoriteStoryDb.getAllStories();
    this._renderList(this._allStories);

    const searchInput = document.querySelector('#search-favorite');
    searchInput.addEventListener('input', (event) => {
      const query = event.target.value.toLowerCase();
      const filteredStories = this._allStories.filter(
        (story) => story.name.toLowerCase().includes(query)
      );
      this._renderList(filteredStories);
    });
  },

  _renderList(stories) {
    const listContainer = document.querySelector('#favorite-list');
    listContainer.innerHTML = '';

    if (stories.length === 0) {
      listContainer.innerHTML = '<p>Anda belum memiliki cerita favorit.</p>';
      return;
    }

    stories.forEach((story) => {
      const storyItem = document.createElement('article');
      storyItem.className = 'story-item';
      storyItem.innerHTML = `
        <img src="${story.photoUrl}" alt="Foto ${story.name}" class="story-item__image">
        <div class="story-item__content">
          <h3 class="story-item__author">${story.name}</h3>
          <p class="story-item__date">${Utils.formatDate(story.createdAt)}</p>
          <p class="story-item__description">${story.description.substring(0, 100)}...</p>
          
          <button class="btn btn-danger delete-favorite-btn" data-id="${story.id}">
            Hapus Favorit
          </button>
        </div>
      `;
      listContainer.appendChild(storyItem);
    });

    this._addDeleteButtonListeners();
  },

  _addDeleteButtonListeners() {
    const deleteButtons = document.querySelectorAll('.delete-favorite-btn');
    deleteButtons.forEach((button) => {
      button.addEventListener('click', async (event) => {
        event.stopPropagation();
        const storyId = event.target.dataset.id;

        await FavoriteStoryDb.deleteStory(storyId);

        notification.showToast('Cerita dihapus dari favorit.', "info");
        this.afterRender();
      });
    });
  },
};

export default FavoritesPage;