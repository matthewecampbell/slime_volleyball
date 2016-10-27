var Game = require('./game-commands');

require('../stylesheets/style.css');

registerServiceWorker();
new Game();

function registerServiceWorker() {
  console.log("hello")
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/slime_volleyball/service_worker.js')
    .then(function(reg) {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
  }
}
