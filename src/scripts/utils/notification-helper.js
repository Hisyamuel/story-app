const NotificationHelper = {
    // Fungsi untuk meminta izin
    async requestPermission() {
        // Mengecek jika 'Notification' ada di window
        if (!('Notification' in window)) {
            console.error('Browser ini tidak mendukung notifikasi desktop.');
            return;
        }

        // Meminta izin notifikasi kepada user
        const status = await Notification.requestPermission();
        if (status === 'granted') {
            console.log('Izin notifikasi diberikan.');
            this._displayGrantedNotification();

        } else {
            console.log('Izin notifikasi ditolak.');
        }
    },

    // Notifikasi "Terima Kasih" setelah izin
    _displayGrantedNotification() {
        const options = {
            body: 'Terima kasih telah mengaktifkan notifikasi!',
            icon: '/icons/icon-96x96.png',
        };
        navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification('Notifikasi Diaktifkan', options);
        });
    },

    // Subscribe ke Push Manager
    async _subscribeToPush() {
        if (!('PushManager' in window)) {
            console.error('Browser ini tidak mendukung Push Manager.');
            return;
        }

        const registration = await navigator.serviceWorker.ready;
        try {
            const VAPID_PUBLIC_KEY = 'https://story-api.dicoding.dev/v1';

            const subscription = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: this._urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
            });

            console.log('Berhasil subscribe:', JSON.stringify(subscription));

        } catch (error) {
            console.error('Gagal subscribe ke push:', error);
        }
    },


    _urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
        const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);
        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    },
};

export default NotificationHelper;