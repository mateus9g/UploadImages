const routes = require('express').Router();

routes.get('/', (req, res) => {
  return res.json({ hello: 'Rocketseat' });
});

module.exports = routes;
