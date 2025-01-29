const CACHE_NAME = "video-cdn-cache-v1";
const VIDEO_CACHE = "/videos/";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Cache the homepage and other assets
      return cache.addAll(["/", "/index.html"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.url.includes(VIDEO_CACHE)) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          return (
            cachedResponse ||
            fetch(request).then((networkResponse) => {
              cache.put(request, networkResponse.clone());
              return networkResponse;
            })
          );
        });
      })
    );
  }
});
