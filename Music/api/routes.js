module.exports = router => {
  require('./routes/music')(router);

  return router;
};