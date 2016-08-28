var wikiApiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&prop=revisions&rvprop=content&format=json&callback=?&search=',
    randomWikiArticle = 'https://en.wikipedia.org/wiki/Special:Random',
    form = document.getElementById("wiki-search-form"),
    searchBox = document.getElementById("wiki-search-box"),
    resultsList = document.getElementById("resultsList");

function searchWikipedia(searchTerm, callback)
{
	var url = wikiApiUrl + encodeURIComponent(searchTerm);
    $.getJSON(url,callback);
}

function displayResults(responseText){
	//cycle through each result and add it to the page
    console.log(typeof(responseText))
    responseText["1"].forEach(function(element,index) {
        var wikiItem = document.createElement("LI");
        wikiItem.className = "wikiResultItem";
        var itemUrl = document.createElement("a");
        var itemDesc = document.createElement("p");
        itemDesc.innerHTML = responseText["2"][index].substring(0,200);
        itemUrl.innerHTML = element;
        itemUrl.href = responseText["3"][index];
        itemUrl.style.display = "block";
        itemUrl.style.width = "100%";
        itemUrl.style.height = "100%";
        wikiItem.appendChild(itemUrl);
        wikiItem.appendChild(itemDesc);
        resultsList.appendChild(wikiItem)
        //Build new element ul
        //add title [1]
        //add some description [2]
        //add url to article [3]
    }, this);
}



form.addEventListener("submit",function(event){
    event.preventDefault();
    searchWikipedia(searchBox.value,displayResults);
    console.log("asdf");
},false)