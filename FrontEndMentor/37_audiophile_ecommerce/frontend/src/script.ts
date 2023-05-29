export default function Main() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/serviceWorker.js', { scope: '/' })
      .then(() => {
        console.log('Service Worker Registered');
      });
  }
}

Main();
