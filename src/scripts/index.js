import App from '../scripts/pages/app';
import { tsParticles } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

const app = new App({
  header: document.querySelector('.app-bar'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => { 
  app.renderPage();

  //Background Animasi Partikel
  try {
    await loadFull(tsParticles);

    // Menjalankan Animasi Partikel Bintang
    await tsParticles.load({
      id: "tsparticles", 
      options: {
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#ffffff", 
          },
          links: {
            enable: false, 
          },
          move: {
            enable: true,
            direction: "none",
            random: true,
            speed: 0.5, 
            straight: false,
          },
          number: {
            density: {
              enable: true,
              width: 800, 
            },
            value: 100,
          },
          opacity: {
            value: { min: 0.1, max: 0.8 },
            animation: {
              enable: true,
              speed: 1, 
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      },
    });
  } catch (error) {
    console.error("Gagal memuat animasi background:", error);
  }

  // Registrasi Service Worker
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker berhasil didaftarkan.');
    } catch (error) {
      console.error('Gagal mendaftarkan Service Worker:', error);
    }
  }
});