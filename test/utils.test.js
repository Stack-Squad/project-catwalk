const utils = require('../helpers/utils.js');

test('getProducts returns an array', () => utils.getProducts()
  .then((data) => {
    expect(data).toBeInstanceOf(Array);
  }));

test('getProductById returns an object when provided an id retrieved from getProducts()', () => utils.getProducts()
  .then((productList) => utils.getProductById(productList[0].id))
  .then((product) => {
    expect(product).toBeInstanceOf(Object);
  }));
