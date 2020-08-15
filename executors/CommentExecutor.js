const AbstractExecutor = require("./AbstractExecutor");

AbstractExecutor = require('./AbstractExecutor');

class CommentExecutor extends AbstractExecutor
{
    comment = '';
    constructor(executor, comment)
    {
        this.childExecutor = { executor };
    }

    executeMine() 
    { 
        return this.childExecutor.executor.getResult();
    }

    echoMessage()
    {
        console.log(this.comment);
    }

}

module.exports = {
    CommentExecutor
};
