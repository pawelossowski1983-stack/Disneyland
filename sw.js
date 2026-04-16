const CACHE = 'dlp-v2';
const ASSETS = ['./index.html', './manifest.json', './icons/icon-192.png', './icons/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k!==CACHE).map(k=>caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  const url = e.request.url;
  if (url.includes('api.anthropic.com') || url.includes('queue-times.com') || url.includes('fonts.googleapis.com')) return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./index.html'))));
});
