//lab2_3, var7: Составить процедуру, которая в заданном тексте находит слова, начинающиеся с заданной буквы. В качестве результата вывести исходный текст, найденные слова и их количество.

var str = "a sentence is a word or several words that express a complete thought.", sym = 'a';
 
    function getWords (str, sym) {
      
      var arr = str.split(' '), i, s = " ",
          result = {
            count: 0,
            words: []
          };         
      for (i = 0; i < arr.length; i += 1) {   
      	s = arr[i];
        if (s.charAt(0) == sym) {         
            result.count += 1;
            result.words.push(arr[i]);          
        }      
      }      
      return result;    
    } 

WScript.Echo('\nSourse text: ' + str);
var strResult = getWords(str, sym); 
WScript.Echo('Found ' + strResult.count+' words ');
WScript.Echo('Words: ' + strResult.words);

//cscript lab2_3.js