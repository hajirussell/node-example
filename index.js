const { result } = require("lodash");

let lodash = require("lodash");

const fixNames = (caps) => {
  let result = caps.toLowerCase();
  result = lodash.upperFirst(result);
  return result;
};

let name = "haji russell is testing some code right now...";

console.log(fixNames(name));

console.log(lodash.lowerCase(name));
console.log(lodash.upperCase(name));
console.log(lodash.startCase(name));
