function Cipher(sentence){
  var length = sentence.length;
  var capitalSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1,-1) + sentence.charAt(length-1).toUpperCase();
  return capitalSentence;

}

var Cipher = function(sentence){
  var length = sentence.length;
    var capitalSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1,-1) + sentence.charAt(length-1).toUpperCase();
    return capitalSentence;
}

var Usersentence = window.prompt('Please enter a sentence');
alert(Cipher(Usersentence));  

var Usersentence = window.prompt('Please enter a sentence');
alert(Cipher(Usersentence));
