let wordObject = {};

function calculateFrequency(){
    document.getElementById("finalList").innerText = '';
    var wordSet = document.getElementById("enteredText").value;
    //Sanitize wordset here  escape newline tab etc.
    var wordSetArray = wordSet.split(' ');
    console.log(wordSetArray[2])
    for (var i = 0; i < wordSetArray.length; i++) {
        if(!wordObject.hasOwnProperty(wordSetArray[i])){
            wordObject[wordSetArray[i]] = 1;
        }else{
            wordObject[wordSetArray[i]] += 1;
        }
    }
    document.getElementById("finalList").innerText = JSON.stringify(wordObject);
    wordObject = {};
};