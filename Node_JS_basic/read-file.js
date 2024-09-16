const fs = require('fs');

fs.readFile('database.csv', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
