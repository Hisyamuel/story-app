// Token untuk autentikasi yang disimpan di sessionStorage
const AuthService = {
    saveToken(token) {
        sessionStorage.setItem('story-app-token', token);
    },

    getToken() {
        return sessionStorage.getItem('story-app-token');
    },

    removeToken() {
        sessionStorage.removeItem('story-app-token');
    },

    isLoggedIn() {
        return !!this.getToken();
    },
};

export default AuthService;