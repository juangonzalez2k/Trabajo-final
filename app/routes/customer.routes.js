
const { create, findAll, findOne, update, deleteCustomer } = require("../controllers/customer.controllers");
var router = require('express').Router();
router.post('/', create);
router.get('/', findAll);
router.get('/:id', findOne);
router.put('/:id', update);
router.delete('/:id', deleteCustomer);

module.exports = router;