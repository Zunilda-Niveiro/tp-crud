const { check } = require('express-validator');

module.exports = [
      check('name')
      .notEmpty().withMessage('El nombre del producto es obligatorio').bail()
      .isLength({
         min : 5,
         max : 25 
      }).withMessage('El nombre debe tener un largo entre 5 y 25 letras'),

      check('price')
      .notEmpty().withMessage('El valor del producto es obligatorio').bail()
      .isNumeric({
         no_symbols : true
      }).withMessage('solamente valores positivos'),

      check('category')
      .notEmpty().withMessage('debes elegir la categoria'),

      check('description')
      .notEmpty().withMessage('tenes que darle una description').bail()
      .isLength({
         min : 5,
         max : 255
      }).withMessage('minimo de 5 letras y maximo de 255 letras')

];