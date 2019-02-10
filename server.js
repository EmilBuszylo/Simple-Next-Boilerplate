const next = require('next');
const express = require('express');
const routes = require('./routes');

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  express()
    .use(handler)
    .listen(port, () =>
      console.log(
        `app listening on http://localhost:${port} use api from: ${
          process.env.API_URL
        }`,
      ),
    );
});
