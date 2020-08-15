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
        this.execute();
        return this.result;
    }

    getExecutors() 
    {
        return {
            child: _.map(this.childExecutor, executor => executor.getExecutors()),
            mine: this,
        };
    }

    getDebugInfo()
    {
        return {
            child: _.map(this.childExecutor, executor => executor.getDebugInfo()),
            mine: this.getResult(),
        }
    }

    echoMessage() { }
}

module.exports = AbstractExecutor;
