const express = require('express');
const path = require('path');

const app = express();

const appName = 'rock-paper-scissors-jlouis';

app.use(express.static(`${__dirname}/dist/${appName}`));

app.get('/*', (req, res) => res.sendFile(
  path.join(`${__dirname}/dist/${appName}`)
));

app.listen(process.env.PORT || 8080);

