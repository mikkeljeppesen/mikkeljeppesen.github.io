importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  workbox.routing.registerRoute(new RegExp('/*'), new workbox.strategies.NetworkFirst());
  console.log('Workbox is loaded!');
} else {
  console.log('Workbox is not loaded...');
}
