const fs = require('fs');
const path = require('path');

// Ruta al archivo CSV
const csvPath = path.join(__dirname, 'public/pro_firm_details_v2-profirm_gps_v1_separado.csv');

// Ruta al archivo firmData.ts
const firmDataPath = path.join(__dirname, 'src/backend/firmData.ts');

// Leer el archivo CSV
fs.readFile(csvPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo CSV:', err);
    return;
  }

  // Extraer los nombres únicos de las firmas del CSV
  const lines = data.split('\n');
  const uniqueFirms = new Set(); // Usamos Set para mantener nombres únicos
  
  // Saltamos la primera línea (encabezados)
  for (let i = 1; i < lines.length; i++) {
    const columns = lines[i].split(',');
    if (columns.length > 0) {
      const firmName = columns[0].trim();
      // Solo agregamos si no está vacío y no es el encabezado
      if (firmName && firmName !== 'FIRM') {
        uniqueFirms.add(firmName);
      }
    }
  }

  // Convertir el Set a un array de objetos TopFirm
  const firms = Array.from(uniqueFirms).map((name, index) => ({
    id: (index + 1).toString(),
    name: name,
    websiteUrl: ""
  }));

  // Generar el contenido para firmData.ts
  const firmDataContent = `
export interface TopFirm {
  id: string;
  name: string;
  websiteUrl: string;
}

export const firmLinks: TopFirm[] = ${JSON.stringify(firms, null, 2)};
`;

  // Escribir el contenido en firmData.ts
  fs.writeFile(firmDataPath, firmDataContent, 'utf8', (err) => {
    if (err) {
      console.error('Error al escribir el archivo:', err);
      return;
    }
    console.log('Archivo firmData.ts generado correctamente.');
  });
});