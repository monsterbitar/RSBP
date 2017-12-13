var CACHE_NAME = 'simplepos4bch-cache-v2';
var urlsToCache = [
  '/',
  '/index.html',
  '/img/logo.png',
  '/img/favicon.png',
  '/img/apple-touch-icon.png',
  '/img/google-touch-icon.png'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
