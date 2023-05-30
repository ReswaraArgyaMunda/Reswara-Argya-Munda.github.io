const express = require('express');
const app = express();

app.get('/luas', (req, res) => {
  const radius = parseFloat(req.query.radius);
  if (!isNaN(radius)) {
    const area = Math.PI * radius * radius;
    const resultHTML = `<h1>Hasil</h1>
                        <p>Luas lingkaran dengan jari-jari ${radius} adalah ${area.toFixed(2)}</p>`;
    res.send(resultHTML);
  } else {
    res.send('Masukkan jari-jari lingkaran sebagai parameter radius');
  }
});

app.get('/keliling', (req, res) => {
  const radius = parseFloat(req.query.radius);
  if (!isNaN(radius)) {
    const circumference = 2 * Math.PI * radius;
    const resultHTML = `<h1>Hasil</h1>
                        <p>Keliling lingkaran dengan jari-jari ${radius} adalah ${circumference.toFixed(2)}</p>`;
    res.send(resultHTML);
  } else {
    res.send('Masukkan jari-jari lingkaran sebagai parameter radius');
  }
});

app.listen(3000, () => {
  console.log('Server berjalan pada http://localhost:3000');
});
