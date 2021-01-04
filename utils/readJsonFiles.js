const fs = require('fs').promises;

const readJsonFiles = (path) => {
  return fs.readFile(path)
    .catch((err) => {
      throw `file ${path} not found`
    })
    .then((text) => {
      try {
        return JSON.parse(text);
      }
      catch (_) {
        throw 'Json is invalid'
      }
    })
}

module.exports = readJsonFiles;
