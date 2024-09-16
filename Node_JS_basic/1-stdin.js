// Affiche le message de bienvenue
console.log('Welcome to Holberton School, what is your name?');

// Écouter les données entrantes de stdin (l'entrée utilisateur)
process.stdin.on('data', (data) => {
  const input = data.toString().trim(); // Convertit les données en chaîne et retire les espaces

  // Affiche le nom de l'utilisateur
  console.log(`Your name is: ${input}`);

  // Fermer le programme après l'entrée utilisateur
  process.stdin.end();
});

// Une fois que stdin est fermé (lorsque l'utilisateur appuie sur Ctrl+D ou quand stdin se termine)
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
