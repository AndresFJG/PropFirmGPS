const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();

// Ruta para cargar el archivo CSV y enviar los datos al frontend
app.get('/api/firms', (req, res) => {
  const results = [];
  fs.createReadStream('./path/to/your/csv/pro_firm_details_v2-profirm_gps_v1.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.json(results);
    })
    .on('error', (err) => {
      res.status(500).json({ error: 'Error al leer el archivo CSV' });
    });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
