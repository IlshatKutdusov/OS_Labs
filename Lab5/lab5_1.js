//lab5_1, var7

if(WScript.Arguments.count() == 0)
{ //только lab5_1.js)
	var shell = WScript.CreateObject("WScript.Shell");
	shell.Run("%COMSPEC% /K help ");
} else if(WScript.Arguments.count() == 1)
{ //(только команда)
	var command = WScript.Arguments(0);
	var shell = WScript.CreateObject("WScript.Shell");
	shell.Run("%COMSPEC% /K help " + command);
} else if(WScript.Arguments.count() == 3)
{ //команда, адрес и имя файла
	var command = WScript.Arguments(0);
	var path = WScript.Arguments(1);
	var filename = WScript.Arguments(2);
	var shell = WScript.CreateObject("WScript.Shell");
	var strCommand = "%COMSPEC% /C help " + command + '>' + path + filename;
	WScript.Echo(strCommand); // для отладки
	shell.Run(strCommand);
} 

//cscript lab5_1.js