const express = require('express');
const app = express();
const path = require('path');


// Importar rotas
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

// Usar as rotas importadas
app.use('/', indexRouter);
app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
