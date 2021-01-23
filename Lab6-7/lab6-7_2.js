//lab6-7_2, var7

var filename = WScript.Arguments(0);
var char = WScript.Arguments(1);
var mode = WScript.Arguments(2);

var shell = WScript.CreateObject("WScript.Shell");
var scr = WScript.CreateObject("Scripting.FileSystemObject");
var logfile = scr.CreateTextFile("log.txt");

shell.Run(shell.ExpandEnvironmentStrings("%WINDIR%\\notepad.exe " + filename),1,true);

var file = scr.GetFile(filename);
var text = String(file.OpenAsTextStream(1).ReadAll());


if (text.charAt(text.length - 1) == ".")
{
	text = text.replace(/\,/g);
	text = text.replace(/\./g);

	if (mode == 'file')
		logfile.Write("Sourse text: " + text + " ### Symbol: " + char)
	else
		WScript.Echo("Sourse text: " + text + " ### Symbol: " + char);

	function getWords (text, char) {
		var arr = text.split(' '), i, s,
		result = { count: 0, words: [] };
		for (i = 0; i < arr.length; i++) {
      		s = arr[i];
        	if (s.charAt(s.length - 1) == char) {
            	result.count += 1;
            	result.words.push(arr[i]);          
        	}      
      }      
      return result;    
    }

    var strResult = getWords(text, char);

    if (mode == 'file')
		logfile.Write(" ### Found " + strResult.count + " word(-s)" + " ### Word(-s): " + strResult.words)
	else
		WScript.Echo("Found " + strResult.count + " word(-s)" + " ### Word(-s): " + strResult.words);

} else {
	if (mode == 'file')
		logfile.Write("The text in the file doesn't have a DOT at the end.")
	else
		WScript.Echo("The text in the file doesn't have a DOT at the end.");
}

//cscript lab6-7_2.js text.txt a file