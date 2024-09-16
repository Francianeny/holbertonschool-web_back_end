const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  try {
    // Lire le fichier synchroniquement
    const data = fs.readFileSync(filePath, 'utf8');

    // Séparer les lignes
    const lines = data.trim().split('\n');

    // Assurer que le fichier n'est pas vide
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Extraire les en-têtes
    const headers = lines[0].split(',');
    const fieldIndex = headers.indexOf('field');
    if (fieldIndex === -1) {
      throw new Error('Invalid CSV format');
    }

    // Créer un objet pour stocker les données
    const studentsByField = {};
    let totalStudents = 0;

    // Traiter chaque ligne
    for (let i = 1; i < lines.length; i++) {
      const fields = lines[i].split(',');
      if (fields.length === headers.length) {
        const field = fields[fieldIndex];
        const name = fields[0];

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(name);
        totalStudents += 1;
      }
    }

    // Afficher les résultats
    console.log(`Number of students: ${totalStudents}`);
    for (const [field, names] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
