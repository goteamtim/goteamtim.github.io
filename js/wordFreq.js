let wordObject = {};

function calculateFrequency(){
    document.getElementById("finalList").innerText = '';
    var wordSet = document.getElementById("enteredText").value;
    var array1 = wordSet.split(' ');
    console.log(array1[2])
    for (var i = 0; i < array1.length; i++) {
        if(!wordObject.hasOwnProperty(array1[i])){
            wordObject[array1[i]] = 1;
        }else{
            wordObject[array1[i]] += 1;
        }
    }
    document.getElementById("finalList").innerText = JSON.stringify(wordObject);
    wordObject = {};
};