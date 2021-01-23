//lab5_2, var7

var path = WScript.Arguments(0) + '\\';
var filename = WScript.Arguments(1);
var mode = WScript.Arguments(2);
var Shell = WScript.CreateObject("WScript.Shell");
Shell.Run(("notepad.exe '" + path + filename + "'"), 1, true);
if (mode == "cmd")
	Shell.Run('cmd.exe /K cscript "' + path + filename + '"');
else if (mode == "window")
		Shell.Run('cmd.exe /K wscript "' + path + filename + '" & exit');
	else
		WScript.Echo("MODE selection error!");

//cscript lab5_2.js C:\OS lab5_2_test.js window
//WScript.Echo("lab5_2_test_message");