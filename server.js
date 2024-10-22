const express = require('express');
const path = require('path'); // Asegúrate de importar el módulo 'path'
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.static(path.join(__dirname))); // Corregido 'pp' a 'app'

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
