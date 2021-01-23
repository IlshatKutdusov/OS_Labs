//lab2_3, var7: Составить процедуру, которая находит в тексте слова заданной длины. В качестве результата вывести исходный текст, найденные слова и их количество

var sym = WScript.Arguments(0), str;
 
function getWords (sym) {

    var state = true, k = 1,
        result = {
            count: 0,
            words: []
          };   

	while(state == true){
		str = WScript.Arguments(k);
		k++;
        if (str.charAt(0) == sym) {         
            result.count += 1;
            result.words.push(str);          
        }
		if (str.charAt(str.length-1) == '.')
			state = false;
	}
    return result;    
} 

var strResult = getWords(sym); 
WScript.Echo('Found ' + strResult.count+' words ');
WScript.Echo('Words: ' + strResult.words);

//cscript lab3_3.js s a sentence is a word or several words that express a complete thought.