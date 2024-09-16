const fs = require('fs');
const path = require('path');

describe('File Reading Tests', () => {
  let fileData;

  beforeEach(async () => {
    fileData = await new Promise((resolve, reject) => {
      fs.readFile(path.join(__dirname, 'database.csv'), 'utf8', (err, data) => {
        if (err) {
          return reject(err);
        }
        resolve(data);
      });
    });
  });

  test('should read file data', () => {
    expect(fileData).toBeDefined();
    expect(fileData).toContain('some expected content'); // Ajustez selon ce que vous attendez dans le fichier
  });
});
