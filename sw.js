this.addEventListener('install', function(event) {
    console.log(12312312);
    event.waitUntil(
        caches.open('my-test-cache-v1').then(function(cache) {
            return cache.addAll([
                '/',
            ]);
        })
    );
});