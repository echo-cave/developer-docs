/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d50a0c462cef7cc07f77e1fea44bab1b"
  },
  {
    "url": "assets/css/0.styles.287a5d0d.css",
    "revision": "987f65c88887e17a7f5064ad04cf3bec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.825180bf.js",
    "revision": "dbed049c02c59478cd81e419883207d1"
  },
  {
    "url": "assets/js/11.571aaa50.js",
    "revision": "2cbf5d6582b8e755c164850be28a6ea6"
  },
  {
    "url": "assets/js/12.9b19d2b5.js",
    "revision": "c1d1332f051fbde2b0fb84b329b47803"
  },
  {
    "url": "assets/js/2.d58ab9fc.js",
    "revision": "da0eb276441092c8195e909c34c949b9"
  },
  {
    "url": "assets/js/3.b1ff4731.js",
    "revision": "99af417a339c7a5ebeb6f8d02557f7d1"
  },
  {
    "url": "assets/js/4.96e3a92e.js",
    "revision": "e6bc0d7a67d38c9580c4c6cabd857366"
  },
  {
    "url": "assets/js/5.9b8582ab.js",
    "revision": "73d66be0f295446ee3dbf3f8d4bad656"
  },
  {
    "url": "assets/js/6.d6f99d87.js",
    "revision": "821b76eb603a2ea967928340b7421985"
  },
  {
    "url": "assets/js/7.a8c14de0.js",
    "revision": "1ad9a7099962b2b2c1f3bbbf18c791cf"
  },
  {
    "url": "assets/js/8.5b6a7115.js",
    "revision": "1e7f2a4c9e0601724b0d8864e78e21e7"
  },
  {
    "url": "assets/js/9.68246ff8.js",
    "revision": "6f8f15c645e2a68f19a473a793757b94"
  },
  {
    "url": "assets/js/app.9fb3a782.js",
    "revision": "b07ffe13fcc02a7a43ecd9b831ffe751"
  },
  {
    "url": "icons/logo.png",
    "revision": "c198aae62300654f689b599e1d6651e4"
  },
  {
    "url": "icons/logo.svg",
    "revision": "29555ff1e8b169e9dac54a8ff4c80f16"
  },
  {
    "url": "index.html",
    "revision": "291624edf1fefeb3a83b6b23cf052194"
  },
  {
    "url": "introduce/index.html",
    "revision": "72535edde8031d50ab4e46857832fc2e"
  },
  {
    "url": "logo.png",
    "revision": "04589b56f180537dbebd0a64afc57470"
  },
  {
    "url": "sentence/demo/index.html",
    "revision": "a71af6540312edf671b054a85eb953f5"
  },
  {
    "url": "sentence/index.html",
    "revision": "f4bcfe843c69650d49d1d551091ef368"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
