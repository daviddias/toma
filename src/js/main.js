var SimplePeer = require('simple-peer');

document.addEventListener('DOMContentLoaded', function () {
  startApp();
});

function startApp () {
    var peer1 = new SimplePeer({ initiator: true });

    peer1.on('signal', function (data) {
      var body = document.querySelector('body');
      body.innerHTML = '<h1>GOT SIGNAL<h1>';
    });
}
