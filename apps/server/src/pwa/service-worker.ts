// Basic offline notes cache
self.addEventListener("install", () => {
  // @ts-ignore
  self.skipWaiting();
});

self.addEventListener("activate", (event: any) => {
  // @ts-ignore
  event.waitUntil(self.clients.claim());
});
