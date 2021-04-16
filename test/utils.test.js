const utils = require('../helpers/utils.js');

test('getProducts returns an array', () => {
  return utils.getProducts().then(data => {
    expect(data).toBeInstanceOf(Array);
  });
});

test('getProductById returns an object when provided an id retrieved from getProducts()', () => {
  return utils.getProducts()
  .then(productList => {
    return utils.getProductById(productList[0].id);
  })
  .then(product => {
    expect(product).toBeInstanceOf(Object);
  });
});
