const express = require('express');
const app = express();
const path = require('path');

// Importar rotas
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const canvasRouter = require('./routes/canvas');

// Usar as rotas importadas
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/api/canvas', canvasRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
