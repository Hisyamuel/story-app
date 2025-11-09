import { openDB } from 'idb';

const DATABASE_NAME = 'story-app-db';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'favorite-stories';

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(db) {
        // Membuat object store jika belum ada
        if (!db.objectStoreNames.contains(OBJECT_STORE_NAME)) {
            db.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
        }
    },
});

const FavoriteStoryDb = {
    // C (Create) / U (Update), membuat atau memperbarui data
    async putStory(story) {
        if (!story.id) return;
        return (await dbPromise).put(OBJECT_STORE_NAME, story);
    },

    // R (Read), mengambil satu data
    async getStory(id) {
        if (!id) return;
        return (await dbPromise).get(OBJECT_STORE_NAME, id);
    },

    // R (Read), mengambil semua data
    async getAllStories() {
        return (await dbPromise).getAll(OBJECT_STORE_NAME);
    },

    // D (Delete), menghapus data
    async deleteStory(id) {
        if (!id) return;
        return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    },
};

export default FavoriteStoryDb;