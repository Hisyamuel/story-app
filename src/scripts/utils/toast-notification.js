class NotificationSystem {
    constructor() {
        this.toastContainer = null;
        this.init();
    }

    init() {
        if (!document.querySelector('.toast-container')) {
            this.toastContainer = document.createElement('div');
            this.toastContainer.className = 'toast-container';
            document.body.appendChild(this.toastContainer);
        } else {
            this.toastContainer = document.querySelector('.toast-container');
        }
    }

    showToast(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        const icons = { success: '✓', error: '✕', info: 'i' };

        toast.innerHTML = `
            <div class="toast-icon">${icons[type] || icons.info}</div>
            <div class="toast-message">${message}</div>
            <button class="toast-close" aria-label="Close">&times;</button>
        `;

        this.toastContainer.appendChild(toast);
        toast.querySelector('.toast-close').addEventListener('click', () => this.removeToast(toast));
        setTimeout(() => this.removeToast(toast), duration);
    }

    removeToast(toast) {
        toast.classList.add('hiding');
        setTimeout(() => { if (toast.parentElement) toast.remove(); }, 300);
    }
}

const notification = new NotificationSystem();

window.customNotify = {
    showToast: (message, type, duration) => notification.showToast(message, type, duration)
};

export default notification;