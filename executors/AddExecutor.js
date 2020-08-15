const AbstractExecutor = require("./AbstractExecutor");

AbstractExecutor = require('./AbstractExecutor');

class AddExecutor extends AbstractExecutor
{
    constructor(left, right)
    {
        this.childExecutor = { left, right };
    }

    executeMine() 
    { 
        const results = _.map(this.childExecutor, executor => executor.getResult());

        return _.sum(results);
    }
}

module.exports = {
    AddExecutor
};
