const AbstractExecutor = require("./AbstractExecutor");

class CompareExecutor extends AbstractExecutor
{
    dices = [];
    operator = null;
    constructor(left, right, operator)
    {
        this.childExecutor = { left, right };
        this.operator = operator;
    }

    executeMine() 
    { 
        const leftValue = this.childExecutor.left.getResult();
        const rightValue = this.childExecutor.right.getResult();

        return this.compare(leftValue, rightValue, this.operator);
    }

    compare(left, right, op)
    {
        switch (op) {
            case '<': return left < right;
            case '<=': return left <= right;
            case '>=': return left >= right;
            case '>': return left > right;
            default: throw new Exception('unknown operator', op);
        }
    }

    echoMessage()
    {
        const msg = this.getResult ? '成功' : '失敗';
        console.log(msg);
    }

}

module.exports = {
    CompareExecutor
};
