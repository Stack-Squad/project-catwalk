const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
