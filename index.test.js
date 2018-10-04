const fn = require(`./`);

test(`it returns red`, () => {
  expect(fn()).toBe(`red`);
});