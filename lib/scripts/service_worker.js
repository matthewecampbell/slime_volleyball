this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '../../index.html',
        '../stylesheets/style.css',
        './index.js',
        './ball.js',
        './game-commands.js',
        './game.js',
        './menu.js',
        './net.js',
        './player.js',
        './scoreboard.js',
        './slime.js'
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        caches.open('v1').then(function(cache) {
          cache.put(event.request, response.clone());
        });
        return response;
      });
    }).catch(function() {
      return caches.match('/sw-test/gallery/myLittleVader.jpg');
    })
  );
});

this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v1'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
