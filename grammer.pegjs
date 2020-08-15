{
    const ex = require('./executors/Executor');
}

start
= line 

// 1d100+5 <= 100 # comment
line
= left:formula "#" comment:.* { return new ex.CommentExecutor(left, comment); }
/ left:formula { return left; }


// 1d100+5 <= 100
formula
= left:role _ op:[<=>]+ _ right:integer { return new ex.CompareExecutor(left, right, op.join('')); }
/ left:role                    { return left; }

// 1d100 + 5
role
= left:dice _ "+" _ right:role  { return new ex.AddExecutor(left, right);}
/ left:dice _ "+" _ right:integer { return new ex.AddExecutor(left, right); }
/ left:dice { return left; }


dice
= left:integer "d" right:integer { return new ex.DiceRoleExecutor(left, right); }

integer
= ints:[0-9]+ { return new ex.NumberExecutor(Number.parseInt(ints.join(''))); }

// space
_  = [ \t\r\n]*