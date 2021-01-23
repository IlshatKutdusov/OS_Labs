//lab3_2, var7: A_n=(n!)/(n^sqrt(n))

function step(num, d)
{
    var res = 1;
    for (i = 0; i < d; i++)
        res *= num;
    return res;
}

function factorial(num)
{
    var res = 1;
    if (num > 0) 
	res = num * factorial(num-1);
    return res;
}

var ns = WScript.Arguments(0);
var n = parseInt(ns, 10);
var result = 0;

for (i=1; i<(n+1); i++)
	result += (factorial(i))/(step(n, Math.sqrt(i)));
WScript.Echo("Result: "+result);

