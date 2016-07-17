module.exports = function(server) {
  // Install a "/ping" route that returns "pong"
  var router = server.loopback.Router();
  router.get('/ping', function(req, res) {
    return res.send('pong');
  });

  server.use(router);
}