const routes = require('next-routes');

module.exports = routes()
  .add('post', '/post/:slug')
  .add('examplePage', '/examplePage/:category');
