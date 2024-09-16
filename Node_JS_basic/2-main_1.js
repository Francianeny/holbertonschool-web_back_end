const countStudents = require('./2-read_file');
const path = require('path');

// Utilisation du chemin relatif pour accéder au fichier dans le sous-répertoire 'test'
const filePath = path.resolve(__dirname, 'test', 'database.csv');
countStudents(filePath);
