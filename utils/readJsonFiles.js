const fs = require('fs').promises;

const readJsonFiles = (path) => fs.readFile(path)
  .catch(() => {
    throw `file ${path} not found`;
  })
  .then((text) => {
    try {
      return JSON.parse(text);
    } catch (_) {
      throw 'Json is invalid';
    }
  });

module.exports = readJsonFiles;
