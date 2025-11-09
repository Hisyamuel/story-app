import { precacheAndRoute } from 'workbox-precaching';

// Workbox akan menyuntikkan daftar aset (app shell) ke sini.
precacheAndRoute(self.__WB_MANIFEST);

// Listener untuk event 'push'
self.addEventListener('push', (event) => {
    console.log('Service Worker: Push received.', event.data.text());

    // Default data notifikasi
    let data = {
        title: 'Push Notification',
        options: {
            body: 'No payload received',
            icon: '/icons/icon-96x96.png', 
            badge: '/icons/icon-72x72.png',
        },
    };

    // Menyesuaikan notifikasi secara dinamis dari event
    if (event.data) {
        try {
            const eventData = event.data.json();
            data.title = eventData.title;
            data.options.body = eventData.body;
            if (eventData.icon) {
                data.options.icon = eventData.icon;
            }
        } catch (e) {
            console.error('Error parsing push data:', e);
            data.options.body = event.data.text(); // Fallback jika data bukan JSON
        }
    }

    // Menampilkan notifikasi
    event.waitUntil(
        self.registration.showNotification(data.title, data.options)
    );
});