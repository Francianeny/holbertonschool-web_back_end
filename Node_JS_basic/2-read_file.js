const fs = require('fs');

function countStudents(path) {
  try {
    // Lecture du fichier de manière synchrone
    const data = fs.readFileSync(path, 'utf8');

    // Séparer les lignes du fichier en fonction des retours à la ligne
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Vérifier qu'il y a des données (en excluant les lignes vides)
    if (lines.length === 0) throw new Error('Cannot load the database');

    // Enlever la première ligne qui correspond à l'en-tête (header)
    const headers = lines.shift();

    // Initialiser un objet pour stocker les étudiants par champ d'étude
    const studentsByField = {};

    lines.forEach(line => {
      const [firstname, lastname, age, field] = line.split(',');

      // Vérifier que la ligne est bien formatée
      if (firstname && field) {
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname.trim());
      }
    });

    // Afficher le nombre total d'étudiants
    const totalStudents = lines.length;
    console.log(`Number of students: ${totalStudents}`);

    // Afficher le nombre d'étudiants par champ et leurs prénoms
    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    // Si une erreur survient lors de la lecture du fichier, lancer l'erreur spécifiée
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
