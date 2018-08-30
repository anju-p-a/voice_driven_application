
function ContainsAny(str, items){
for(var i in items){
    var item = items[i];
    if (str.indexOf(item) > -1){
        return true;
    }

}
return false;
}

function convertext(){
var result = document.getElementById('demo');
if('webkitSpeechRecognition' in window){

 var recognitionObject = new webkitSpeechRecognition()
 //make microphone on
 recognitionObject.continuous = true
 //make interim resuts appear
 recognitionObject.interimResults = true
 //set the desired language
 recognitionObject.lang = 'en-US'
 //start the recognizer
 recognitionObject.start()
  recognitionObject.onstart = function(){
    document.getElementById('test').innerHTML = "Recognition has started started"
 }

  recognitionObject.onresult = function(event) {

  var temporarytext = " "
  var finaltext = " "
   for ( var i = event.resultIndex; i < event.results.length; ++i){

     var text = event.results[i][0].transcript
     //text.replace("\n","<br>")
    if(event.results[i].isFinal){
       finaltext = text
     }else {
       temporarytext = text}
      }

  result.innerHTML = finaltext+temporarytext.fontcolor("red")
  finaltext = finaltext.toLowerCase()
  //based on the command the appropriate action is taken
    if (ContainsAny(finaltext, ["draw circle", "make circle","create circle"])) {
          circle("draw")
     } else if (ContainsAny(finaltext, ["down circle","down","under"])) {
          circle("down")
     } else if (ContainsAny(finaltext,["up circle","up","top"])){
          circle("up")
    } else if (ContainsAny(finaltext,["left","left circle","move left"])){
          circle("left")}
      else if (ContainsAny(finaltext,["right","right Circle","move right"])){
          circle("right")
    }else if (ContainsAny(finaltext,["big","bigger","large"])){
          circle("big")
    }else if(ContainsAny(finaltext,["small","smaller","tiny"])){
          circle("small")
    }
   finaltext = " "

}



   recognitionObject.onend = function(event) {
     document.getElementById('test').innerHTML = " Recognition  ended"
     convertext()

}

}
// recognitionObject.onerror = function(event) {

// }else {

// }


else {
 result.innerHTML = "Problem with the speech recognizer"
}

}
