const express = require('express');
const cors = require('cors');
const mainRouter = require('./routers/index');
const app = express();
const port = 4000;

app.use(cors());
app.use('/',mainRouter)

app.listen(port, () => {
  console.log(`Server Running on:${port}`);
});
