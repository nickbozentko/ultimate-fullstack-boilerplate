const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static('dist'));

app.use('*', (req, res) => res.sendStatus(404));

const port = process.env.port || 8080;
app.listen(port, () => console.log(`Listening on port ${port}!`));
