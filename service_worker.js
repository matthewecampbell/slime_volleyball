this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/slime_volleyball/',
        '/slime_volleyball/index.html',
        '/slime_volleyball/lib/stylesheets/style.css',
        '/slime_volleyball/lib/scripts/index.js',
        '/slime_volleyball/lib/scripts/ball.js',
        '/slime_volleyball/lib/scripts/game-commands.js',
        '/slime_volleyball/lib/scripts/game.js',
        '/slime_volleyball/lib/scripts/menu.js',
        '/slime_volleyball/lib/scripts/net.js',
        '/slime_volleyball/lib/scripts/player.js',
        '/slime_volleyball/lib/scripts/scoreboard.js',
        '/slime_volleyball/lib/scripts/slime.js'
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
