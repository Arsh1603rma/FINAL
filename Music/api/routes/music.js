const {
  index,
  show,
  create,
  update,
  destroy
} = require('../controllers/music');

module.exports = router => {
  // localhost:4000/music
  router.get('/music', index);

  // localhost:4000/music/12345
  router.get('/music/:id', show);

  // localhost:4000/music
  router.post('/music', create);

  // localhost:4000/music/update

  router.post('/music/update', update);
  
  // localhost:4000/music/destroy
  router.post('/music/destroy', destroy);
};