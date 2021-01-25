const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        const regex = /https?:\/\/.+/
        return regex.test(v);
      },
      message: 'Некорректная ссылка на аватар'
    }
  }
})

module.exports = mongoose.model('user', userSchema);
