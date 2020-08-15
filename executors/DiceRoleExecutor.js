const AbstractExecutor = require("./AbstractExecutor");

AbstractExecutor = require('./AbstractExecutor');

class NumberExecutor extends AbstractExecutor
{
    dices = [];
    constructor(left, right)
    {
        this.childExecutor = { left, right };
    }

    executeMine() 
    { 
        const leftValue = this.childExecutor.left.getResult();
        const rightValue = this.childExecutor.right.getResult();

        this.dices = _.times(leftValue, v => Math.floor(Math.random() * rightValue) + 1); 

        return _.sum(this.dices);
    }

    echoMessage()
    {
        console.log(this.dices);
    }

}

module.exports = {
    NumberExecutor
};
