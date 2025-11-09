// utils yang berisi macam-macam fungsi pembantu
const Utils = {
  formatDate(dateString) {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  },

  // Helper untuk menampilkan pesan error form 
  showError(inputElement, message) {
    let errorElement = inputElement.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains('form-error')) {
      errorElement = document.createElement('div');
      errorElement.className = 'form-error';
      inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
    }
    errorElement.textContent = message;
    inputElement.classList.add('is-invalid'); // style untuk input yang error
  },

  // Helper untuk menghapus pesan error form
  clearError(inputElement) {
    let errorElement = inputElement.nextElementSibling;
    if (errorElement && errorElement.classList.contains('form-error')) {
      errorElement.textContent = '';
      inputElement.classList.remove('is-invalid');
    }
  },
};

export default Utils;