//lab6-7_1, var7
/*
7 Копирование дерева каталогов:
7.1 Создать исходное дерево каталогов;
7.2 С помощью Блокнота создать исходный файл;
7.3 Скопировать исходное дерево каталогов в рез.-щий каталог;
7.4 Изменить атрибуты файла в результирующем каталоге;
7.5 Вывести оглавление исходного и результирующего каталогов;
7.6 Вывести содержимое файла результирующего каталога;

*/

var path1 = WScript.Arguments(0), //путь исходного файла
filename1 = WScript.Arguments(1), // имя файла
path2 = WScript.Arguments(2), //путь результирующего файла
mode = WScript.Arguments(3); //режим вывода

var scr = WScript.CreateObject("Scripting.FileSystemObject");

scr.CreateFolder(path1); //7.1 Создать исходное дерево каталогов;

//7.2 С помощью Блокнота создать исходный файл;
scr.CreateTextFile(path1 + '\\' + filename1, true);
var shell = WScript.CreateObject("WScript.Shell")
shell.Run(('notepad.exe "' + shell.CurrentDirectory + '\\'+ path1 + '\\' + filename1 + '"'), 1, true);

//7.3 Скопировать исходное дерево каталогов в рез.-щий каталог;
scr.CreateFolder(path2);
scr.CopyFile(path1 + '\\' + filename1, path2 + '\\', true);

//7.4 Изменить атрибуты файла в результирующем каталоге;
scr.GetFile(path2 + '\\' + filename1).Attributes = 1,1;

var file = scr.GetFile(path2 + '\\' + filename1);

if (mode == 'file')
{
	var logfile = scr.CreateTextFile("log.txt");
	//7.5 Вывести оглавление исходного и результирующего каталогов;
	logfile.Write("Sourse Folder: " + scr.GetFolder(path1));
	logfile.Write(" ### Result Folder: " + scr.GetFolder(path2));
	//7.6 Вывести содержимое файла результирующего каталога;
	logfile.Write(" ### Result File: " + file.OpenAsTextStream(1).ReadALL());
} else {
	//7.5 Вывести оглавление исходного и результирующего каталогов;
	WScript.Echo("Sourse Folder: " + scr.GetFolder(path1));
	WScript.Echo("Result Folder: " + scr.GetFolder(path2));
	//7.6 Вывести содержимое файла результирующего каталога;
	WScript.Echo("Result File: " + file.OpenAsTextStream(1).ReadALL());
}


//cscript lab6-7_1.js OS file.txt OS2 console