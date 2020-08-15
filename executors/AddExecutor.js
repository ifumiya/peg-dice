const AbstractExecutor = require("./AbstractExecutor");
const _ = require('lodash');

class AddExecutor extends AbstractExecutor
{
    constructor(left, right)
    {
        super();
        this.childExecutor = { left, right };
    }

    executeMine() 
    { 
        const results = _.map(this.childExecutor, executor => executor.getResult());

        return _.sum(results);
    }
}

module.exports = AddExecutor;
