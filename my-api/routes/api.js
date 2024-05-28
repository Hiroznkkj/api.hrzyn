const express = require('express');
const router = express.Router();


// Adicionando mais rotas na API
router.get('/users', (req, res) => {
  res.send('List of users');
});

router.get('/', (req, res) => {
  const text = req.query.text || 'Empty querry';
  res.send(text);
});

router.get('/teste', (req, res) => {
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  
  ctx.fillStyle = 'skyblue';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = 'black';
  ctx.font = '40px Arial';
  ctx.fillText('Hello, Canvas!', 200, 300);

  res.setHeader('Content-Type', 'image/png');
  canvas.pngStream().pipe(res);
});

router.get('/querry', (req, res) => {
    const width = parseInt(req.query.width) || 800;
    const height = parseInt(req.query.height) || 600;
    const text = req.query.text || 'Hello, Canvas!';
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
  
    // Exemplo de desenho no canvas
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(0, 0, width, height);
  
    ctx.fillStyle = 'black';
    ctx.font = '40px Arial';
    ctx.fillText(text, 200, 300);
  
    // Enviar a imagem como resposta
    res.setHeader('Content-Type', 'image/png');
    canvas.pngStream().pipe(res);
  });

module.exports = router;
