'use strict';

const masOfTypes = [1, 2, true, 'ghj', 'kh', 4, false, false];

const countTypesInArray = (mas) => {
  const obj = {};
  for (const value of mas) {
    const type = typeof value;
    if (obj[type] || 0) obj[type]++;
    else obj[type] = 1;
  }
  return obj;
};

const res = countTypesInArray(masOfTypes);
console.dir({ res });

module.exports = { countTypesInArray };
