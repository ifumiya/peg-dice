const AbstractExecutor = require("./AbstractExecutor");

class NumberExecutor extends AbstractExecutor
{
    value = 0

    constructor(value)
    {
        this.value = value;
    }

    executeMine() 
    { 
        return this.value;
    }

    getExecutors() 
    {
        return { mine: this };
    }
}

module.exports = NumberExecutor;
