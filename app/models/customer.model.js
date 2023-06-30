const mongoose = require('mongoose');

const url = 'mongodb+srv://test:test1@cluster0.uaj2upz.mongodb.net/lospablos?retryWrites=true&w=majority';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos!');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
    process.exit();
  });

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;