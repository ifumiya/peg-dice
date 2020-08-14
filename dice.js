const peg = require('./grammer.js');

const parse = (input) => {
    console.log(input, peg.parse(input));
};


parse('1d100');
parse('1d100 + 10');
parse('1d100 + 1d50');
parse('1d100 + 1d50 < 20');


