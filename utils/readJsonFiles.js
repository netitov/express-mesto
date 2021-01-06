const fs = require('fs').promises;

const readJsonFiles = (path) => fs.readFile(path)
  .catch(() => {
    throw new Error(`file ${path} not found`);
  })
  .then((text) => {
    try {
      return JSON.parse(text);
    } catch (err) {
      throw new Error('Json is invalid');
    }
  });

module.exports = readJsonFiles;
