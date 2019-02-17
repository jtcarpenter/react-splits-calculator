const CACHE_NAME = `react-splits-calculator-${VERSION}`;
const APP_SHELL_FILES = [
    '/',
    BUNDLE_NAME
];

self.addEventListener('install', (evt) => {
    evt.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                cache.addAll(APP_SHELL_FILES)
                    .catch(err => console.warn(err));
            })
            .catch(err => console.warn(err))
    );
});

self.addEventListener('fetch', function(evt) {
    evt.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            return cache.match(evt.request).then(matching => {
                return matching || Promise.reject('no-match');
            });
        })
    );
    evt.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return fetch(evt.request).then(function (response) {
                return cache.put(evt.request, response);
            });
        })
    );
});