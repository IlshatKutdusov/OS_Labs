//lab1, var7: A_n = (1!+2!+...+n!)/(2*n)!

function factorial(num)
{
    var res = 1;
    if (num > 0) 
	res = num * factorial(num-1);
    return res;
}

var n = 20;
var result = 0;

for (i=1; i<(n+1); i++)
	result += factorial(i);
result = result/factorial(2*n);
WScript.Echo("Result: "+result);

