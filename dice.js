const peg = require('./grammer.js');
const util = require('util')


const parse = (input) => {
    const executor = peg.parse(input);
    const result = executor.getResult();
    console.log(util.inspect(executor.getDebugInfo(), {showHidden: false, depth: null}))
    console.log(input, result);
};


parse('1d100');
parse('1d100 + 10');
parse('1d100 + 1d50');
parse('1d100 + 1d50 < 20');


