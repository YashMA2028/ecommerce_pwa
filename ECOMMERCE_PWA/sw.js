self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('shop-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/images/mobile.jpeg',
                '/js/script.js',
                '/css/index.css'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});