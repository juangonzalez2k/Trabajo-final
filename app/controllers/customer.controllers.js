const Customer = require("../models/customer.model.js");

// Crear y guardar un nuevo Customer
exports.create = (req, res) => {
  // Validar la solicitud
  console.log(req.body)

  if (!req.body.email) {
    return res.status(400).send({ message: "El contenido no puede estar vacío!" });
  }

  // Crear un Customer
  const customer = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
  });

  // Guardar el Customer en la base de datos
  customer.save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear el Customer.",
      });
    });
};

// Recuperar todos los Customers de la base de datos
exports.findAll = (req, res) => {
  Customer.find()
    .then((customers) => {
      res.send(customers);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al recuperar los Customers.",
      });
    });
};

// Encontrar un solo Customer con un id
exports.findOne = (req, res) => {
  Customer.findById(req.params.id)
    .then((customer) => {
      if (!customer) {
        return res.status(404).send({
          message: "No se encontró Customer con id " + req.params.id,
        });
      }
      res.send(customer);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "No se encontró Customer con id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error al recuperar Customer con id " + req.params.id,
      });
    });
};

// Actualizar un Customer identificado por el id en la solicitud
exports.update = (req, res) => {
  // Validar la solicitud
  if (!req.body.email) {
    return res.status(400).send({
      message: "El contenido no puede estar vacío!",
    });
  }

  // Encontrar el Customer y actualizarlo con el cuerpo de la solicitud
  Customer.findByIdAndUpdate(
    req.params.id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    },
    { new: true }
  )
    .then((customer) => {
      if (!customer) {
        return res.status(404).send({
          message: "No se encontró Customer con id " + req.params.id,
        });
      }
      res.send(customer);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "No se encontró Customer con id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error al actualizar Customer con id " + req.params.id,
      });
    });
};

// Eliminar un Customer con el id especificado en la solicitud
exports.deleteCustomer = (req, res) => {
  Customer.findByIdAndRemove(req.params.id)
    .then((customer) => {
      if (!customer) {
        return res.status(404).send({
          message: "No se encontró Customer con id " + req.params.id,
        });
      }
      res.send({ message: "Customer eliminado exitosamente!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "No se encontró Customer con id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "No se pudo eliminar el Customer con id " + req.params.id,
      });
    });
};