// 1d100+5 <= 100 # comment


start
= line 

// 1d100+5 <= 100 # comment
line
= left:formula "#" .* { return left; }
/ left:formula { return left; }


// 1d100+5 <= 100
formula
= left:role _ op:[<=>] _ right:integer { return { type: 'compare', left, right, op}; }
/ left:role                    { return left; }

// 1d100 + 5
role
= left:dice _ "+" _ right:role  { return { type: 'add', left, right}; }
/ left:dice _ "+" _ right:integer { return { type: 'add', left, right}; }
/ left:dice { return left; }


dice
= left:integer "d" right:integer { return { type: 'dice', left, right}; }

integer
= int:[0-9]+ { return Number.parseInt(int); }

// space
_  = [ \t\r\n]*