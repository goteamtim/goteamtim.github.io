var wikiApiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&prop=revisions&rvprop=content&format=json&callback=?&search=',
    randomWikiArticle = 'https://en.wikipedia.org/wiki/Special:Random',
    form = document.getElementById("wiki-search-form"),
    searchBox = document.getElementById("wiki-search-box"),
    resultsList = document.getElementById("resultsList"),
    magGlass = document.getElementById("magnifying-glass");

function searchWikipedia(searchTerm, callback)
{
	var url = wikiApiUrl + encodeURIComponent(searchTerm);
    $.getJSON(url,callback);
}

function displayResults(responseText){
    document.getElementById("top-row").style.marginTop = "5%";
	//cycle through each result and add it to the page
    document.getElementById("resultsList").innerHTML = "";
    responseText["1"].forEach(function(element,index) {
        var wikiItem = document.createElement("div");
        var itemUrl = document.createElement("a");
        itemUrl.className = "wikiResultItem";
        
        var itemDesc = document.createElement("p");
        itemDesc.innerHTML = responseText["2"][index].substring(0,200);
        itemUrl.innerHTML = element;
        itemUrl.href = responseText["3"][index];
        itemUrl.style.display = "block";
        itemUrl.style.width = "100%";
        itemUrl.style.textDecoration = "none";
        //itemUrl.style.borderLeftColor = "orangered";
        //itemUrl.style.borderLeftStyle = "solid";
        //itemUrl.style.borderLeftWidth = "3px";
        itemUrl.appendChild(wikiItem);
        itemUrl.appendChild(itemDesc);
        resultsList.appendChild(itemUrl)
        //Build new element ul
        //add title [1]
        //add some description [2]
        //add url to article [3]
    }, this);
    //Now that everything is there 
    $('#resultsList').animate({'margin-top': '0px'}, 1000);
}



form.addEventListener("submit",function(event){
    event.preventDefault();
    searchWikipedia(searchBox.value,displayResults);
    console.log("asdf");
},false)

magGlass.addEventListener('click',function(){
    magGlass.style.width = "3em";
    magGlass.className = "hideMe"; //Hide magnifying glass handle
    setTimeout(function(){
        magGlass.remove();
        document.getElementById("wiki-search-box").style.display = "inline";
        document.getElementById("wiki-search-box").focus();
    },2000)
})