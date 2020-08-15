const _ = require('lodash');

class AbstractExecutor
{
    isExecuted = false;
    childExecutor = {};
    result = null;

    execute() 
    {
        if (this.isExecuted) {
            return;
        }
        this.isExecuted = true;
        _.each(this.childExecutor, executor => executor.execute());

        this.result = this.executeMine();
    }

    executeMine() { }

    getResult()
    {
        return this.result;
    }

    getExecutors() 
    {
        return _.map(this.childExecutor, executor => executor.getExecutors());
    }

    echoMessage() { }
}

module.exports = {
    AbstractExecutor
};
