import { beforeEach, expect, test } from '@jest/globals';

const fs = require('fs');
const path = require('path');

let fileData;

beforeEach((done) => {
  // Remplacez 'database.csv' par le chemin réel si nécessaire
  fs.readFile(path.join(__dirname, 'database.csv'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      done(err);
      return;
    }
    fileData = data;
    done();
  });
});

test('should read file data', () => {
  expect(fileData).toBeDefined();
  expect(fileData).toContain('some expected content'); // Ajoutez ce que vous attendez dans le fichier
});
