'use strict';

const inc = (numb) => {
  if (typeof numb === 'object') {
    numb.n += 1;
  }
};
const obj = { n: 5 };
inc(obj);
console.dir(obj);

module.exports = { inc };
