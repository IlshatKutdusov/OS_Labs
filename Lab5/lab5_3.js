//lab5_3, var7
/*
7 Копирование дерева каталогов:
7.1 Создать исходное дерево каталогов;
7.2 С помощью Блокнота создать исходный файл;
7.3 Скопировать исходное дерево каталогов в результирующий каталог;
7.4 Изменить атрибуты файла в результирующем каталоге;
7.5 Вывести оглавление исходного и результирующего каталогов;
7.6 Вывести содержимое файла результирующего каталога;
*/

var path1 = WScript.Arguments(0), //путь исходного файла
filename1 = WScript.Arguments(1), // имя файла
path2 = WScript.Arguments(2), //путь результирующего файла
filename2 = WScript.Arguments(3), // имя результирующего файла
mode = WScript.Arguments(4);

shell = WScript.CreateObject("WScript.Shell");
shell.Run('%COMSPEC% /k mkdir "'+ path1 + '"'); // Создать исходное дерево каталогов;
// С помощью Блокнота создать исходный файл;
shell.Run(('notepad.exe "'+ path1 + '\\' + filename1 + '"'),1,true);
// Создать результирующий каталог;
shell.Run('%COMSPEC% /k mkdir "' + path2 + '"');

if (mode == "toFile") {
	// Скопировать исходное дерево каталогов в результирующий каталог;
	shell.Run('%COMSPEC% /k copy "'+ path1 +'\\'+ filename1 + '" "' + path2 +'\\'+ filename2 + '" > C:\\OS\\fileCOPY.txt"');
	// Изменить атрибуты файла в результирующем каталоге;
	shell.Run('%COMSPEC% /k attrib +r -a "' + path2 + '\\' + filename2 + '" > C:\\OS\\fileATTRIB.txt"');
	// Вывести оглавление исходного и результирующего каталогов;
	shell.Run('%COMSPEC% /k dir "' + path1 +'\\'+ filename1+ '" > C:\\OS\\fileDIR1.txt"');
	shell.Run('%COMSPEC% /k dir "' + path2 +'\\'+ filename2+ '" > C:\\OS\\fileDIR2.txt"');
	// Вывести содержимое файла результирующего каталога;
	shell.Run('%COMSPEC% /k type "' + path2 +'\\'+ filename2+ '" > C:\\OS\\fileTYPE.txt"');
} else {
	// Скопировать исходное дерево каталогов в результирующий каталог;
	shell.Run('%COMSPEC% /k copy "'+ path1 +'\\'+ filename1 + '" "' + path2 +'\\'+ filename2 + '"');
	// Изменить атрибуты файла в результирующем каталоге;
	shell.Run('%COMSPEC% /k attrib +r -a "' + path2 + '\\' + filename2 + '"');
	// Вывести оглавление исходного и результирующего каталогов;
	shell.Run('%COMSPEC% /k dir "' + path1 +'\\'+ filename1+ '"');
	shell.Run('%COMSPEC% /k dir "' + path2 +'\\'+ filename2+ '"');
	// Вывести содержимое файла результирующего каталога;
	shell.Run('%COMSPEC% /k type "' + path2 +'\\'+ filename2+ '"');
}

//cscript lab5_3.js C:\OS1 file1.txt C:\OS2 file2.txt