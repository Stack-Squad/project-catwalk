const utils = require('../helpers/utils.js');

test('utils.getProducts returns an array', () => {
  return utils.getProducts().then(data => {
    expect(data).toBeInstanceOf(Array);
  });
});
